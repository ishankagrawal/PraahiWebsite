$(document).ready(function()
{
setInterval(animateLogo,1000);
}
);
function animateLogo(){
$("#welcome").animate({opacity:"0.6"},500).animate({opacity:"1"},500)
}