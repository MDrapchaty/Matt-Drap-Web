$(function() {
    console.log("hello world");

//Smooth scrolling on link click
    $(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();

      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
    });


    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-6rem";
    }
    prevScrollpos = currentScrollPos;
  }



  /* modal */ 

  // Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

    /* show navbar at top of page */
   /* 
    $(document).scroll(function() { 
      if($(window).scrollTop() === 0) {
      $("#navbar").hide();
      }
    });
    */
});


