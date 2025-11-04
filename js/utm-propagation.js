(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var search = window.location.search;
    if (!search || search === '?') {
      return;
    }

    var params = new URLSearchParams(search);
    var hasUtm = false;
    params.forEach(function (_, key) {
      if (key.toLowerCase().startsWith('utm')) {
        hasUtm = true;
      }
    });

    if (!hasUtm) {
      return;
    }

    var links = document.querySelectorAll('a[data-cta="connect"]');
    links.forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) {
        return;
      }

      try {
        var url = new URL(href, window.location.origin);
        var linkParams = new URLSearchParams(url.search);

        params.forEach(function (value, key) {
          if (key.toLowerCase().startsWith('utm') && !linkParams.has(key)) {
            linkParams.set(key, value);
          }
        });

        var query = linkParams.toString();
        var newHref = url.pathname;
        if (query) {
          newHref += '?' + query;
        }
        if (url.hash) {
          newHref += url.hash;
        }

        link.setAttribute('href', newHref);
      } catch (e) {
        /* ignore malformed URLs */
      }
    });
  });
})();
