// Sidebar animations

$(function() {
  $('#sidebar').hover(function() {
    //$(this).animate({ width: '20%' }, 800);
    $('.extra-links').fadeIn(400);
    $('.name-small').fadeOut(200, function() {
      $(this).text('Howon Song').css('font-size', '1.5em').fadeIn(200);
    });

  }, function() {
    //$(this).animate({ width: '16%' }, 800);
    $('.extra-links').fadeOut(400);
    $('.name-small').fadeOut(200, function() {
      $(this).text('HWS').css('font-size', '1.0em').fadeIn(200);
    });
  });

  $('#sidebar .my-name').css('margin-top', $(this).height()/3);
})
