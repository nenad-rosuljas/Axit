$(document).ready(function(){

  $('.c-features__tab-button').click(function(event) {
    event.preventDefault();
    
    // Toggle active class on tab buttons
    $(this).addClass("current");
    $(this).siblings().removeClass("current");
  });
  
});