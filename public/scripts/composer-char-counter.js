$(document).ready(function () {
  // --- our code goes here ---

  // $('textarea').on('keydown',function(event){
  //   console.log('press keydown');
  // })

  // $('textarea').on('blur',function(event){
  //   console.log('blur event');
  // })

  // $('textarea').on('change',function(event){
  //   console.log('change event');
  // })

  // $('textarea').on('input',function(event){
  //   console.log(event.target.value);
  //   console.log("Amount:",'input event');
  // })

  $("textarea").on("input", function (event) {
    //console.log of node element
    //console.log(this);
    event.target.value.length;
    //console to check current length
    console.log(event.target.value.length);
    //check for remaining characters in counter
    $(".counter")[0].value = 140 - event.target.value.length;
    //console.log($(".counter"));
    //console.log($(".counter")[0].value);
    if ($(".counter")[0].value < 0) {
      $(".counter").css({ color: "red" });
    } else {
      $(".counter").css({ color: "black" });
    }
  });

  // $('textarea').on('input',()=>{
  //   console.log(this);
  //   console.log("Amount:",'input event');
  // })
});
