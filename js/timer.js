var countDown = setInterval(function() {
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
    minutes='00';
    seconds='00';
    clearInterval(countDown);
}
else if (seconds < 10 && seconds.lenght != 2) seconds = '0' + seconds;
if ((minutes < 10) && ((minutes+'').length < 2)) minutes = '0' + minutes;
    $('#timer').html(minutes + ':' + seconds);
}, 1000);
