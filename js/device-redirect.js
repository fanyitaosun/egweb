(function () {
  const path = window.location.pathname;
  const fileName = path.substring(path.lastIndexOf('/') + 1) || 'index.html';

  const redirectMap = {
    'index.html': 'index-mobile.html',
    'index-mobile.html': 'index.html',
    'the-academy-at-miracosta.html': 'the-academy-at-miracosta-mobile.html',
    'the-academy-at-miracosta-mobile.html': 'the-academy-at-miracosta.html',
    'UCPP.html': 'UCPP-mobile.html',
    'UCPP-mobile.html': 'UCPP.html',
    'highschool.html': 'highschool-mobile.html',
    'highschool-mobile.html': 'highschool.html',
    'university-transfer.html': 'university-transfer-mobile.html',
    'university-transfer-mobile.html': 'university-transfer.html',
    'activities.html': 'activities-mobile.html',
    'activities-mobile.html': 'activities.html',
    'campus-life.html': 'campus-life-mobile.html',
    'campus-life-mobile.html': 'campus-life.html',
    'junior-programs.html': 'junior-programs-mobile.html',
    'junior-programs-mobile.html': 'junior-programs.html',
    'connect.html': 'connect-mobile.html',
    'connect-mobile.html': 'connect.html'
  };

  const target = redirectMap[fileName];
  if (!target) {
    return;
  }

  const isMobileDevice = /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
  const isMobilePage = fileName.includes('-mobile');

  if (isMobileDevice && !isMobilePage) {
    window.location.replace(target);
  } else if (!isMobileDevice && isMobilePage) {
    window.location.replace(target);
  }
})();
