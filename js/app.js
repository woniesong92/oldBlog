$(function() {
  window.app = {};

  app.showSidebar = function(delay) {
    var delay = delay || 400;
    var $sidebar = $('#sidebar');
    $sidebar.width(0);
    $sidebar.show().animate({width: '250px'}, delay);
    sessionStorage.setItem('sidebar', true);
  },

  app.hideSidebar = function(delay) {
    var delay = delay || 400;
    var $sidebar = $('#sidebar');
    $sidebar.animate({ width: 0 }, delay);
    sessionStorage.setItem('sidebar', false);
  }
});