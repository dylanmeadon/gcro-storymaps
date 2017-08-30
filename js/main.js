var locale1, locale2, eng1, eng2, eng3, eng4, kor1, kor2, kor3, kor4;

locale1 = document.getElementById('locale1');
locale2 = document.getElementById('locale2');
eng1 = document.getElementById('eng1');
eng2 = document.getElementById('eng2');
eng3 = document.getElementById('eng3');
eng4 = document.getElementById('eng4');
kor1 = document.getElementById('kor1');
kor2 = document.getElementById('kor2');
kor3 = document.getElementById('kor3');
kor4 = document.getElementById('kor4');

$( document ).ready(function() {
  $(function() {
     FastClick.attach(locale1);
     FastClick.attach(locale2);
     FastClick.attach(eng1);
     FastClick.attach(eng2);
     FastClick.attach(eng3);
     FastClick.attach(eng4);
     FastClick.attach(kor1);
     FastClick.attach(kor2);
     FastClick.attach(kor3);
     FastClick.attach(kor4);
  });
  $(function(){
    x = $.webScreenSaver({
      stagnantDelay: 60000, // 1 minute
      videos: [{
        mp4: './video/screensaver.mp4'
      }]
    });
  });

  }); // end document ready
