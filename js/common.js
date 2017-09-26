var if_controlHover = false;
$(function(){	
	nav_handleAction(); 
	video_block();     
	//slide_block();
	//newApp_block();
});

//------------------------------//
//-----------导航功能------------//
//------------------------------//
nav_handleAction = function(){
	var nav_item = $(".nav").find("li").find("a");
	nav_item.removeClass("active");      
	var cur_url = window.location.href;
	var split_url = cur_url.split('/');
	var cur_nav = split_url[split_url.length-1];

	//当前选中导航
	if(cur_nav == "home"){

	}
	else if(cur_nav == "product"){
		$(".nav").find("li").find(".item1").addClass("active");
		product_block();
	}
	else if(cur_nav == "solution"){
		$(".nav").find("li").find(".item2").addClass("active");

	}
	else if(cur_nav == "studio"){
		$(".nav").find("li").find(".item3").addClass("active");
	}
	else if(cur_nav == "company"){
		//关于我们出现效果
		$(".nav").find("li").find(".item4").addClass("active");
		var contentWrapper = $("#content-wrapper");
		var sub_iframe = $("#sub-mainContent");
		sub_iframe.css("height",contentWrapper.css("height"));         		//自适应iframe高度

		//setTimeout(function(){contentWrapper.css("opacity", "1");},400);
	}
		
	nav_item.click(function(){
		$(".nav").find(".active").removeClass("active");
		$(this).addClass("active");
	});
	var nav_show = $(".nav").find(".nav-span");
	nav_show.click(
		function(){
            if($(".nav").hasClass("nav-closed")){
				$(".nav").find("li").find("a").addClass("nav-show");
				$(".nav").find("li").find("a").removeClass("nav-hide");
				$(".nav").removeClass("nav-closed");	
				$(".nav").addClass("nav-open");	
			}
			else{
				$(".nav").find("li").find("a").removeClass("nav-show");
				$(".nav").find("li").find("a").addClass("nav-hide");
				$(".nav").removeClass("nav-open");	
				$(".nav").addClass("nav-closed");	
			}
		});

	//二维码动态效果
	$("#cornerlabel").mouseover(function(){

		//扫一扫缩小
		$(this).css("width", "0px");
		$(this).css("height", "0px");
		$(this).css("top", "50%");
		$(this).css("right", "50px");
		//$("#erweima-toonsmart").css("opacity","1");
		$("#erweima-toonsmart").css("width","100px");       //二维码圆从小变到大
		//$("#erweima-toonsmart").css("cursor", "none");
	});
	$("#erweima-toonsmart").mouseout(function(){
		// $(this).removeClass("erweima-hover-animate");
		//扫一扫还原
		$("#cornerlabel").css("width", "100px");
		$("#cornerlabel").css("height", "93px");
		$("#cornerlabel").css("top", "0");
		$("#cornerlabel").css("right", "0");
		//$("#erweima-toonsmart").css("opacity","0");
		$(this).css("width","0");       //二维码圆从大变小
	});
}		

//--------------------------------//
//--------------视频模块-----------//
//--------------------------------//
video_block = function(){
	//设置视频src
	var videoWhole_source = $("#themeVideoWhole").find("source");

	var video = $("#themeVideoWhole")[0];
	//播放按钮
	var playButton = $("#home-playbutton");
	var ani_interval = 2000;
	
	//移除动画class
	setTimeout(function(){
		playButton.removeClass("jello");
		setInterval(function(){
			playButton.removeClass("jello");
		},ani_interval);
	},1000);
	//增加动画class
	setInterval(function(){
		playButton.addClass("jello");
	},ani_interval);

	playButton.addEventListener("click", function(){
		//mask展开
		// $(".themeVideo-mask").css("opacity", "1");
		$(".themeVideo-mask").find(".item1").css("height","51%");
		$(".themeVideo-mask").find(".item1").css("transform","skewY(0)");
		$(".themeVideo-mask").find(".item1").css("top","0");
		$(".themeVideo-mask").find(".item2").css("height","50%");
		$(".themeVideo-mask").find(".item2").css("transform","skewY(0)");

		//视频出现
		setTimeout(function(){
			//还原mask
			$(".themeVideo-mask").css("opacity", "0");
			$("#inner-background").css("display","none");        //隐藏其余部分
			$(".theme-videoWhole").css("display","block");
			$(".theme-videoWhole").css("opacity","1");
			video.play();
		},600);

	});

	//playButton.click(function(){
	//	//mask展开
	//	// $(".themeVideo-mask").css("opacity", "1");
	//	$(".themeVideo-mask").find(".item1").css("height","51%");
	//	$(".themeVideo-mask").find(".item1").css("transform","skewY(0)");
	//	$(".themeVideo-mask").find(".item1").css("top","0");
	//	$(".themeVideo-mask").find(".item2").css("height","50%");
	//	$(".themeVideo-mask").find(".item2").css("transform","skewY(0)");
    //
	//	//视频出现
	//	setTimeout(function(){
	//		//还原mask
	//		$(".themeVideo-mask").css("opacity", "0");
	//		$("#inner-background").css("display","none");        //隐藏其余部分
	//		$(".theme-videoWhole").css("display","block");
	//		$(".theme-videoWhole").css("opacity","1");
	//		video.play();
	//	},600);
    //
	//});

	//删除按钮
	$("#home-deleteButton").click(function(){
		$("#inner-background").css("display","block");

		$(".themeVideo-mask").css("opacity", "1");
		$(".themeVideo-mask").find(".item1").css("height","0");
		$(".themeVideo-mask").find(".item1").css("transform","skewY(-7deg)");
		$(".themeVideo-mask").find(".item1").css("top","51%");
		$(".themeVideo-mask").find(".item2").css("height","0");
		$(".themeVideo-mask").find(".item2").css("transform","skewY(-7deg)");

		$(".theme-videoWhole").css("display","none");
		// $("#themeVideoWhole").css("height","0");
		// $("#themeVideoWhole").css("top","50%");
		video.pause();
		$(".theme-videoWhole").css("opacity","0");
	});
}

