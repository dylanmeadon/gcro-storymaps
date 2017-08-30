$( document ).ready(function() {
  $(function() {
	   FastClick.attach(document.body);
  });

  //Increment the idle time counter every minute.
  var idleInterval = setInterval(timerIncrement, 1000); // 1 minute

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
  $(this).click(function (e) {
      idleTime = 0;
  });
  $(this).scroll(function (e) {
      idleTime = 0;
  });

  $(document).on('touchstart click', this, function(e){
      e.stopPropagation(); //stops 'ghost clicks' (double clicking)
      idleTime = 0;
    });


  }); // end document ready


  var idleTime = 0;

  function timerIncrement() {
      idleTime = idleTime + 1;
      if (idleTime > 60) { // 1 minute
          window.location.href="./screensaver.html"
      }
  }
