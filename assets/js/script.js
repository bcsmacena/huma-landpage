// Burg collapse

$(document).on('click', function() {
    return $('.collapse').collapse('hide');
});

function activeSection() {
    var scrollSpyContentEl = document.getElementById('scrollSpy');
    var scrollSpy = bootstrap.ScrollSpy.getInstance(scrollSpyContentEl);
    if( scrollSpy._activeTarget !== null ) { var activeTarget = scrollSpy._activeTarget.innerText }
    var menuItem = document.getElementById('activeSection');
    if( activeTarget == "Home" ){
      menuItem.innerText = "" 
    }
    else if( activeTarget !== undefined ) {
      menuItem.innerText = activeTarget;
    }
}

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
