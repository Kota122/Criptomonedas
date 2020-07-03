$(document).ready(function(){
	var ancho = $(window).width();
 
// Si trabajamos con una imagen desactivamos el background-size:cover;
	if (ancho <= 1350){
		$('body').css({
			'background-size': 'initial'
		});
	}
 
// Resto del código parallax
 
});