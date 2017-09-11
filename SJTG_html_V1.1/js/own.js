$(function(){
	$('#dowebok').fullpage({
		//sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
		menu: '#menu',
		easing: 'easeInQuart',
	//产品介绍
    /*onSlideLeave: function(anchorLink,index,slideIndex,direction){
			console.log(slideIndex);
			console.log(direction);
			if( slideIndex == 1 && direction == 'left'){
				$('.fp-prev').css('display','none');
				$('.fp-next').css('display','block');
				$('.section2').addClass('section2_one');
				$('.section2').removeClass('section2_two')
			}
			if( slideIndex == 0 && direction == 'right'){
				$('.fp-next').css('display','none');
				$('.fp-prev').css('display','block');
				$('.section2').addClass('section2_two');
				$('.section2').removeClass('section2_one')
			}else{
				
			}
		}*/
	});
	//按钮
	$('.button').on('mouseover',function(){
		$(this).addClass('animated swing')
     });
	$('.button').on('mouseout',function(){
		$(this).removeClass('animated swing')
     });	
	
	//产品价值
    $('.value_one').addClass('animated bounceInLeft');
	$('.value_two').addClass('animated');
	
	$('.value_prev').on('click',function(){
	  $('.value_one').addClass("bounceInLeft");
	  $('.value_two').addClass("bounceOutRight");

      $('.value_one').removeClass("bounceOutLeft");
	  $('.value_two').removeClass("bounceInRight"); 

      $('.value_prev a').addClass('active');
	  $('.value_next a').removeClass('active');
	  
	  $('.section3').addClass('section3_one');
	  $('.section3').removeClass('section3_two')
	});
	$('.value_next').on('click',function(){
	  $('.value_one').addClass("bounceOutLeft");
	  $('.value_two').addClass("dk bounceInRight");

      $('.value_one').removeClass("dk bounceInLeft");
	  $('.value_two').removeClass("none bounceOutRight"); 
	  $('.value_prev a').removeClass('active');
      $('.value_next a').addClass('active');
	  $('.section3').addClass('section3_two');
	  $('.section3').removeClass('section3_one')
	});
	//团队简介
	$('.about_team div').on('mouseover',function(){
		$(this).addClass('animated rotateOutUpRight');
		$(this).removeClass('rotateInDownRight');
		
	});
	$('.about_team div').on('mouseout',function(){
		$(this).addClass('animated rotateInDownRight');
		$(this).removeClass('rotateOutUpRight');
	})
	//申请试用提交
   $('#add_alt').on('click',function(){
	  layer.open({
				  title:false,
                  area: ['600px', '300px'],
				  type: 1,
				  shift: 4,//弹出方式
				  closeBtn: 0,//不显示关闭按钮
				  //skin: 'popub_alt', 样式类名
				  shadeClose: true, //开启遮罩关闭
				  content: $('.popub_alt'),
				  shade: [0.7, '#000'],
				  icon: 5,
				  btn: ['知道了'] //按钮
	   });	 
    });
	
	
	
/*	    setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    }, 3000);*/
});




