

//CREATE VARIABLES 
var $search = $('#search'); 
var $overlay = $('<div id="overlay"></div>'); 
var $img = $('<img>'); 
var $caption = $('<p></p>'); 
var $leftArrow = $('<span id="navLeft" class="icon-reply"></span>');
var $rightArrow = $('<span id="navRight" class="icon-forward"></span>');

//append img to the overlay
$overlay.append($img);  

//append caption to the overlay
$overlay.append($caption); 

//append arrows to overlay 
$overlay.append($leftArrow, $rightArrow); 

//append overlay to body
$('body').append($overlay); 


// Get click event for #gallery links  
$('#gallery a').click(function(e) {
    e.preventDefault();
    
    var href = $(this).attr('href');
    var cap = $(this).children('img').attr('alt'); 
    
    $img.attr('src', href); 
    $caption.text(cap); 
    
    $overlay.show(); 
});

// Get click event for #overlay
$overlay.click(function() {
    $overlay.hide(); 
})




//$search.focus(filterImgs).keyup(filterImgs); 


//$(document).ready(function() {
//    
//    $gallery.magnificPopup({
//        delegate: 'li a',
//        type: 'image',
//        gallery: {enabled: true}
//    });
//});