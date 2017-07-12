$(function(){
	
		$('.c-title div a').click(function(e){
			e.preventDefault()
			$('.c-title div a').css('color','black')
			$(this).css('color','pink')
			$('.item').css('display','none');
			$('.item').eq($(this).index()).css('display','block')
			
			if($(this).index()==0){
			$('.c-title .xian div').css('left','0px')
			}else if($(this).index()==1){
				$('.c-title .xian div').css('left','242px')
			}else if($(this).index()==2){
				$('.c-title .xian div').css('left','484px')
			}else if($(this).index()==3){
				$('.c-title .xian div').css('left','726px')
			}
		})
	})