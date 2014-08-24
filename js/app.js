$(function() {
  window.app = {};

  app.showSidebar = function(delay) {
    var delay = delay || 400;
    var $sidebar = $('.sidebar');
    $sidebar.width(0);
    var htmlWidth = $('html').width();
    var newWidth = (htmlWidth > 768) ? "250px" : "150px";
    $sidebar.show().animate({width: newWidth}, delay);
    sessionStorage.setItem('sidebar', true);
  },

  app.hideSidebar = function(delay) {
    var delay = delay || 400;
    var $sidebar = $('.sidebar');
    $sidebar.animate({ width: 0 }, delay);
    sessionStorage.setItem('sidebar', false);
  }

  app.isMobile = function() {
    return $('html').width() <= 768;
  }

  var isSidebar = sessionStorage.getItem('sidebar');
  if (isSidebar == "true") $('.sidebar').show();
  else if (isSidebar == null && !app.isMobile()) {
    $('.sidebar').show();
    sessionStorage.setItem('sidebar', true);
  }
  else $('.sidebar').hide();

  /* default.html */
  $('#about-link').click(function() {
    $.scrollTo('#about', 400);
  });

  $('#projects-link').click(function() {
    $.scrollTo('#projects', 400);
  });

  $('#menu-show-button').click(function() {
    app.showSidebar();
  });

  /* sidebar.html */
  $('.menu-hide-button').click(function() {
    app.hideSidebar();
  });

});