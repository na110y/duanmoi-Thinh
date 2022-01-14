$(document).ready(function(e){

  // cho thanh menu dính vào màn hình
  $(window).scroll(function(){
    if ( $(window).scrollTop() > 250 ){
      $('.header-menu-list').addClass('active');
    }
    else{
      $('.header-menu-list').removeClass('active');
    }
  })
//  thay đổi nút theo dõi 
  $('.submid').click(function(e){
      $('.submid').hide();
      $('.submiddd').show();
  })
  $('.submiddd').click(function(e){
    $('.submiddd').hide();
    $('.submid').show();
})


// ẩn hiện
  $('.manhinh').hide();
  $('.iconthue').click(function(e){
      $('.manhinh').show(500);
  })
  $('.clickclone').click(function(e){
    $('.manhinh').hide(500);
})

// donate ẩn hiện
$('.donate').hide();
$('.icondontate').click(function(e){
    $('.donate').show(500);
})
$('.clickclone').click(function(e){
  $('.donate').hide();
})


// nhan tin ẩn hiện 
$('.nhantin').hide();
$('.mes-infor').click(function(e){
    $('.nhantin').show(500);
})
$('.clickclone').click(function(e){
  $('.nhantin').hide();
})

// ẩn hiện nạp card

$('.up-card').hide();
$('.supmit-card').click(function(e){
    $('.up-card').show();
})
$('.clickclone-card').click(function(e){
  $('.up-card').hide();
  $('.manhinh').hide();
})
$('.up-card').click(function(e){
  $('.up-card').hide();
  $('.manhinh').hide();

})




// tăng kích thước
  let x = 1;
  let y = 20000;
  $('.tang').click(function(){
    $('.time-thue').text(++x);
    $('.price-thue').text( (y) += 20000)  ;
  });
  // giảm
  $('.giam').click(function(){
    $('.time-thue').text(--x);
    $('.price-thue').text( (y) -= 20000)  ;                  
  });

// tự động chạy
// let  start = 1;
// let end=$('.time-thue').html();
// let speed = 1000;
// setInterval(function(){
//   if(start <end) {
//     start ++;
//   }
//   $('.time-thue').html(start);
// },speed)

})
function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
          $('#imagePreview').css('background-image', 'url('+e.target.result +')');
          $('#imagePreview').hide();
          $('#imagePreview').fadeIn(650);
      }
      reader.readAsDataURL(input.files[0]);
  }
}
$("#imageUpload").change(function() {
  readURL(this);
});

  
// chuyển xuống khi click
// $('.main2-transaction').hide();
// $('.lorem4').click(function(){
// 		$('.lorem4').slideUp();
// 		 $('.main2-transaction').slideDown();
// 		$('.iii').toggleClass('rotate');
// if(!$(this).next('.main2-transaction').is(':visible')) {
// 		$(this).next('.main2-transaction').slideDown();

// }
// $('.iii').click(function(){
// 	$('.iii').toggleClass('rotate');
// 	$('.main2-transaction').slideDown();
// })

// })

$('.main2-transaction').hide();
$('.main-transaction').click(function(){
		$('.lorem4').hide();
		$('.iii').toggleClass('rotate');
		$('.main2-transaction').slideDown();
})
$('.iii').click(function(){
	$('.main2-transaction').hide();
	$('.iii').toggleClass('rotate');
	$('.lorem4').show();
})



// $('.main2-transaction').click(function(e){
//   $('.iii').toggleClass('rotate')
//   $('.main2-transaction').hide()
//   $('.lorem4').slideDown(500);
//   if(!$('.menu-setting').next('.main2-transaction').is(':visible')) {
// 	$('.menu-setting').next('.main2-transaction').slideDown();
//   }
// })

// hiển thị setting cài đặt

$('.Setting').hide();
$('.menu-setting').click(function(e){
    $('.Setting').show();
    $('.list-setting').slideToggle(500);
})

// click vào lịch sử giao dịch

// $('.icon-transaction').hide();
// $('.list-setting').click(function(e){
//     $('.icon-transaction').show(500);
// })


// $('body').hide();
$('.logout_setting').hide();


$('.menu-tapbar').click(function(e){
  $('.footer').hide();
  $('.iconn-transaction').hide();
  $('.header').hide();
  $('.icon-transaction').hide();
  $('.logout_setting').show();
})
$('.icon_menu').click(function(e){
  $('.iconn-transaction').show();

  $('.header').show();
  $('.icon-transaction').show();
  $('.logout_setting').hide();
})
