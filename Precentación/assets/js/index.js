$(document).ready(function () {
  $("a").click(function (event) {
    event.preventDefault();

    var gato = this.hash;

    $("html").animate(
      {
        scrollTop: $(gato).offset().top - 76,
      },
      800
    );
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll < 300) {
      $(".fixed-top").css("background", "transparent");
    } else {
      $(".fixed-top").css("background", "#000");
    }
  });
});

$('[data-toggle="tooltip"]').tooltip();
