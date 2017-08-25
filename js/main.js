$( document ).ready(function() {
  $(function(){
    x = $.webScreenSaver({
      stagnantDelay: 60000, // 1 minute
      videos: [{
        mp4: './video/screensaver.mp4'
      }]
    });
  });

  }); // end document ready
