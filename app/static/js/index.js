$(function(){       
 var mySwiper = new Swiper ('.swiper-container',{
    loop: true,autoplay : 3000,speed:500,
    // 如果需要分页器
    pagination: '.swiper-pagination',
  })        


  var swiper1 = new Swiper('.swiper1-container', {
        // scrollbar: '.swiper1-scrollbar',
        scrollbarHide: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,
        slidesOffsetAfter : 100,
        slidesOffsetBefore : 0,
        spaceBetween : 22,
       // noSwiping : true,
        //loop : true,
        //width:'2.733333rem';
    });
        window.addEventListener('scroll',function(){
            $(".seach").css('background','rgba(255,255,255,0.4)');
            if($(window).scrollTop()>440){
                $(".seach").css('background','rgba(255,255,255,1)'); 
                $(".search-line").css({'width':'1000px','border':'1px solid #ccc'})
                 
                 //$(".sou").css({'width':'9rem'})
                
                $(".sou").html('搜索简书的内容和朋友')
            }else{//setTimeout(function(){
                $(".sou").html('')
                    $(".sou").html('搜索')//}
                    $(".search-line").css({'width':'300px'})

                    $(".seach").css('background','rgba(255,255,255,0.4)'); 
            }

        })
      })



