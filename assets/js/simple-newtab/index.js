(function() {
  var button = document.getElementById('install-button');
  button.onclick = function() {
    chrome.webstore.install();
  }

  if (chrome.app.isInstalled) {
    document.getElementById('install-button').style.display = 'none';
  }
})()
