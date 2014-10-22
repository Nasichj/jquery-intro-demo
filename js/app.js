/* app.js
* main script file for our little application
* */
//this does what the css does
"use strict";
jQuery(document).ready(function() {
    jQuery('p a[href!="#top"]').attr('target', '_blank');
    jQuery('section').hide().fadeIn(1000);
    //fades out when it opens

    jQuery('nav a, p a[href="#top"]').click(function(eventObject) {
       // alert('hey you clicked me');
        console.log(this.hash);
        var targetElement = jQuery(this.hash);
        //this element that raise the element- prevent default prevent it from jumping
        jQuery('html,body').animate({scrollTop: targetElement.offset().top}, 700);

        eventObject.preventDefault();

    });
});

