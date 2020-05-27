/*
Template Name: Embellish
File Name: custom.js
Author Name: ThemeVault
Author URI: http://www.themevault.net/
License URI: http://www.themevault.net/license/
*/

$(document).ready(function () {

    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the 
        //nav bar to stick.  
        if ($(window).scrollTop() > 150) {
            $('.main-nav-block').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < 151) {
            $('.main-nav-block').removeClass('navbar-fixed');
        }
    });
    
    jQuery('.footer-block').find('h4')
    jQuery('.footer-block h4 i').on("click", function () {
        if (jQuery(this).hasClass('fa-angle-down')) {
            jQuery(this).removeClass('fa-angle-down').parents('.footer-block').find('.list-unstyled, .gallery-footer, .newslatter').slideToggle();
        }
        else {
            jQuery(this).addClass('fa-angle-down').parents('.footer-block').find('.list-unstyled, .gallery-footer, .newslatter').slideToggle();

        }
    });
});
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#back-to-top').fadeIn(); 
        } else { 
            $('#back-to-top').fadeOut(); 
        } 
    }); 
    $('#back-to-top').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
    
});
  /* Set the width of the side navigation to 250px */
            function openNav() {
                $(".sidebar-close").show();
                $(".sidebar-open").hide();
                document.getElementById("mySidenav").style.width = "80px";
            }

            /* Set the width of the side navigation to 0 */
            function closeNav() {
                $(".sidebar-open").show();
                $(".sidebar-close").hide();
                document.getElementById("mySidenav").style.width = "0";
            }
            
            
            
            
            $(document).ready(function () {
    var myButton = $('#mybutton');
    var userFeed = new Instafeed({
        get: 'user',
        userId: '4828631159',
        accessToken: '4828631159.1677ed0.79cec29b3ab94404ad45f640b87dc4ef',
        limit: '4',
        sortBy: 'most-recent',
        after: function () {
            var images = $("#instafeed").find('a');
            $.each(images, function (index, image) {
                var delay = (index * 75) + 'ms';
                $(image).css('-webkit-animation-delay', delay);
                $(image).css('-moz-animation-delay', delay);
                $(image).css('-ms-animation-delay', delay);
                $(image).css('-o-animation-delay', delay);
                $(image).css('animation-delay', delay);
                $(image).addClass('animated flipInX');
            });

        },
        template: ' <div class="col-md-6 col-xs-6"> <div class="image"><a href="{{link}}" target="_blank"><img src="{{image}}" /><div class="likes">&hearts; {{likes}}</div></a></div></div>'
    });
    userFeed.run();
    //        $(function() {
    //loadMore(); // launches the loadMore function below.
    //});
    //function myFunction() {
    //    loadMore();
    //}
    //myButton.on('click', function() {
    //   
    //  loadMore();
    //});
    //
    //function loadMore() {
    //if(userFeed.hasNext()) // check if there are more pictures available
    //userFeed.next(); // if so, loads them
    ////setTimeout("loadMore()",10000); // 10 seconds timeout before running the function again
    //}
});