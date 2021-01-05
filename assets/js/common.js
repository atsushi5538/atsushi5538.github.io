/* ハンバーガーメニュー */
$('#js_spMenuBtn').on('click', function() {
  $('#js_spMenu').toggleClass('active');
  $('#wrapper').toggleClass('fixed');
});
$('.spMenuTxt').on('click', function() {
  $('#js_spMenu').removeClass('active');
  $('#wrapper').removeClass('fixed');
})

/* モーダル */
$(function() {
  $('.modalpict').click(function() {
    $(this).next().addClass('active');
    $('#wrapper').addClass('fixed');
  });
  $('.modalWrap, .coloseBotn').click(function(){
    $('#wrapper').removeClass('fixed');
    $('.modalWrap').removeClass('active');
  });
});

/* スムーススクロール */
$('a[href^="#"]').click(function() {
  var speed = 400;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  $('body,html').animate({
    scrollTop: position
  }, speed, 'swing');
  return false;
});

$(function() {
  console.log('Hello World!');
});