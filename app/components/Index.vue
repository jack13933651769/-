

<template>
<div>
<div class="swiper-container">
    <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="static/images/yuantu/1.jpg"  alt=""></div>
                <div class="swiper-slide"><img src="static/images/yuantu/2.jpg"  alt=""></div>
                <div class="swiper-slide"><img src="static/images/yuantu/3.jpg"  alt=""></div>
                <div class="swiper-slide"><img src="static/images/yuantu/4.jpg"  alt=""></div>
                <div class="swiper-slide"><img src="static/images/yuantu/5.jpg"  alt=""></div>
                <div class="swiper-slide"><img src="static/images/yuantu/6.jpg"  alt=""></div>
                <div class="swiper-slide"><img src="static/images/yuantu/7.jpg"  alt=""></div>
    </div>
  
        <div class="swiper-pagination"></div>
    </div>



<div class="box">
    <div class="swiper1-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><a href=""><img class="img2" src="static/images/b1.jpg"alt=""></a></div>
            <div class="swiper-slide"><a href=""><img class="img2" src="static/images/b2.jpg"alt=""></a></div>
            <div class="swiper-slide"><a href=""><img class="img2" src="static/images/b3.jpg"alt=""></a></div>
            <div class="swiper-slide"><a href=""><img class="img2" src="static/images/b4.jpg"alt=""></a></div>
            <div class="swiper-slide"><a href=""><img class="img2" src="static/images/b5.jpg"alt=""></a></div>
            <div class="swiper-slide"><a href=""><img class="img2" src="static/images/b6.jpg"alt=""></a></div>
            <div class="swiper-slide"><a href=""><img class="img2" src="static/images/b7.jpg"alt=""></a></div>
           
        </div>
        
        <div class="swiper-pagination"></div>
    </div>
    </div>
    <div class="semenzhuanti">
        <span class="xian">
        </span>
        <span>热门专题</span>
        <a href=""><span class="huan">换一批</span>
        <i class="iconfont icon-huanyihuan"></i></a>
    </div>
    <div class="fenlei">
        <ul>
            <a href=""><li>悬疑推理</li></a>
            <a href=""><li>大学生活</li></a>
            <a href=""><li>诗</li></a>
            <a href=""><li>短篇小说</li></a>
            <a href=""><li>美食</li></a>
            <a href=""><li>青春</li></a>
            <a href=""><li>想法</li></a>
            <a href=""><li>建筑圈</li></a>
            <a href=""><li>漫画·手绘</li></a>
            <a href=""><li>工具癖</li></a>
            <a href=""><li>创业</li></a>
        </ul>
    </div>
    <div class="box">
          <div class="semenzhuanti">
        <span class="xian">
        </span>
        <span>指定热门</span>
        <a href=""><span class="huan">换一批</span>
        <i class="iconfont icon-dingzhi"></i></a>
    </div>
    </div>
   <div class="list">
   <div class="list-top">
       <a href="">
               <div class="img-pic">
                   <img src="static/images/pic-1.jpg"  alt="">
               </div>
               <div class="list-cont">
               <span class="list-font">落花树影</span>
               <span class="list-time">03.26 18:56</span>
               </div>
        </a>
    </div>
    <div class="list-center">
        <span class="title"><a href="">大学只知道睡觉的你, 该醒醒了 (绝对干货)</a></span>
        <div class="fl mylove-x">我的大学</div> <span class="pinglun">阅读1110·评论37·喜欢58</span>

    </div>   
   </div>
   <div class="list">
   <div class="list-top">
           <div class="img-pic">
               <img src="static/images/pic-2.jpg"  alt="">
           </div>
           <div class="list-cont">
           <span class="list-font">怀左同学</span>
           <span class="list-time">03.26 18:56</span>
           </div>
    </div>
    <div class="list-center">
        <span class="title"><a href="">你很努力，但也只是看起来而已</a></span>
        <div class="fl mylove-x love">哲思</div> <span class="pinglun">阅读3020·评论52·喜欢58·赞赏3</span>

    </div>   
   </div>
    <div class="list">
   <div class="list-top">
           <div class="img-pic">
               <img src="static/images/pic-2.jpg"  alt="">
           </div>
           <div class="list-cont">
           <span class="list-font">怀左同学</span>
           <span class="list-time">03.26 18:56</span>
           </div>
    </div>
    <div class="list-center">
        <span class="title"><a href="">你很努力，但也只是看起来而已</a></span>
        <div class="fl mylove-x love">哲思</div> <span class="pinglun">阅读3020·评论52·喜欢58·赞赏3</span>

    </div>   
   </div>
    <div class="list">
   <div class="list-top">
           <div class="img-pic">
               <img src="static/images/pic-2.jpg"  alt="">
           </div>
           <div class="list-cont">
           <span class="list-font">怀左同学</span>
           <span class="list-time">03.26 18:56</span>
           </div>
    </div>
    <div class="list-center">
        <span class="title"><a href="">你很努力，但也只是看起来而已</a></span>
        <div class="fl mylove-x" id="love">哲思</div> <span class="pinglun">阅读3020·评论52·喜欢58·赞赏3</span>

    </div>   
   </div>
  
   <div class="seach">
       <div class="search-line">
           <i class="iconfont icon-search"></i><span class="sou">搜索</span>
       </div>
   </div>
