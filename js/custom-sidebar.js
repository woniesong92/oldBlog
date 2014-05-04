// Sidebar animations
$('#sidebar').hover(function() {
  $(this).animate({ width: '20%' }, 800);
  $('.extra-links').fadeIn(800);
  $('.name-small').fadeOut(400, function() {
    $(this).text('Howon Song').css('font-size', '1.5em').fadeIn(400);
  });
  //$('.name-big').fadeIn();

}, function() {
  $(this).animate({ width: '16%' }, 800);
  $('.extra-links').fadeOut(800);
  $('.name-small').fadeOut(400, function() {
    $(this).text('HWS').css('font-size', '1.0em').fadeIn(400);
  });
});

$('#sidebar .my-name').css('margin-top', $(this).height()/3);