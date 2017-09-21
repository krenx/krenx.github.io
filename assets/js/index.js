var isAlpha = function(ch){
  return /^[A-Z]$/i.test(ch);
}

var isPunctuation = function(c) {
    return /^[,\.?!;]$/i.test(c);
}

function shuffle(a, b, c, d) {
    c = a.length;
    while (c) b = Math.random() * (--c + 1) | 0, d = a[c], a[c] = a[b], a[b] = d
}

var p2c = {
    ",": "comma",
    ".": "full-stop",
    "!": "exclamation",
    "?": "question-mark",
    ";": "semicolon",
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function renderTitle(id) {
    var container = document.getElementById(id);
    var strings = container.innerText;
    container.innerText = "";
    var lower = strings.toLowerCase();
    var length = lower.length;

    var a = [];
    for (var i = 0; i < length; i++) {
        a.push(i);
    }
    shuffle(a);

    for (var i = 0; i < length; i++) {
        var div = document.createElement('div');
        if (isAlpha(lower[i])) {
            div.className = 't t-'+lower[i] + ' t-on';
            div.style.cssText = 'background-image:url("/assets/img/letters-title/' + lower[i] + '.png")';
        } else if (isPunctuation(lower[i])) {
            div.className = 't t-' + p2c[lower[i]] + ' t-on';
            div.style.cssText = 'background-image:url("/assets/img/letters-title/' + p2c[lower[i]] + '.png")';
        } else {
            div.className = 't';
        }

        if (isPunctuation(lower[i]) || isAlpha(lower[i])) {
            if (i == a[0] || i == a[1] || i == a[2]) {
                div.className += ' t-animate';
            }
        }
        container.append(div);
    }
}

function renderDescription(id) {
    var container = document.getElementById(id);
    var strings = container.innerText;
    container.innerText = "";
    container.className = 'd';
    var lower = strings.toLowerCase();
    var length = lower.length;
    var words = lower.split(' ');

    var a = [];
    for (var i = 0; i < words.length; i++) {
        a.push(i);
    }
    shuffle(a);

    for (var w = 0; w < words.length; w++) {
        var word = document.createElement('div');
        for (var c = 0; c < words[w].length; c++) {
            var div = document.createElement('div');
            if (isAlpha(words[w][c])) {
                div.className = 'd d-' + words[w][c] + ' d-on';
                div.style.cssText = 'background-image:url("/assets/img/letters-description/' + words[w][c] + '.png")';
            } else if (isPunctuation(words[w][c])) {
                div.className = 'd d-' + p2c[words[w][c]] + ' d-on';
                div.style.cssText = 'background-image:url("/assets/img/letters-description/' + p2c[words[w][c]] + '.png")';
            } else {
                div.className = 'd';
            }

            if (w == a[0] || w==a[1] || w== a[2]) {
                div.className += ' d-animate';
            }
            word.append(div);
        }
        word.className = 'word';
        container.append(word);

    }
}

renderTitle('title1');
renderDescription('description1');
renderTitle('title2');
renderDescription('description2');


(function() {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-106488669-1', 'auto');

    var install = document.getElementById('install');
    install.onclick = function() {
      chrome.webstore.install('https://chrome.google.com/webstore/detail/ddldpkamibcepgebhphbjkcojnbloadk', function() {
        ga('send', 'event', {
          eventCategory: 'type',
          eventAction: 'Install success by official-install-button from ' + location.search
        });
      }, function() {
        ga('send', 'event', {
          eventCategory: 'type',
          eventAction: 'Install failed by official-install-button from ' + location.search
        });
      });
    }
})();
