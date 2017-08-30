$( document ).ready(function() {
  $(function() {
	   FastClick.attach(document.body);
  });
  $(function(){
    x = $.webScreenSaver({
      stagnantDelay: 1000, // 1 minute
      videos: [{
        mp4: './video/screensaver.mp4'
      }]
    });
  });

  }); // end document ready
