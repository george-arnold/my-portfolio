
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

function indexProjects(list) {
  let items = list.children().find("h2");
  let unorderedList = $("<ul class='start-hidden'></ul>");
  items.each( function (i, obj) {
    console.log(i,obj);
    let title = obj.innerText;
    let lineItem = $("<li></li>").text(title);
    lineItem.attr("title",title);
    unorderedList.append(lineItem);
  });
  console.log(unorderedList);
  $(".tab-1").append(unorderedList);
}


function start () {
    $(".project").hide();
    $(".contact-info").hide();
    indexProjects($(".projects"));
    handleNavigation();
}

$(start);