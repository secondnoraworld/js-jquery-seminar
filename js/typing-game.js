var startTime = new Date();
var repeat = 5;
var correct = 0;
var timer;
var mode = 'normal';

$(function() {

  showMenu();

  $('#typed').keyup(function() {
    if ($(this).val() === $('#pattern').text()) {
      if (repeat === ++correct) {
        finish();
      }
      $(this).val('');
      makePattern();
    }
  });
});

function showMenu() {
  $('#timer').hide();
  $('#pattern').hide();
  $('#typed').hide();

  $('#menu').show();
  $('.mode').click(function() {
    $('#menu').hide();
    mode = $(this).val();
    start();
  });
  // $('<input>').val('Start').attr('id', 'start').attr('type', 'button').click(function() {
  //   $(this).hide();
  //   start();
  // }).appendTo('#field');
}

function start() {
  $('#timer').show();
  $('#pattern').show();
  $('#typed').show().focus();

  startTime = new Date();
  makePattern();
  showTimer();
}

function finish() {
  clearTimeout(timer);
  alert($('#timer').text());
  correct = 0;
  showMenu();
}

function makePattern() {
  $('#pattern').text(getRandomString(mode));
}

function getRandomString(level) {
  var alph = 'abcdefghijklmnopqrstuvwxyz';
  var alphL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var nums = '1234567890';
  var signs = '!"#$%&()=~|`{+*}<>?_';

  var chars = '';
  switch (level) {
    case 'easy':      chars = alph;                        break;
    case 'normal':    chars = alph + alphL;                break;
    case 'hard':      chars = alph + alphL + nums;         break;
    case 'nightmare': chars = alph + alphL + nums + signs; break;
  }

  var str = '';
  for (var i = 0; i < 5; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return str;
}

function showTimer() {
  var now = new Date();
  $('#timer').text('time: ' + (now - startTime) / 1000);
  timer = setTimeout(showTimer, 10);
}
