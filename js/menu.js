/*Menu pierwsza kostka*/

var kosc1 = document.getElementById('kostka');
var kosc2 = document.getElementById('scena2');


var menu0 = document.getElementsByClassName("menu1");
var menu1 = document.getElementsByClassName("menu2");
var menu2 = document.getElementsByClassName("menu3");
var menu3 = document.getElementsByClassName("menu4");
var menu4 = document.getElementsByClassName("menu5");
var menu5 = document.getElementsByClassName("menu6");

/*$(document).ready(function() {
$(".menu1 , .menu2 , .menu3 ,.menu4,  .menu5 , .menu6").click(function () { 
$('#hr').slideToggle();
});
});


/*$(document).ready(function() {
$(".menu1").click(function () { 
$('#scena2').slideToggle();
});
});
*/

$('#hr').hide();
$(function () {
    $('.pokaz').click(function () {
        $('#hr').slideToggle();
        
       
        return false;
    });
});

$('#scena2').hide();
$(function () {
    $('.menu1').click(function () {
        $('#scena2').slideToggle();
        
       
        return false;
    });
});

$('#scena3').hide();
$(function () {
    $('.menu2').click(function () {
        $('#scena3').slideToggle();
        
       
        return false;
    });
});

$('#scena4').hide();
$(function () {
    $('.menu3').click(function () {
        $('#scena4').slideToggle();
        
       
        return false;
    });
});

$('#scena5').hide();
$(function () {
    $('.menu4').click(function () {
        $('#scena5').slideToggle();
        
       
        return false;
    });
});

$('#scena6').hide();
$(function () {
    $('.menu5').click(function () {
        $('#scena6').slideToggle();
        
       
        return false;
    });
});

$('#scena7').hide();
$(function () {
    $('.menu6').click(function () {
        $('#scena7').slideToggle();
        
       
        return false;
    });
});




/*tlo zmiana*/
/*

function tloFirst() {
    document.getElementsByClassName(".tloBody").style.background = 'url("../img/tlo.jpg"))';
    onclick.getElementsByClassName(".tlo1");
}

*/


jQuery(document).ready(function() {
    $(".tlo1").on('click', function() {
        $("#newBody").css("background-image", "url('..img/noc.jpg')");
        console.log(true);
    });


});

