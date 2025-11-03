const desktopHeaderHTML = `
<header class="bg-white border-b border-gray-200">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center py-3">
      <div class="flex items-center space-x-2 text-sm text-gray-600">
        <span></span>
      </div>
      <div class="flex items-center">
        <div class="w-32 rounded-full flex items-center justify-center">
          <img src="img/wechat_2025-09-28_121733_576.png" alt="WeChat QR" class="h-16 w-16 rounded-full object-cover">
          <img src="img/U-02(1).jpg" alt="The Academy at MiraCosta" class="h-16 w-16 rounded-full object-cover">
        </div>
      </div>
      <div class="flex items-center space-x-3"></div>
    </div>
  </div>
</header>
<nav class="bg-aaa-800 text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-center space-x-8 py-4">
      <a href="index.html">Home</a>
      <div class="relative group">
        <a href="the-academy-at-miracosta.html" class="inline-flex items-center">About</a>
        <div class="absolute left-1/2 z-20 hidden w-48 -translate-x-1/2 transform pt-2 group-hover:block">
          <div class="overflow-hidden rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5">
            <a href="the-academy-at-miracosta.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Overview</a>
            <a href="facultystaff.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Faculty and Staff</a>
          </div>
        </div>
      </div>
      <a href="UCPP.html">UCPP</a>
      <a href="highschool.html">Learning</a>
      <a href="university-transfer.html">University Transfer</a>
      <a href="activities.html">Services</a>
      <a href="campus-life.html">Campus Life</a>
      <a href="junior-programs.html">Junior Programs</a>
      <a href="connect.html">Connect</a>
    </div>
  </div>
</nav>
`;

const mobileHeaderHTML = `
<header class="bg-white border-b border-gray-200 shadow-sm">
  <div class="max-w-3xl mx-auto px-4 py-4 flex flex-col items-center space-y-4">
    <div class="flex items-center space-x-4">
      <img src="img/wechat_2025-09-28_121733_576.png" alt="WeChat QR" class="h-16 w-16 rounded-full object-cover">
      <img src="img/U-02(1).jpg" alt="The Academy at MiraCosta" class="h-16 w-16 rounded-full object-cover">
    </div>
    <div class="text-center space-y-1">
      <p class="text-sm uppercase tracking-widest text-gray-500">The Academy at MiraCosta</p>
      <p class="text-lg font-semibold text-gray-700">A High School Completion Program</p>
    </div>
  </div>
</header>
<nav class="bg-aaa-800 text-white sticky top-0 z-40 shadow-md">
  <div class="max-w-3xl mx-auto px-4">
    <div class="flex items-center justify-between py-3">
      <span class="text-sm font-semibold tracking-wider uppercase">Navigate</span>
      <button id="mobileMenuButton" class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white" aria-expanded="false" aria-controls="mobileMenu" aria-label="Toggle navigation" type="button">
        <span class="sr-only">Toggle navigation</span>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO2OF3kAAAAASUVORK5CYII=" alt="Mobile navigation toggle" class="w-6 h-6 object-contain" loading="lazy">
      </button>
    </div>
    <div id="mobileMenu" class="hidden flex-col space-y-3 pb-4 text-sm">
      <a class="nav-link" href="index-mobile.html">Home</a>
      <div class="space-y-2">
        <a class="nav-link" href="the-academy-at-miracosta-mobile.html">About</a>
        <a class="nav-link pl-4" href="facultystaff.html">Faculty and Staff</a>
      </div>
      <a class="nav-link" href="UCPP-mobile.html">UCPP</a>
      <a class="nav-link" href="highschool-mobile.html">Learning</a>
      <a class="nav-link" href="university-transfer-mobile.html">University Transfer</a>
      <a class="nav-link" href="activities-mobile.html">Services</a>
      <a class="nav-link" href="campus-life-mobile.html">Campus Life</a>
      <a class="nav-link" href="junior-programs-mobile.html">Junior Programs</a>
      <a class="nav-link" href="connect-mobile.html">Connect</a>
    </div>
  </div>
</nav>
`;

const desktopFooterHTML = `
<footer class="bg-aaa-800 text-white py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
      <div class="md:col-span-1">
        <div class="flex items-center mb-4">
          <div class="w-10 h-10 rounded-full flex items-center justify-center mr-3">
            <img src="img/wechat_2025-09-28_143418_873.png" alt="The Academy icon" class="h-10 w-10 rounded-full object-cover">
          </div>
          <div>
            <div class="font-bold">The Academy</div>
            <div class="text-sm text-gray-400">at MiraCosta</div>
          </div>
        </div>
      </div>
      <div>
        <h4 class="font-bold mb-4 text-gray-300">QUICK NAVIGATION</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="index.html" class="text-gray-400 hover:text-white">Home</a></li>
          <li><a href="the-academy-at-miracosta.html" class="text-gray-400 hover:text-white">About</a></li>
          <li><a href="highschool.html" class="text-gray-400 hover:text-white">Learning</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold mb-4 text-gray-300">QUICK NAVIGATION</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="university-transfer.html" class="text-gray-400 hover:text-white">University Transfer</a></li>
          <li><a href="activities.html" class="text-gray-400 hover:text-white">Services</a></li>
          <li><a href="campus-life.html" class="text-gray-400 hover:text-white">Campus Life</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold mb-4 text-gray-300">QUICK NAVIGATION</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="junior-programs.html" class="text-gray-400 hover:text-white">Junior Programs</a></li>
          <li><a href="connect.html" class="text-gray-400 hover:text-white">Connect</a></li>
          <li><a href="facultystaff.html" class="text-gray-400 hover:text-white">Faculty and Staff</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold mb-4 text-gray-300">GET IN TOUCH</h4>
        <div class="text-sm text-gray-400 space-y-1">
          <div>Oceanside, CA 92056</div>
          <div>Tel: +1 510-499-2449</div>
          <div>admission@tam-ucpp.com</div>
        </div>
        <div class="footer-images mt-4">
          <div class="img-hover">
            <img src="img/652e4097-99e6-4d0f-a7ec-74dfa7e48db7.jpg" alt="WeChat" class="rounded-lg shadow-md">
            <span>WeChat</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
`;

