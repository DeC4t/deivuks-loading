// Music

var audio = document.getElementById("sound");
audio.volume = 0.1;

var isPlaying = false;

function paleistiMuzika() {
    isPlaying ? sound.pause() : sound.play();
  };
  
  sound.onplaying = function() {
    isPlaying = true;
    document.getElementById("play").className = "fas fa-pause-circle  play";
  };
  sound.onpause = function() {
    isPlaying = false;
    document.getElementById("play").className = "fas fa-play-circle  play";
  };

var audio = document.getElementById("sound");

function vlSumazinti() { 
  audio.volume -= 0.1;
} 

function vlPadidinti() { 
    audio.volume += 0.1;
  }

// Cursor

  var pointer = $('#cursor');
    $(document).on('mousemove', function (event) {
      pointer.css({
        top: event.pageY + 'px',
        left: event.pageX + 'px'
      });
    });
