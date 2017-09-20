(function() {
  var button = document.getElementById('install-button');
  button.onclick = function() {
    chrome.webstore.install();
  }

  if (chrome.app.isInstalled) {
    document.getElementById('install-button').style.display = 'none';
  }
})();

(function() {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-106488669-1', 'auto');

  function U(F) {
    const G = F.currentTarget,
        V = G.getAttribute('data-type');
    'official-site' === V ? ga('send', 'event', {
        eventCategory: 'type',
        eventAction: 'Open official site'
    }) : 'webstore' === V ? ga('send', 'event', {
        eventCategory: 'type',
        eventAction: 'Open webstore'
    }): 'install-button' === V ? ga('send', 'event', {
        eventCategory: 'type',
        eventAction: 'Install by install-button'
    }) : 'install-by-laptop' === V ? ga('send', 'event', {
        eventCategory: 'type',
        eventAction: 'Install by install-by-laptop'
    }): 'fb-like' === V ? ga('send', 'event', {
        eventCategory: 'type',
        eventAction: 'Facebook like'
    }): 'tw-like' === V ? ga('send', 'event', {
        eventCategory: 'type',
        eventAction: 'Twitter like'
    }): 'g-follow' === V ? ga('send', 'event', {
        eventCategory: 'type',
        eventAction: 'Google+ follow'
    }) : console.log(V);
  }

  const O = document.querySelectorAll('a');
  O.forEach((F) => {
      F.addEventListener('click', U, !0)
  });
})();
