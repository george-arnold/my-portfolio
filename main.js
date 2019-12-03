
function handleNavigation() {

  $(".tab-1").click(function() {
    $(this).addClass("active-tab");
    $(".tab-2").removeClass("active-tab");
    $(".tab-3").removeClass("active-tab");
    $(".project").show();
    $(".bio").hide();
    $(".contact-info").hide();
  });

  $(".tab-2").click(function() {
    $(this).addClass("active-tab");
    $(".tab-1").removeClass("active-tab");
    $(".tab-3").removeClass("active-tab");
    $(".project").hide();
    $(".bio").show();
    $(".contact-info").hide();
  });

  $(".tab-3").click(function() {
    $(this).addClass("active-tab");
    $(".tab-1").removeClass("active-tab");
    $(".tab-2").removeClass("active-tab");
    $(".project").hide();
    $(".bio").hide();
    $(".contact-info").show();
  });

}






function start () {
    $(".project").hide();
    $(".contact-info").hide();
    handleNavigation();
}
$(start);