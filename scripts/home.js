// $(document).ready(function() {

//  function backToTop() {

//     let button = $('.scrollup');

//     $(window).on('scroll', () => {
//       if ($(this).scrollTop() >= 50) {
//         button.fadeIn();
//       } else {
//         button.fadeOut();
//       }
//     });

//     button.on('click', (e) => {
//       e.preventDefault();
//       $('html').animate({scrollTop: 0}, 1000);
//     })
//   }

//   backToTop();
  
// })

$(document).ready(function(){
  $(function(){
    $("#scrollup").hide();
    $(window).scroll(function(){
      if($(this).scrollTop()>100){
        $("#scrollup").fadeIn("slow");
      }  else {
        $("#scrollup").fadeOut("slow");
      }
    });
      
    $("#scrollup").click(function(){
      $("body,html").animate({scrollTop:0},500);
      return false})
  })
})