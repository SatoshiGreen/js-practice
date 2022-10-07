$(function(){
  let txt1 = "こんばんは";
  let txt2 = "おげんきですか？";
  let num1 = 19800;
  let num2 = 1.1;

  $("#button01").on("click",function(){
    $("#content").text("こんにちは");
  })

  $("#button02").on("click",function(){
    $("#content").text(txt1);
  })

  $("#button03").on("click",function(){
    $("#content").text(txt1 + "、" + txt2);
  })

  $("#button04").on("click",function(){
    $("#content").text(num1 + num2);
  })

  $("#button05").on("click",function(){
    $("#content").text(num1 * num2);
  })
    

});