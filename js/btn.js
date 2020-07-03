$(document).ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
            $('#boton').fadeIn();
        } else {
            $('#boton').fadeOut() < 300;
        }
    });

    $('#boton').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});