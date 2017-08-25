$( document ).ready(function() {
  $(function(){
    x = $.webScreenSaver({
      stagnantDelay: 3000,
      videos: [{
        mp4: './video/screensaver.mp4'
      }]
    });
  });

  }); // end document ready
