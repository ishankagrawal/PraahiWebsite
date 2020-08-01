$(document).ready(function()
{
	$(".l").hover(function()
		{
		
		$(this).css("opacity","100%");
		},
		function(){
			console.log("kyaaa??");
			$(this).css("opacity","0%");
		});

	$(".r").hover(function()
		{
		$(this).css("opacity","100%");
		},
		function(){
			
			$(this).css("opacity","0%");
		});
})

