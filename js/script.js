$(document).ready(function() {
    
    $('.gallery').magnificPopup({
        delegate: 'li a',
        type: 'image',
        gallery:{enabled: true}
    });
});
    

//CREATE VARIABLES 
var $search = $('#search'); 
var $imgs =  $('.gallery li img');
var imgCache = []; 

$imgs.each( function() {
    imgCache.push({
        tag: this,
        alt: this.alt.trim().toLowerCase()
    }) 
}); 

function filterImgs() {
    var query = $search.val().toLowerCase(); 

    imgCache.forEach(function(img) {
//        if(query){
            if (img.alt.indexOf(query) === -1) {
                img.tag.style.display = 'none'; 
            }else {
                img.tag.style.display = ''; 
            }  
//        }else {
//            img.tag.style.display = ''; 
//        }
    });
}


$search.focus(filterImgs).keyup(filterImgs); 