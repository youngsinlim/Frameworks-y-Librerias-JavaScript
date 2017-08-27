function countDown() {

  var count = setInterval(function() {
    var timer = $('#timer').html();
    timer = timer.split(':');
    var minutes = timer[0];
    var seconds = timer[1];

    seconds -= 1;

    if (seconds < 0 && minutes != 0) {
      minutes -= 1;
      seconds = 59;
    }
    if (seconds == 0 && minutes == 0) {

      /****** Game Over *******/

      minutes = '00';
      seconds = '00';

      $('.game-over').fadeIn();
      $('.time').hide('scale', 1200);

      $('.panel-tablero').hide('scale', {
        percent: 0,
        direction: 'vertical',
        origin: ['top', 'left']
      }, 1200);

      $('.panel-tablero').css({
        position: 'fixed'
      })
      $('.panel-score').css({
        position: 'fixed',
        top: '120px',
        right: '5%'
      })


      $('.panel-score').animate({
        width: '90%',
        paddingTop: 0,
        paddingLeft: 0
      }, 1300);
      $('.moves').animate({
        width: '100%',
        paddingTop: 0,
        paddingLeft: 0
      }, 1300);

      clearInterval(count);
    } else if (seconds < 10 && seconds.lenght != 2) seconds = '0' + seconds;
    if ((minutes < 10) && ((minutes + '').length < 2)) minutes = '0' + minutes;
    $('#timer').html(minutes + ':' + seconds);
  }, 1000);


}
