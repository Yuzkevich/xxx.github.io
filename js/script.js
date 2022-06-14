
$(document).ready(function(){
  $('.slider__inner').slick({
      adaptiveHeight: false,
      autoplay: false,
      autoplaySpeed: 2000,
      prevArrow: '<button type="button" class="slick-next"><img src="img/slider_main/right.svg"></button>',
      nextArrow: '<button type="button" class="slick-prev"><img src="img/slider_main/left.svg"></button>',
      responsive: [
        {
            breakpoint: 901,
            settings: {
                dots: false,
                arrows: false
            }
        }
    ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

    function toggleSlide(item) {
      $(item).each(function(i) {
          $(this).on('click', function(e) {
              e.preventDefault();
              $('.catalog__item__content').eq(i).toggleClass('catalog__item__content_active');
              $('.catalog__item__list').eq(i).toggleClass('catalog__item__list_active');
          })
      });
    };

    toggleSlide('.catalog__item__link');
    toggleSlide('.catalog__item__back');
});