(function () {
  'use strict';

  class AccreditationCarousel {
    constructor(root) {
      this.root = root;
      this.viewport = root.querySelector('.carousel-viewport');
      this.track = root.querySelector('.carousel-track');
      this.prevButton = root.querySelector('[data-direction="prev"]');
      this.nextButton = root.querySelector('[data-direction="next"]');
      this.dotsContainer = root.querySelector('.carousel-dots');
      this.interval = parseInt(root.getAttribute('data-autoplay-interval'), 10) || 3000;
      this.motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

      this.autoTimer = null;
      this.isHovering = false;
      this.isTouching = false;
      this.isFocusWithin = false;
      this.isTransitioning = false;
      this.touchStartX = 0;
      this.touchDeltaX = 0;

      this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
      this.handleResize = this.handleResize.bind(this);
      this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
      this.handleKeydown = this.handleKeydown.bind(this);
      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
      this.handleFocusIn = this.handleFocusIn.bind(this);
      this.handleFocusOut = this.handleFocusOut.bind(this);
      this.handleTouchStart = this.handleTouchStart.bind(this);
      this.handleTouchMove = this.handleTouchMove.bind(this);
      this.handleTouchEnd = this.handleTouchEnd.bind(this);
      this.handleMotionPreferenceChange = this.handleMotionPreferenceChange.bind(this);

      this.init();
    }

    init() {
      if (!this.track || !this.viewport) {
        return;
      }

      this.root.setAttribute('tabindex', '0');
      this.root.setAttribute('role', 'group');
      const label = this.root.getAttribute('data-carousel-label') || 'Accreditation carousel';
      this.root.setAttribute('aria-label', label);

      this.originalSlides = Array.from(this.track.children);
      this.originalCount = this.originalSlides.length;

      if (!this.originalCount) {
        return;
      }

      this.buildDots();
      this.cloneSlides();

      this.slides = Array.from(this.track.children);
      this.currentIndex = this.originalCount;

      this.updateMetrics();
      this.updatePosition(false);
      this.updateDots();

      this.attachEvents();
      this.startAutoplay();
    }

    buildDots() {
      if (!this.dotsContainer) {
        return;
      }

      this.dotsContainer.innerHTML = '';
      const fragment = document.createDocumentFragment();
      this.dots = [];

      this.originalSlides.forEach((slide, index) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'carousel-dot';
        dot.dataset.index = String(index);
        dot.setAttribute('role', 'tab');
        dot.setAttribute('aria-label', `切换到第 ${index + 1} 张认证`);
        dot.setAttribute('aria-selected', 'false');
        dot.setAttribute('tabindex', '-1');
        fragment.appendChild(dot);
        this.dots.push(dot);
      });

      this.dotsContainer.appendChild(fragment);

      this.dotsContainer.addEventListener('click', (event) => {
        const button = event.target.closest('button[data-index]');
        if (!button) {
          return;
        }
        const index = Number(button.dataset.index);
        if (Number.isNaN(index)) {
          return;
        }
        this.moveToNormalized(index);
      });
    }

    cloneSlides() {
      const startFragment = document.createDocumentFragment();
      const endFragment = document.createDocumentFragment();

      this.originalSlides.forEach((slide) => {
        const clone = slide.cloneNode(true);
        clone.classList.add('is-clone');
        endFragment.appendChild(clone);
      });

      for (let i = this.originalSlides.length - 1; i >= 0; i -= 1) {
        const clone = this.originalSlides[i].cloneNode(true);
        clone.classList.add('is-clone');
        startFragment.appendChild(clone);
      }

      this.track.insertBefore(startFragment, this.track.firstChild);
      this.track.appendChild(endFragment);
    }

    attachEvents() {
      if (this.prevButton) {
        this.prevButton.addEventListener('click', () => this.moveBy(-1));
      }

      if (this.nextButton) {
        this.nextButton.addEventListener('click', () => this.moveBy(1));
      }

      this.root.addEventListener('keydown', this.handleKeydown);
      this.root.addEventListener('mouseenter', this.handleMouseEnter);
      this.root.addEventListener('mouseleave', this.handleMouseLeave);
      this.root.addEventListener('focusin', this.handleFocusIn);
      this.root.addEventListener('focusout', this.handleFocusOut);

      if (this.viewport) {
        this.viewport.addEventListener('touchstart', this.handleTouchStart, { passive: true });
        this.viewport.addEventListener('touchmove', this.handleTouchMove, { passive: true });
        this.viewport.addEventListener('touchend', this.handleTouchEnd);
        this.viewport.addEventListener('touchcancel', this.handleTouchEnd);
      }

      this.track.addEventListener('transitionend', this.handleTransitionEnd);
      document.addEventListener('visibilitychange', this.handleVisibilityChange);
      window.addEventListener('resize', this.handleResize);

      if (typeof this.motionQuery.addEventListener === 'function') {
        this.motionQuery.addEventListener('change', this.handleMotionPreferenceChange);
      } else if (typeof this.motionQuery.addListener === 'function') {
        this.motionQuery.addListener(this.handleMotionPreferenceChange);
      }
    }

    handleKeydown(event) {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        this.moveBy(1);
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        this.moveBy(-1);
      }
    }

    handleMouseEnter() {
      this.isHovering = true;
      this.pauseAutoplay();
    }

    handleMouseLeave() {
      this.isHovering = false;
      this.resumeAutoplay();
    }

    handleFocusIn() {
      this.isFocusWithin = true;
      this.pauseAutoplay();
    }

    handleFocusOut(event) {
      if (!this.root.contains(event.relatedTarget)) {
        this.isFocusWithin = false;
        this.resumeAutoplay();
      }
    }

    handleTouchStart(event) {
      if (!event.touches || event.touches.length === 0) {
        return;
      }
      this.isTouching = true;
      this.pauseAutoplay();
      this.touchStartX = event.touches[0].clientX;
      this.touchDeltaX = 0;
    }

    handleTouchMove(event) {
      if (!event.touches || event.touches.length === 0) {
        return;
      }
      this.touchDeltaX = event.touches[0].clientX - this.touchStartX;
    }

    handleTouchEnd() {
      if (Math.abs(this.touchDeltaX) > 40) {
        this.moveBy(this.touchDeltaX < 0 ? 1 : -1);
      }
      this.isTouching = false;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this.resumeAutoplay();
    }

    handleTransitionEnd(event) {
      if (event.target !== this.track || event.propertyName !== 'transform') {
        return;
      }
      this.snapIfNeeded();
      this.isTransitioning = false;
      this.updateDots();
    }

    handleVisibilityChange() {
      if (document.hidden) {
        this.pauseAutoplay();
      } else {
        this.resumeAutoplay();
      }
    }

    handleResize() {
      this.updateMetrics();
      this.updatePosition(false);
    }

    handleMotionPreferenceChange(event) {
      if (event.matches) {
        this.pauseAutoplay();
      } else {
        this.resumeAutoplay();
      }
    }

    updateMetrics() {
      if (!this.slides || !this.slides.length) {
        return;
      }
      const slide = this.slides[this.currentIndex] || this.slides[0];
      if (!slide) {
        return;
      }
      const rect = slide.getBoundingClientRect();
      const computed = window.getComputedStyle(this.track);
      const gapValue = parseFloat(computed.columnGap || computed.gap || '0') || 0;
      this.slideWidth = rect.width;
      this.gap = gapValue;
      this.stepSize = this.slideWidth + this.gap;
    }

    moveBy(delta) {
      if (this.isTransitioning) {
        return;
      }
      this.currentIndex += delta;
      this.updatePosition(true);
      this.updateDots();
      this.restartAutoplay();
    }

    moveToNormalized(index) {
      const safeIndex = Math.max(0, Math.min(index, this.originalCount - 1));
      this.currentIndex = safeIndex + this.originalCount;
      this.updatePosition(true);
      this.updateDots();
      this.restartAutoplay();
    }

    updatePosition(animate) {
      this.updateMetrics();
      const target = -this.currentIndex * this.stepSize;

      if (!animate) {
        this.track.style.transition = 'none';
        this.track.style.transform = `translateX(${target}px)`;
        // Force reflow then restore transition for future animations
        void this.track.offsetWidth;
        this.track.style.transition = 'transform 0.6s ease';
        this.isTransitioning = false;
        return;
      }

      this.isTransitioning = true;
      requestAnimationFrame(() => {
        this.track.style.transition = 'transform 0.6s ease';
        this.track.style.transform = `translateX(${target}px)`;
      });
    }

    snapIfNeeded() {
      if (this.currentIndex >= this.originalCount * 2) {
        this.currentIndex -= this.originalCount;
        this.updatePosition(false);
      } else if (this.currentIndex < this.originalCount) {
        this.currentIndex += this.originalCount;
        this.updatePosition(false);
      }
    }

    getNormalizedIndex() {
      if (!this.originalCount) {
        return 0;
      }
      const index = (this.currentIndex - this.originalCount) % this.originalCount;
      return (index + this.originalCount) % this.originalCount;
    }

    updateDots() {
      if (!this.dots) {
        return;
      }
      const normalized = this.getNormalizedIndex();
      this.dots.forEach((dot, index) => {
        const isActive = index === normalized;
        dot.classList.toggle('is-active', isActive);
        dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
        dot.setAttribute('tabindex', isActive ? '0' : '-1');
      });
    }

    startAutoplay() {
      if (this.motionQuery.matches) {
        return;
      }
      this.resumeAutoplay();
    }

    pauseAutoplay() {
      if (this.autoTimer) {
        clearInterval(this.autoTimer);
        this.autoTimer = null;
      }
    }

    resumeAutoplay() {
      if (this.autoTimer) {
        return;
      }
      if (this.isHovering || this.isTouching || this.isFocusWithin || document.hidden) {
        return;
      }
      if (this.motionQuery.matches || !this.interval || this.interval <= 0) {
        return;
      }
      this.autoTimer = window.setInterval(() => {
        this.moveBy(1);
      }, this.interval);
    }

    restartAutoplay() {
      this.pauseAutoplay();
      this.resumeAutoplay();
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.accreditations-carousel');
    carousels.forEach((carousel) => {
      if (!carousel.dataset.carouselInitialized) {
        // eslint-disable-next-line no-new
        new AccreditationCarousel(carousel);
        carousel.dataset.carouselInitialized = 'true';
      }
    });
  });
})();
