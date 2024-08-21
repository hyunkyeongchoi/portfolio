$(function(){

  $('#name_move').animate({marginTop:"-40px"},1400,function(){
    $('#name_move').animate({marginTop:"-10px"},1400);
  });

  function namemove(){
    $('#name_move').animate({marginTop:"-40px"},1400,function(){
      $('#name_move').animate({marginTop:"-10px"},1400);
    });
  };

  setInterval(namemove,2800);

});