</div>
</template>


<script>
import Swiper from "../static/js/Swiper-3.4.2/dist/js/swiper.min.js";
export default{
  mounted:function(){
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
  }
}
</script>


<style>
*{margin: 0;padding: 0;}
.fl{float: left;}
.swiper-wrapper .swiper-slide img{width: 100%;/*height: 3.6rem;*/}
a{color: black}
a:hover{text-decoration: none;}

.box{width:100%;overflow: hidden;margin: 0 auto;}
.swiper1-container{width: 2.770642rem;/*height: 0.8rem;*/ margin-top:0.412844rem;margin-left: 0.412844rem}
.swiper-wrapper .swiper-slide .img2{width: 100%;/*height:0.8rem;*/}
.box .swiper1-container .swiper-slide {width:2.733333rem;}


.semenzhuanti{height:0.385321rem;margin-top: 0.788991rem;padding-left: 0.412844rem;padding-right: 0.568807rem;margin-bottom: 0.66055rem;}
.semenzhuanti .xian{height: 0.385321rem;width: 0.073394rem;background: #e58c7c;display: inline-block;}
.semenzhuanti span{font-size: 0.293578rem;line-height: 0.385321rem;float: left;margin-left: 0.220183rem;color: #a1a1a1}
.semenzhuanti i{float: right;font-size: 0.366972rem;color: #a1a1a1;font-weight: bold;}
.semenzhuanti .huan{float: right;}

.fenlei{padding-left: 0.550459rem;padding-right: 0.788991rem;}
.fenlei ul li{float: left;border: 0.009174rem solid #e58c7c;padding: 0.275229rem 0.201835rem;margin-right: 0.550459rem;margin-bottom: 0.275229rem;border-radius: 0.06422rem;color:#e58c7c;}

.box{width: 100%;}

.list{height: 2.954128rem;margin-top: 0.220183rem;padding-left: 0.458716rem;padding-right: 0.990826rem;border-bottom: 0.018349rem solid #ddd}
.list .img-pic{width: 0.623853rem;height: 0.623853rem;border-radius: 50%;float:left;}
.list .img-pic img{border-radius: 50%;width: 0.623853rem;height: 0.623853rem;float: left;}
.list .list-cont{float:left;width: 2.908257rem;height: 0.623853rem;margin-left: 0.220183rem;}
.list .list-top{width: 100%;height: 0.623853rem;}
.list .list-top .list-cont .list-font{font-size: 0.275229rem;}
.list .list-top .list-cont .list-time{font-size: 0.165138rem;}
.list .list-center{width: 100%;}
.list .list-center .title{font-size: 0.422018rem;word-spacing: 0.018349rem;width: 100%;display: block;padding-bottom: 0.256881rem;}
.list .list-center #love{text-algin:center;}
.list .list-center .mylove-x{border:0.009174rem solid #e58c7c;padding:0.146789rem 0.201835rem ;color:  #e58c7c;border-radius: 0.045872rem;}
.list .list-center .pinglun{margin-left: 0.183486rem;display: block; float: left;padding-top: 0.256881rem;color: #b1b1b1;font-size: 0.238532rem; }

.footer{width: 8.440367rem;
  height: 0.917431rem; position: fixed;bottom: 0px;border-top: 0.018349rem solid #ccc; padding:0.229358rem 0.733945rem;background: #fff;
  z-index: 33;
display:flex;
}
.footer div{text-align: center;flex:20%;}

.footer i{font-size: 0.587156rem;display: block;height: 0.587156rem;}
.footer div span{font-size: 0.220183rem;margin-bottom: 0.220183rem;}
.ml146{margin-left: 1.321101rem;}

.seach{position:fixed; top:0px;background: rgba(255,255,255,0);width: 100%;height: 1.284404rem;z-index: 32}
.seach .search-line{width: 2.752294rem;height: 0.825688rem;background: #fff;border-radius: 0.366972rem;position: fixed;right: 0.440367rem;top: 0.183486rem;z-index: 38}
.seach .search-line i{font-size: 0.477064rem;line-height: 0.825688rem;margin-left: 0.587156rem;margin-right: 0.330275rem;
  color:#888888}
.seach .search-line span{font-size: 0.385321rem;color:#b4b4b4;}

</style>
