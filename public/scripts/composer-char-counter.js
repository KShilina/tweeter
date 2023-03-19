$(document).ready(function () {
  $("textarea").on("input", function (event) {
    //console.log($(this).parent().find(".counter"));
    let $counter = $(this).parent().find(".counter");
    let count = $(this).val().length;

    $counter[0].value = 140 - count;

    if (count > 140) {
      $(".counter").css({ color: "red" });
    } else {
      $(".counter").css({ color: "black" });
    }
  });
});
