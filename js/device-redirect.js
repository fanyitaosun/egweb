(function () {
  const path = window.location.pathname;
  const fileName = path.substring(path.lastIndexOf('/') + 1) || 'index.html';

  const redirectMap = {
    'index.html': 'index-mobile.html',
    'index-mobile.html': 'index.html',
    'index-zh.html': 'index-mobile-zh.html',
    'index-mobile-zh.html': 'index-zh.html',
    'the-academy-at-miracosta.html': 'the-academy-at-miracosta-mobile.html',
    'the-academy-at-miracosta-mobile.html': 'the-academy-at-miracosta.html',
    'the-academy-at-miracosta-zh.html': 'the-academy-at-miracosta-mobile-zh.html',
    'the-academy-at-miracosta-mobile-zh.html': 'the-academy-at-miracosta-zh.html',
    'UCPP.html': 'UCPP-mobile.html',
    'UCPP-mobile.html': 'UCPP.html',
    'highschool.html': 'highschool-mobile.html',
    'highschool-mobile.html': 'highschool.html',
    'highschool-zh.html': 'highschool-mobile-zh.html',
    'highschool-mobile-zh.html': 'highschool-zh.html',
    'university-transfer.html': 'university-transfer-mobile.html',
    'university-transfer-mobile.html': 'university-transfer.html',
    'university-transfer-zh.html': 'university-transfer-mobile-zh.html',
    'university-transfer-mobile-zh.html': 'university-transfer-zh.html',
    'activities.html': 'activities-mobile.html',
    'activities-mobile.html': 'activities.html',
    'activities-zh.html': 'activities-mobile-zh.html',
    'activities-mobile-zh.html': 'activities-zh.html',
    'campus-life.html': 'campus-life-mobile.html',
    'campus-life-mobile.html': 'campus-life.html',
    'campus-life-zh.html': 'campus-life-mobile-zh.html',
    'campus-life-mobile-zh.html': 'campus-life-zh.html',
    'junior-programs.html': 'junior-programs-mobile.html',
    'junior-programs-mobile.html': 'junior-programs.html',
    'junior-programs-zh.html': 'junior-programs-mobile-zh.html',
    'junior-programs-mobile-zh.html': 'junior-programs-zh.html',
    'connect.html': 'connect-mobile.html',
    'connect-mobile.html': 'connect.html',
    'connect-zh.html': 'connect-mobile-zh.html',
    'connect-mobile-zh.html': 'connect-zh.html'
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
