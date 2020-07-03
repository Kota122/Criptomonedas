$(document).ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 600) {
            $('#boton').fadeIn();
        } else {
            $('#boton').fadeOut() < 600;
        }
    });

    $('#boton').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});