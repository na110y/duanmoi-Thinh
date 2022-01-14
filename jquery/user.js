$(function() {
  $('main').animate ({
    opacity:1,
 });
})
    $('.clickme').click(function(event){
      $('main').animate ({
        marginLeft:80,
        opacity:0,
     },700);
      $('.menu-mobile').slideToggle({
        marginLeft:100,
        opacity:1,
      },2000);
})
$('.clickme').click(function(event){
 $('main').animate ({
  marginLeft:100,
  opacity:0,
},700);

$('.clickme').click(function(event){
  $('main').animate ({
    marginLeft:0,
    opacity:1,
  },500);
})
})





