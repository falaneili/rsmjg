

//二级导航
$(function(){
  $('.nav>li').hover(function(){
    var sec_count=$(this).find('.sec a').length;
    var a_height=$(this).find('.sec a').eq(0).height();
    var sec_height=sec_count*a_height;
    $(this).find('.active').css("color","#4ab984");
    $(this).find('.sec').stop().animate({height:sec_height},300);
  },function(){
    $(this).find('.active').css("color","#4a4b4b");
    $(this).find('.sec').stop().animate({height:0},300);
  });
});




$(document).ready(function() {
  
  $("#owl-demo").owlCarousel({
    autoPlay: 5000, 
    margin:10,
    loop:true,
    autoWidth:true,
    transitionStyle: 'fade',
   navigation: true,
    navigationText: ["<",">"],
     items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
    itemsMobile : [479,2], //手机
    itemsTablet : [768,3], //平板
    navigation: true,
    navigationText: ["<",">"]
  
  });
  
});

//返回顶部
function tBox(){
    //h = $(window).height();
    t = $(document).scrollTop();
    if(t > 150){
        $(".tbox").fadeIn(300);
    }else{
        $(".tbox").fadeOut(300);
    }
}
$(document).ready(function(e){
    $("body").append('<div class="tbox"><a href="javascript:void(0)" id="gotop"></a></div>');

    tBox();

    $("#gotop").click(function(){
        //$(document).scrollTop(0);
        $('html,body').animate({'scrollTop':0},1000); //滚回顶部的时间，越小滚的速度越快~
    })
});

$(window).scroll(function(e){
    tBox();
})