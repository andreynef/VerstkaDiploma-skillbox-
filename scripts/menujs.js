$(document).ready(function() {

  /*-------menu dropdown-----*/
  $('.menu__button').on('click',function(){
    $('.menu__list').slideDown(200);
    
    //Hide menu when clicked outside of menu_list
    $('.menu__list').mouseleave(function(){  
      $('html').click(function(){
      $('.menu__list').hide();
      $('html').off('click');
      });
    });

    //Hide menu when clicked outside of menu_list w/o pointing on that list
    $('.menu__header').mouseleave(function(){  
      $('html').click(function(){
        $('.menu__list').hide();
        $('html').off('click');
      });
    });
  });

})

