/*! Normalized address bar hiding for iOS & Android (c) @scottjehl MIT License */
(function( win ){
  var doc = win.document;

  // If there's a hash, or addEventListener is undefined, stop here
  if(!win.navigator.standalone && !location.hash && win.addEventListener ){

      //scroll to 1
      win.scrollTo( 0, 1 );
      var scrollTop = 1,
          getScrollTop = function(){
              return win.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
          },

          //reset to 0 on bodyready, if needed
          bodycheck = setInterval(function(){
              if( doc.body ){
                  clearInterval( bodycheck );
                  scrollTop = getScrollTop();
                  win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
              }   
          }, 15 );

      win.addEventListener( "load", function(){
          setTimeout(function(){
              //at load, if user hasn't scrolled more than 20 or so...
              if( getScrollTop() < 20 ){
                  //reset to hide addr bar at onload
                  win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
              }
          }, 0);
      }, false );
  }
})( this );



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

function recaptchaCallback() {
    var btnSubmit = document.getElementById("btnSubmit");
    if (btnSubmit.hasAttribute("disabled")) {
        btnSubmit.removeAttribute("disabled");
    }
}
// Hide section name when Home

  $(document).ready(function(){
    $('.navbar-brand').click(function(){
      $('#navbarText').hide();
    });
  });