//--------------------------------//
//-----------图片轮播模块----------//
//--------------------------------//
slide_block = function(){
	
	//标记鼠标是否在control上
	var control = $("#slide-controls").find(".control");
	control.mouseover(function(){
		if_controlHover = true;
		control.removeClass("current");
		$(this).addClass("current");

		var cur_index = $("#slide-controls").find(".control.current").index();		
		var current_slide = $("#move-block").find(".move-panel").eq(cur_index);
	});
	control.mouseout(function(){if_controlHover = false;});

	setInterval("slide_effect()",5000);	
}

slide_effect = function(){

	//------当鼠标不在control上时 执行轮播动画------//
	if (!if_controlHover) {
	//---图片渐隐---//	
		var current_slide = $("#move-block").find(".move-panel.current");
		var current_control = $("#slide-controls").find(".control.current");
		var next_slider = $("#move-block").find(".move-panel.next");

		current_slide.find(".bg-img").find("img").css("opacity","0");
		// next_slider.find(".bg-img").find("img").css("opacity","0");

		//更改current
		setTimeout(function(){			
			var cur_next = current_slide.next(".move-panel");
			if (cur_next.length) {
				cur_next.addClass("current");	
				current_slide.removeClass("current");		
			}
			else {             //current是最后一张图片时 将第一张图片置为current
				$("#move-block").find(".move-panel").eq(0).addClass("current");
				current_slide.removeClass("current");
			}				
			
			var next_next = next_slider.next(".move-panel");
			//更改next
			if (next_next.length) {
				next_next.addClass("next");	
				next_slider.removeClass("next");		
			}
			else {             //next是最后一张图片时 将第一张图片置为next
				$("#move-block").find(".move-panel").eq(0).addClass("next");
				next_slider.removeClass("next");
			}

			//图片渐显
			// cur_next.find(".bg-img").find("img").css("opacity","1");

			//恢复展开图片的位置
			current_slide.find(".bg-img").find("img").css("opacity","1");
		},1000);

		//更改control的current
		setTimeout(function(){
			var cur_next = current_slide.next(".move-panel");
			if (cur_next.length) {
				current_control.next(".control").addClass("current");  
				current_control.removeClass("current");	
			}
			else {             
				$("#move-block").find(".control").eq(0).addClass("current");    
				current_control.removeClass("current");
			}
		},300);
	}
	//------当鼠标在control上时 停止轮播动画------//
	else {
		
	}
}

//-------------------------------//
//----------首页内容模块----------//
//------------------------------//
newApp_block = function(){
	//alert($(window).width());   
		/*$(".newApp-img-box").mouseover(function(){
			var w_width = $(window).width();
			if(w_width > 767){             //当显示器不为手机和平板时
				$(this).find(".newApp-hover-prev").addClass("newApp-hover-next");
			}
		});
		$(".newApp-img-box").mouseout(function(){
			var w_width = $(window).width();
			if(w_width > 767){           //当显示器不为手机和平板时
				$(this).find(".newApp-hover-next").removeClass("newApp-hover-next");
			}
			
		});

		$(".newApp-img-box").click(function(){
			var if_show = $(this).find(".newApp-hover-next");
			if($(window).width() < 968){       //当显示器为手机时
			    if (if_show.length){
			    	$(this).find(".newApp-hover-prev").removeClass("newApp-hover-next");
			    }
			    else{
			    	$(this).find(".newApp-hover-prev").addClass("newApp-hover-next");
			    }
			}		   
		});*/	
		$(".newApp-block-container").find("li").mouseover(function(){
			$(this).find(".newApp-description").css("left","10%");
			$(this).find(".newApp-line").css("width","80%");
			$(this).find(".newApp-cover").css("opacity","0.8");
			$(this).find(".newApp-img").css("left","0");
		});			 
		$(".newApp-block-container").find("li").mouseout(function(){
			$(this).find(".newApp-description").css("left","100%");
			$(this).find(".newApp-line").css("width","0");
			$(this).find(".newApp-cover").css("opacity","0");
			$(this).find(".newApp-img").css("left","-10%");
		});			 
}

//--------------------------------//
//-----------产品页面模块----------//
//--------------------------------//
product_block = function(){
	//子导航
	$(".sub-nav").find(".item1").addClass("active");
	$(".sub-nav").find(".sub-nav-item").click(function(){
		$(".sub-nav").find(".sub-nav-item").removeClass("active");
		$(this).addClass("active");

		//更换页面内容
		if(this.text == "手机游戏"){
			$(".sub-product-content").attr("src", "html/product-mobileGame.html");
		}
		else if(this.text == "网页游戏"){
			$(".sub-product-content").attr("src", "html/product-webGame.html");
		}
	});

}