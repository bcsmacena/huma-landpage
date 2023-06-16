
// Burg collapse

$(document).on('click', function() {
    return $('.collapse').collapse('hide');
});

// Menu selection && show selected section name

$(document).ready(function() {
    $("ul.navbar-nav > li > a").click(function(e) {
      $("ul.navbar-nav > li > a").removeClass("active");
      $(this).addClass("active");
      var menuItem = $(this).text();  
      if (menuItem == "Home") {
        $('#navbarText').hide();
      } else {       
        $('#navbarText').show();
        document.getElementById("navbarText").innerHTML = menuItem;
      }
    });
  });

// Hide section name when Home

  $(document).ready(function(){
    $('.navbar-brand').click(function(){
      $('#navbarText').hide();
    });
  });
