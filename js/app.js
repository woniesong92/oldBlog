$(function() {
  window.app = {};

  app.showSidebar = function(delay) {
    var delay = delay || 400;
    var $sidebar = $('.sidebar');
    $sidebar.width(0);
    var htmlWidth = $('html').width();
    var newWidth = (htmlWidth > 768) ? "250px" : "300px";
    $sidebar.show().animate({width: newWidth}, delay);
    sessionStorage.setItem('sidebar', true);
  },

  app.hideSidebar = function(delay) {
    var delay = delay || 400;
    var $sidebar = $('.sidebar');
    $sidebar.animate({ width: 0 }, delay);
  }

  app.isMobile = function() {
    return $('html').width() <= 768;
  }

  $('.sidebar .menu-show-button').click(function (e) {
    e.stopPropagation();
  });

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

  $(document).click(function (e) {
    var className = e.target.className;
    if ((className.indexOf('menu-open-link')+className.indexOf('menu-open-div'))==-2) {
      app.hideSidebar();
    }
  });
});