
// Burg collapse

$(document).on('click', function() {
    return $('.collapse').collapse('hide');
});

// Menu selection

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

  $(document).ready(function(){
    $('.navbar-brand').click(function(){
      // document.getElementById("navbarText").innerHTML = "";
      $('#navbarText').hide();
    });
  });