const mobileFooterHTML = `
<footer class="bg-aaa-800 text-white py-12">
  <div class="max-w-3xl mx-auto px-6 space-y-10">
    <div class="flex flex-col items-center space-y-4">
      <div class="flex items-center space-x-3">
        <img src="img/wechat_2025-09-28_143418_873.png" alt="The Academy icon" class="h-12 w-12 rounded-full object-cover">
        <div class="text-left">
          <div class="font-bold tracking-wide">The Academy</div>
          <div class="text-sm text-gray-400">at MiraCosta</div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-6 text-sm">
      <div class="space-y-3">
        <h4 class="footer-heading">Quick Navigation</h4>
        <ul class="space-y-2">
          <li><a href="index-mobile.html" class="footer-link">Home</a></li>
          <li><a href="the-academy-at-miracosta-mobile.html" class="footer-link">About</a></li>
          <li><a href="highschool-mobile.html" class="footer-link">Learning</a></li>
        </ul>
      </div>
      <div class="space-y-3">
        <h4 class="footer-heading">Quick Navigation</h4>
        <ul class="space-y-2">
          <li><a href="university-transfer-mobile.html" class="footer-link">University Transfer</a></li>
          <li><a href="activities-mobile.html" class="footer-link">Services</a></li>
          <li><a href="campus-life-mobile.html" class="footer-link">Campus Life</a></li>
        </ul>
      </div>
      <div class="space-y-3">
        <h4 class="footer-heading">Quick Navigation</h4>
        <ul class="space-y-2">
          <li><a href="junior-programs-mobile.html" class="footer-link">Junior Programs</a></li>
          <li><a href="connect-mobile.html" class="footer-link">Connect</a></li>
          <li><a href="facultystaff.html" class="footer-link">Faculty and Staff</a></li>
        </ul>
      </div>
      <div class="space-y-3">
        <h4 class="footer-heading">Get in Touch</h4>
        <div class="text-gray-300 space-y-1">
          <div>Oceanside, CA 92056</div>
          <div>Tel: +1 510-499-2449</div>
          <div>admission@tam-ucpp.com</div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center space-y-4">
      <div class="img-hover">
        <img src="img/652e4097-99e6-4d0f-a7ec-74dfa7e48db7.jpg" alt="WeChat contact" class="rounded-lg shadow-md">
        <span>WeChat</span>
      </div>
    </div>
  </div>
</footer>
`;

const layoutUtilityStyles = `
.text-white a:hover { color: #2A8542; }
.footer-images { display: flex; gap: 20px; justify-content: center; }
.img-hover { display: flex; flex-direction: column; align-items: center; cursor: pointer; }
.img-hover img { width: 120px; object-fit: cover; transition: opacity 0.3s ease; }
.img-hover span { margin-top: 8px; font-size: 14px; color: #fff; text-align: center; }
.footer-heading { font-weight: 700; color: #D1D5DB; }
.footer-link { color: #D1D5DB; display: inline-block; }
.footer-link:hover { color: #FFFFFF; }
`;

function ensureLayoutStyles() {
  if (!document.getElementById('shared-layout-styles')) {
    const style = document.createElement('style');
    style.id = 'shared-layout-styles';
    style.textContent = layoutUtilityStyles;
    document.head.appendChild(style);
  }
}

function injectLayout(sectionAttribute, html) {
  const target = document.querySelector(`[data-include="${sectionAttribute}"]`);
  if (target) {
    target.innerHTML = html;
    return target;
  }
  return null;
}

function initializeMobileMenu(container) {
  if (!container) return;
  const toggleButton = container.querySelector('#mobileMenuButton');
  const menu = container.querySelector('#mobileMenu');
  if (!toggleButton || !menu) return;

  toggleButton.addEventListener('click', () => {
    const expanded = toggleButton.getAttribute('aria-expanded') === 'true';
    toggleButton.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('hidden');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  ensureLayoutStyles();
  injectLayout('desktop-header', desktopHeaderHTML);
  injectLayout('desktop-footer', desktopFooterHTML);
  const mobileHeader = injectLayout('mobile-header', mobileHeaderHTML);
  injectLayout('mobile-footer', mobileFooterHTML);
  initializeMobileMenu(mobileHeader);
});
