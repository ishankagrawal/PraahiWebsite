$(document).ready(function()
{
	$(".l").hover(function()
		{
		$(".left").animate({backgroundSize: '160%'},"fast");
		$(this).css("opacity","100%");
		
		},
		function(){
			
			$(this).css("opacity","0%");
			$(".left").animate({backgroundSize : '150%'},"fast");
		});

	$(".r").hover(function()
		{
		$(this).css("opacity","100%");
		$(".right").animate({backgroundSize: '150%'},"fast");
		},
		function(){
			
			$(this).css("opacity","0%");
			$(".right").animate({backgroundSize: '130%'},"fast");
		});
})

