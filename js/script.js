


var slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls:false,
    navPosition: 'bottom',
    nav:false,
  
  });
  
  document.querySelector('.prev').addEventListener ('click', function () {
    slider.goTo('prev');
  });
  document.querySelector('.next').addEventListener ('click', function () {
    slider.goTo('next');
  });


  
  // var slider = tns({
  //   container: '.carousel__inner',
  //   items: 1,
  //   slideBy: 'page',
  //   autoplay: false,
  //   controls:false,
  //   controlsPosition: bottom,
  //   controlsText:false,
  //   responsive: {
  //     640: {
  //       // edgePadding: 20,
  //       // gutter: 20,
  //       // items: 2
  //       // items: 1,
  //       // slideBy: 'page',
  //       // autoplay: false,
  //       // controls:false,
  //     },
  //     700: {
  //       // gutter: 30
  //       // items: 1,
  //       // slideBy: 'page',
  //       // autoplay: false,
  //       // controls:false,
  //     },
  //     900: {
  //       // items: 3
  //       // items: 1,
  //       // slideBy: 'page',
  //       // autoplay: false,
  //       // controls:false,
  //     }
  //   }
  // });



  (function($) {
  $(function() {
  
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    

    $('.catalog-item__link').each(function (i){
      $(this).on('click', function(e){
e.preventDefault();
$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
      })
    });

    $('.catalog-item__back').each(function (i){
      $(this).on('click', function(e){
e.preventDefault();
$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
      })
    });
 
 $('[data-modal=consultation]').on('click', function(){
   $('.overlay, #consultation').fadeIn();
 });
 $('.modal__close').on('click', function() {
   $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
 })

//  $('.button_mini').on('click', function() {
//   $('.overlay, #order').fadeIn();
//  })
 $('.button_mini').each(function(i){
   $(this).on('click', function(){
     $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text( ))
     $('.overlay, #order').fadeIn();  
   })
 })
 

 
 function valideForms(form){
  $(form).validate({
    rules: {
      name: {
        required:true,
        minlength: 5
      },
     
      phone: "required",
      email: {
        required:true,
        email:true,
        minlength: 7
      }
    },
    messages: {
     name:{
       required: "введіть своє ім`я",
       minlength: jQuery.validator.format(" потрібно ввести {0} символів"),
     },
     
     
     phone: "введіть моб телефон",
     email: {
       required: "введіть свій емаіл",
       email: "неправильно ввели",
       minlength: jQuery.validator.format(" потрібно ввести {0} символів"),
     }
     
   }
  });
 };
 valideForms('#consultation-form');
 valideForms('#consultation form');
 valideForms('#order form');

 $('input[name=phone]').mask("(999) 999-9999");
  
 
 $(window).scroll(function() {
   if ($(this).scrollTop() > 1600) {
     $('.pageup').fadeIn();
   }else{
     $('.pageup').fadeOut();
   }
   
 });
 $("a[href^='#']").click(function(){
  var _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});

});

})(jQuery);

