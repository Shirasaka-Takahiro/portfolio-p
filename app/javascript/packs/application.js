// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")
require('jquery')

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

/*!
 * Lightbox v2.11.1
 * by Lokesh Dhakar
 *
 * More info:
 * http://lokeshdhakar.com/projects/lightbox2/
 *
 * Copyright Lokesh Dhakar
 * Released under the MIT license
 * https://github.com/lokesh/lightbox2/blob/master/LICENSE
 *
 * @preserve
 */

// home_index
 
$(function() {
    $('.about_me').hide().fadeIn(2000);
});

$(function() {
    $('.name').hide().fadeIn(1000).css({'text-decoration':'underline', 'text-decoration-color':'#666666'});
});

// $(window).scroll(function (){
//     $('.fadein').each(function() {
//         var elemPos = $(this).offset().top,
//             scroll = $(window).scrollTop(),
//             windowHeight = $(window).height();

//             if (scroll > elemPos - windowHeight + 100) {
//                 $(this).addClass('scrollin');            
//             }
//     });
// });


$(function() {
    $('li').hide();
    $('li').each(function(i) {
        $(this).delay(300*i).fadeIn();
    });
});

// about_index


$(function() {
    $('.font').each(function(i) {
        $(this).delay(200*i).animate({opacity: 1});
    });
});

// works_index 

$(function() {
    $('.content').hide();
    $('.content').each(function(i){
        $(this).delay(1000*i).show('slide');
    });

});
























