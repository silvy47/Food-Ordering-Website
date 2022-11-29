$(document).ready(() => {
  $('.slider-img').each((index, e) => {

      $(e).click((obj) => {
          let $newsrc = $(obj.target).attr('src');
          $('#main-img').attr('src', $newsrc);

      });
  });
  $('.prev').click((e) => {
      $('.second').hide();
      $('.first').show();



  });
  $('.next').click((e) => {
      $('.first').hide();
      $('.second').show();




  });

  $('.slider-img1').each((index, e) => {

      $(e).click((obj) => {
          let $newsrc = $(obj.target).attr('src');
          $('#main-img1').attr('src', $newsrc);

      });

  });
});

function myFunction(element) {
  var element = document.getElementById(element);
  if (element.style.display == "block") {
      element.style.display = "none";
  } else {
      element.style.display = "block";
  }
}