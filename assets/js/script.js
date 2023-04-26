
// Burg collapse

$(document).on('click', function() {
    return $('.collapse').collapse('hide');
});

// Menu selection

$(document).ready(function() {
    $("ul.navbar-nav > li > a").click(function(e) {
      $("ul.navbar-nav > li > a").removeClass("active");
      $(this).addClass("active");
    });
  });