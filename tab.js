$(document).ready(function(){
  $("[data-tab-trigger]").click(function(event) {
    // Toggle active class on tab buttons
   // Button active state
   $(this).addClass("current");
   $(this).siblings().removeClass("current");
    console.log($(this).attr("data-tab-trigger"))
    // Content active state
    let contentId= "#"+$(this).attr("data-tab-trigger");
   $('.c-tab-content').not(contentId).css("display","none");
   $(contentId).fadeIn();
  });
  
});
