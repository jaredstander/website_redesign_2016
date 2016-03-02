$(document).ready(function(){
  // Hide the accordion content.
  $(".content p").hide();

  // Event bindings for the headings we want to make behave like an accordion.
  $(".content h2").on( "click", function(e) {
    $(this).toggleClass("open");
    if($(this).next().is(":hidden")){
      $(this).next().slideDown(200);
    }else{
      $(this).next().slideUp(200);
    }
  });

  $(".content h2").on("mouseenter mouseleave", function(e){
    $(this).toggleClass("over");
  });
});