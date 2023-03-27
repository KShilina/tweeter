$(document).ready(() => {

  let position = $(window).scrollTop();
  
// Show scroll to top button after scrolling down
  $(window).scroll(function () {
    const scroll = $(window).scrollTop();
    if (scroll > position) {
      $("div.toggle-btn-arrow-up").css("display", "flex").fadeIn("slow");
      $("nav").slideUp();
    } else {
      $("div.toggle-btn-arrow-up").css("display", "none").fadeOut("slow");
      $("nav").slideDown();
    }
    position = scroll;
  });

//Scroll to top when scroll to top button is clicked
  $("div.toggle-btn-arrow-up").click(function () {
    window.scrollTo(0, 0);
  });
});
