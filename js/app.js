/* app.js
* main script file for our little application
* */
//this does what the css does
//proleptic
"use strict";
//$ is a shorthand to jQuery function
$(document).ready(function() {
    $('p a[href!="#top"]').attr('target', '_blank');
    $('section').hide().fadeIn(1000);
    //fades out when it opens

    $('nav a, p a[href="#top"]').click(function(eventObject) {
       // alert('hey you clicked me');
        console.log(this.hash);
        var targetElement = $(this.hash);
        //this element that raise the element- prevent default prevent it from jumping
        $('html,body').animate({
            scrollTop: targetElement.offset().top - navHeight}, 700);
        //we deducted navHeight sothat the section could be seen

        eventObject.preventDefault();

    });

    var nav =$('nav');
    var navTop = nav.offset().top;
    var navHeight = nav.outerHeight();
    var navPlaceholder = $('.nav-placehder');
    navPlaceholder.height(navHeight);

    $(window).scroll(function() {
        var scrollPos = $(this).scrollTop();
        //console.log(scrollPos);
        if(scrollPos > navTop) {
            nav.addClass('nav-fixed');
            navPlaceholder.show();
        }
        else {
            nav.removeClass('nav-fixed');
            navPlaceholder.hide();
        }
    });

    $('#exit-button').click(function() {
        $('#confirm-exit-modal').modal();
    });
    $('#confirm-exit-button').click(function() {
        window.location = "https://ischool.uw.edu";

    });
});

