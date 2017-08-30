$( document ).ready(function() {
  $(function() {
	   FastClick.attach(document.body);
  });
  // $(function(){
  //   x = $.webScreenSaver({
  //     stagnantDelay: 60000, // 1 minute
  //     videos: [{
  //       mp4: './video/screensaver.mp4'
  //     }]
  //   });
  // });

      //Increment the idle time counter every minute.
      var idleInterval = setInterval(timerIncrement, 600); // 1 second

      //Zero the idle timer on mouse movement.
      $(this).mousemove(function (e) {
          idleTime = 0;
      });
      $(this).keydown(function (e) {
          idleTime = 0;
      });
      $(this).mousedown(function (e) {
          idleTime = 0;
      });
      $(this).scroll(function (e) {
          idleTime = 0;
      });

      $( "#vid-overlay" ).click(function() {
        $("#bgvid").css("visibility", "hidden");
        $('#vid-overlay').css('visibility', 'hidden');
        console.log('screensaver hidden');
      });


  }); // end document ready

  var idleTime = 0;

  function timerIncrement() {
      idleTime = idleTime + 1;
      if (idleTime > 3) {

        $("#bgvid").css("visibility", "visible");
        $('#vid-overlay').css('visibility', 'visible');
        console.log('screensaver shown');

      }
  }
