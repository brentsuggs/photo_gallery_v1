"use strict";

//CREATE VARIABLES 
var $search = $('#search'); 
var $gallery = $('.gallery');
var $imgs =  $('.gallery li img');
var imgCache = []; 


//POSSIBLE OPTION FOR ADDING IMGS TO GALLERY 
//for (var i = 0; i < imgObjs.length; i += 1) {
//    var img = imgObjs[i]; 
//    var html = '<li>'; 
//    html += '<a href="img/' + img.url + '" title="' + img.title + '">';
//    html += '<img src="img/Thumbnails/' + img.url + '" alt="' + img.alt + '" />';
//    html += '</a>';
//    html += '</li>'; 
//    
//    $gallery.append(html); 
//}

$imgs.each(function () {
    imgCache.push({
        tag: this,
        alt: this.alt.trim().toLowerCase()
    }); 
}); 

function filterImgs() {
    var query = $search.val().toLowerCase(); 

    imgCache.forEach(function(img) {
        if (img.alt.indexOf(query) === -1) {
            img.tag.style.display = 'none'; 
        }else {
            img.tag.style.display = ''; 
        }  
    });
}


$search.focus(filterImgs).keyup(filterImgs); 


$(document).ready(function() {
    
    $gallery.magnificPopup({
        delegate: 'li a',
        type: 'image',
        gallery: {enabled: true}
    });
});