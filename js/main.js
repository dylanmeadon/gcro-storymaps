$( document ).ready(function() {
  $(function(){
    x = $.webScreenSaver({
      stagnantDelay: 60000,
      videos: [{
        mp4: './video/screensaver.mp4'
      }]
    });
  });

  }); // end document ready
