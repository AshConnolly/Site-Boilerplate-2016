//Smart resize
(function($,sr){
  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');


// usage:
$(window).smartresize(function(){

});

//window scroll throttling

$(document).ready(function(){


        /*=================  Responsive menu  ================*/
        $('.mobile-menu-toggle').click(function(event) 
        {
     
        //TODO Toggle state - not class or slide toggle - bad performance
          $('.nav').slideToggle(300);
                      
            var linktext = $('.mobile-menu-toggle').text();
                    if ( linktext == "Menu" ) {
                    $('.mobile-menu-toggle').text("Close");
                    }
                    if ( linktext == "Close" ) {
                    $('.mobile-menu-toggle').text("Menu");
                    }         
        });

        //adding class and inserting html to freate drop down buttons
        $(".nav > ul > li ").has("ul").addClass("has-dropdown").prepend('<span class="mobile-dropdown-lvl2"></span>');

        $('.nav > ul > li > span').click(function(event) 
        {
         $(this).parents('li').find('ul').slideToggle(300); 
         $(this).find('.vert-line').toggle(); 
        });



        ///*========== Last menu drop down function to stop it flowing off page. ========*

        // var menuitemwidth = document.getElementById("last-menu-item").offsetWidth;
        // var menuitemdropdownwidth = document.getElementById("last-menu-item-drop-down").offsetWidth;
        // var numberofmenuitems = $("#navMenu > *").length;

        // var leftval = menuitemdropdownwidth - ((menuitemwidth - numberofmenuitems)+1);
 
        // var current_width = $(window).width();

        // if (current_width > 600) {

        //   $("#last-menu-item").mouseenter(function(){
        //         $("#last-menu-item-drop-down").css({'position':'absolute','left':'-'+leftval+'px'});
        //     });
        //     $("#last-menu-item").mouseleave(function(){
        //         $("#last-menu-item-drop-down").css({'position':'absolute','left':'-9999px'});
        //     });
        // }




});


// IOS Safari font size change on orientation fix
if (navigator.userAgent.match(/(iPhone|iPod|iPad)/)) {
document.write("<style>body {-webkit-text-size-adjust: none;}</style>")
} 

//Android font booster fix
if (navigator.userAgent.match(/(Android)/)) {
document.write("<style>p,a,h1,h2,h3,h4,h5,div {max-height: 100000px;}</style>")
} 
  