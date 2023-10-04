$(function() {
  const defaultTop = parseInt( $("#quick_menu").css("top") );

  $(window).on("scroll", function() {
    const scv = $(window).scrollTop();
    $("#quick_menu").stop().animate({
      top: scv + defaultTop + "px"
    }, 600);
  });

  $("#quick_menu ul li a").on("click", function() {
    $.scrollTo(this.hash || 0, 1000);
    e.preventDefault();
  });
});