$(function(){
	$('#top').hide();
	$(window).scroll(function () {
		if ($(window).scrollTop() >200) {
			$('#top').fadeIn(400);//当滑动栏向下滑动时，按钮渐现的时间
		} else {
			$('#top').fadeOut(0);//当页面回到顶部第一屏时，按钮渐隐的时间
		}
	});
	$("#top").click(function(){
	  $("html,body").animate({scrollTop:"0"},500)
	});
	$(".common_title a.btn_menu").click(function(){
		$(".nav_list").show();
	});
	$(".nav_list .nav_close").click(function(){
		$(".nav_list").hide();
	})
})






















