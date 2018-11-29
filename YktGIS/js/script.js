var close = document.querySelectorAll("#close");
var open = document.querySelectorAll("#open");
		$('#reportpanel').hide(200);
		$('#dadreppanel').hide(200);
for (var i = 0; i < close.length; i++) {
	close[i].onclick = function(){
		$('#reportpanel').removeClass("fadeInRight");
		$('#dadreppanel').removeClass("fadeIn");
		$('#reportpanel').addClass('fadeOutRight');
		$('#dadreppanel').addClass('fadeOut');
		$('#reportpanel').hide(800);
		$('#dadreppanel').hide(800);
	}
}
for (var i = 0; i < open.length; i++) {
	open[i].onclick = function(){
		$('#reportpanel').removeClass("fadeOutRight");
		$('#dadreppanel').removeClass("fadeOut");
		$('#reportpanel').addClass('fadeInRight');
		$('#dadreppanel').addClass('fadeIn');
		$('#reportpanel').show(800);
		$('#dadreppanel').show(800);
		
	}
}
/*var d = function(a){
	if(a==0){
		$('#reportpanel').removeClass("fadeOutLeft");
		$('#dadreppanel').removeClass("fadeOut");
	}
}*/
