let imgList = $(document.images);
let lightBoxCon = $("#lightboxCon");
let lightboxitem = $("#lightboxitem");
let nextBtn = $("#nextBtn");
let prevBtn = $("#prevBtn");
let closeBtn = $("#closeBtn");
let currentImg;

imgList.click(function () {
  $(this)
    .addClass("active")
    .parentsUntil(".row")
    .siblings()
    .find("img")
    .removeClass("active");
  lightBoxCon.fadeIn(500).css("display", "flex");
  lightboxitem.css("backgroundImage", `url(${$(this).attr("src")})`);
});

nextBtn.click(function () {
  if ($(".active").parent().parent().is(":last-child")) {
    $(".col-md-4").eq(0).find("img").addClass("active").click();
  } else {
    $(".active")
      .removeClass("active")
      .parentsUntil(".row")
      .next()
      .find("img")
      .click();
  }
});

prevBtn.click(function () {
  if ($(".active").parent().parent().is(":first-child")) {
    $(".col-md-4:last").find("img").addClass("active").click();
  } else {
    $(".active")
      .removeClass("active")
      .parentsUntil(".row")
      .prev()
      .find("img")
      .click();
  }
});

closeBtn.click(function () {
  lightBoxCon.fadeOut(500);
});
