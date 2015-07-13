(function () {
  var React = require('react');
  var ReactDom = require("react-dom");

  var config = require('./config');

  //import custom views
  var Main = require('./components/main.jsx');

  //Needed for React Developer Tools
  window.React = React;


  var video = document.getElementById('open_theme');
  var app   = document.getElementById('app');


  function playVideo() {

      if (video.ended) return;
      if (video.paused) {
        video.play();
        video.addEventListener('ended', function(){ 
            video.classList.add('fadeout'); 
            window.Game.start();
        });

        video.addEventListener('transitionend', function(e) {
            if (video.classList.contains('fadeout')) {
              video.remove();
              video = null;
            }
        })
      }

      return removeEvent();
  }

  function removeEvent() { document.removeEventListener('keyup', playVideo, false); }

  document.addEventListener('keyup', playVideo, false);

  window.Game = ReactDom.render(<Main config={config} />, app);
})();