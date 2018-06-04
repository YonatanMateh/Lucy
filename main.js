createElemants();

function createElemants() {
  $.map(data, (item, i) => {
    return $('<img>', { src: item.link, alt: item.title }).appendTo('.center');
  });
}

//update the title and description when the user clicked
$('.center').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  $('#title').text(data[nextSlide].title);
  $('#desc').text(data[nextSlide].subTitle);
});

$('.center').slick({
  nextArrow: $('#next'),
  prevArrow: $('#prev'),
  adaptiveHeight: true,
  dots: false,
  centerPadding: '110px',
  infinite: true,
  centerMode: true,
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

//setting the title and description of the first diamont
$(document).ready(function () {
  $('#title').text(data[0].title);
  $('#desc').text(data[0].subTitle);
});

