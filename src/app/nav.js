/*-------------------------------------------------------------------------
 * IPRESSUM - Custom jQuery Scripts
 * ------------------------------------------------------------------------

	1.	Plugins Init
	2.	Site Specific Functions
	3.	Shortcodes
	4.      Other Need Scripts (Plugins config, themes and etc)

-------------------------------------------------------------------------*/


jQuery(document).ready(function($){


/*------------------------------------------------------------------------*/
/*	1.	Plugins Init
/*------------------------------------------------------------------------*/


/*-----------SUPERFISH INIT-------------*/

	function initSuperFish(){

		$("ul.sf-menu").superfish({
			 delay:  50,
			 autoArrows: true,
			 animation:   {opacity:'show'}
			 //cssArrows: true
		});

		// Replace SuperFish CSS Arrows to Font Awesome Icons
		$('nav > ul.sf-menu > li').each(function(){
			$(this).find('.sf-with-ul').append('<i class="fa fa-angle-down"></i>');
		});
	}

	initSuperFish();



/*-----------SCROLLTO INIT-------------*/
        function initLocalScroll() {

		jQuery('ul.main-navigation, ul.mobile-navigation').localScroll({
			offset: -112,
			duration: 1000,
			easing:'easeInOutExpo'
		});


        }
        initLocalScroll();





/*-----------PAGE PRELOADER-------------*/

$(window).load(function() {
	$("#page-preloader").fadeOut(300, function(){
		$(this).remove();
	});

});

function triggerMobileMenu() {
	$(".mobile-menu-trigger").click(function () {
		if ($("#mobile-menu").hasClass('hide-nav')) {
			setTimeout(function(){
			$("#mobile-menu").removeClass('hide-nav').addClass('show-nav');
			}, 100);
		}else {
			setTimeout(function(){
			$("#mobile-menu").removeClass('show-nav').addClass('hide-nav');
			}, 100);
		}

		if ($("body").hasClass('menu-close')) {
			setTimeout(function(){
			$("body").removeClass('menu-close').addClass('menu-open');
			}, 100);
		}else {
			setTimeout(function(){
			$("body").removeClass('menu-open').addClass('menu-close');
			}, 100);
		}
		return false;
	});




	$(".mobile-nav .close").click(function () {
		setTimeout(function(){
			$("#mobile-menu").addClass('hide-nav'), $("body").addClass('menu-close');
			}, 100);
		});

}

triggerMobileMenu();

});

/*-----------手機清單次項目驅動-------------*/

var isHover = true;
var isMobile = false;

$(document).ready(function() {
    //選單開合
     if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
    if (isMobile) isHover = false;

    $(".menu li").has("ul").addClass("has-child").append('<span class="toggle-submenu"></span>');
    $('#mobile-menu .menu li.active > ul').show();

    /* ↓ 如果PC不想要HOVER效果請註解 ↓ */
    $('.menu li.has-child').hover(function() {
        if(isHover && $('.toggle-mmenu').is(':hidden')) {
            $(this).addClass('active hover');
            $(this).children('ul').stop().slideDown('fast');
        }
    },function() {
        if(isHover && $('.toggle-mmenu').is(':hidden')) {
            $(this).removeClass('active hover');
            $(this).children('ul').stop().slideUp('fast');
        }
    });
    /* ↑ 如果PC不想要HOVER效果請註解 ↑ */

    $('.menu li.has-child > a').click(function() {

        if (!$(this).parent().hasClass('can-link') && !$(this).parent().hasClass('hover')) { /* ← 如果PC不想要HOVER效果請註解這行 */
//        if ($('.toggle-mmenu').is(':visible')) { /* ← 如果PC想要HOVER效果請註解這行 */
            $(this).siblings('.toggle-submenu').trigger('click');
            return false;
        }
    });
    $('.toggle-submenu').click(function() {
        $(this).siblings('ul').stop().slideToggle();
        $(this).parent().toggleClass('active');
        $('.menu li').not($(this).parents('li')).removeClass('active');
        $('.menu li ul').not($(this).parents('li').children('ul')).stop().slideUp();
        return false;
    });

    //切換目標active的按鈕
    $('.toggleBtn').click(function() {
        var t = $(this).attr('href');
        if ($(this).hasClass('toggle-mmenu')) {
            $('#mobile-search').removeClass('active');
            $('#member-box').removeClass('active');
        }
        if (t == '#member-box') {
            $('#mobile-search').removeClass('active');
        } else if (t == '#mobile-search') {
            $('#member-box').removeClass('active');
        }

        if ($(this).data('toggletag')) {
            var toggleTag = $(this).data('toggletag');
        } else {
            var toggleTag = 'active';
        }

        $(t).toggleClass(toggleTag);
        return false;
    });

    //側選單開合
    $(".side-nav li").has("ul").addClass("has-child");
    $(".side-nav li.active").children("ul").show();
    $(".side-nav a").click(function(e){
        if ($(this).siblings().length > 0) {
            e.preventDefault();
            $(this).siblings("ul").slideToggle();
            $(this).parent('li').toggleClass("active");
            if($('.toggle-mmenu').is(':visible')) {
                $('.side-nav li').not($(this).parents('li')).removeClass('active');
                $('.side-nav li ul').not($(this).parents('li').children('ul')).stop().slideUp();
            }
        }
    });
    //平板時側選單整體開合
    $('.toggle-side').click(function(){
        $('body').toggleClass('side-open');
        return false;
    });

    //語言選單開合
    $('.site-header .language .btn').click(function() {
        $(this).siblings('ul').stop().slideToggle('fast');
        return false;
    });
    $(document).on('click', function(e){
        if ($('.site-header .language .btn').is(':visible')) {
            if($(e.target).parents('.site-header .language').length==0){
                $('.site-header .language ul').stop().slideUp('fast');
            }
        }
        if ($('#member-box').is(':visible')) {
            if($(e.target).parents('#member-box').length==0){
                $('#member-box').removeClass('active');
            }
        }
        if ($('#mobile-search').is(':visible')) {
            if($(e.target).parents('#mobile-search').length==0){
                $('#mobile-search').removeClass('active');
            }
        }
        if($(e.target).parents('.site-header .menu').length==0){
            $('.site-header .menu ul').stop().slideUp('fast');
        }
    });

    //gotop按鈕
    $(".gotop").click(function(){
        $.scrollTo(0, 500);
        return false;
    });
    $(window).on('scroll', function() {
        if($(this).scrollTop()>40){
            $('.floating').fadeIn();
        } else {
            $('.floating').hide();
        }
    });


    $('label input[type="radio"]').change(function(){
        var radioName = $(this).attr('name');
        $('label input[name='+radioName+']').parents('label').removeClass('checked');
        $('label input[name='+radioName+']:checked').parents('label').addClass('checked');
    });

//     $('.fancybox').fancybox({
//         margin: 5,
//         padding: 10,
//         width: 600,
//         maxWidth: '100%',
//         type: 'ajax',
//         helpers : {
//             overlay : {
//                 css : {
//                     'background' : 'rgba(0,0,0,0.90)'
//                 }
//             }
//         }
//     });
//     $('.btn.history').fancybox({
//         margin: 5,
//         padding: 0,
//         width: 600,
//         maxWidth: '100%',
//         type: 'inline',
//         helpers : {
//             overlay : {
//                 css : {
//                     'background' : 'rgba(0,0,0,0.90)'
//                 }
//             }
//         }
//     });
});

//左邊補0
function padLeft(str, len) {
    str = '' + str;
    if (str.length >= len) {
        return str;
    } else {
        return padLeft("0" + str, len);
    }
}

//社群分享
function shareToFacebook() {
    window.open("http://www.facebook.com/share.php?u=".concat(encodeURIComponent(location.href)),"Facebook",config='height=600,width=600')
}

function shareToTwitter() {
    window.open("http://twitter.com/home/?status=".concat(encodeURIComponent(document.title)).concat(" ").concat(encodeURIComponent(location.href)),"Twitter",config='height=600,width=600')
}

function shareToGoogle() {
    window.open("https://plus.google.com/share?url=".concat(encodeURIComponent(location.href)).concat("menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600"),"Google",config='height=600,width=600')
}

function shareToPlurk() {
    window.open("http://www.plurk.com/?qualifier=shares&status=".concat(encodeURIComponent(location.href)).concat(" ").concat("&#40;").concat(encodeURIComponent(document.title)).concat("&#41;"),"Plurk",config='height=600,width=600')
};
function shareToLINE() {
        window.open("http://line.me/R/msg/text/?".concat(encodeURIComponent(document.title)).concat("%0D%0A").concat(encodeURIComponent(location.href)));
}
function shareToLinkedin(){
     var d = new Date(),
        _time=d.getTime();
        window.open("https://www.linkedin.com/cws/share?url=".concat(encodeURIComponent(location.href)).concat("&original_referer=").concat(encodeURIComponent(location.href)).concat("&token=&isFramed=false&lang=zh_TW&_ts=").concat(_time),"linkedin share",config='height=600,width=600')

}
function shareToPinterest(){
	window.open('http://pinterest.com/pin/create/button/?url='.concat(encodeURIComponent(location.href)),"Pinterest",config='height=600,width=600')
}
function shareToBlogger(){
	window.open('http://www.blogger.com/blog_this.pyra?t&u='.concat(encodeURIComponent(location.href)).concat("&n=").concat(encodeURIComponent(document.title)),"Blogger",config='height=600,width=600')
}
function shareToGmail(){
	window.open('http://www.addtoany.com/add_to/google_gmail?linkurl='.concat(encodeURIComponent(location.href)).concat("&linknote=").concat(encodeURIComponent(document.title)),"Gmail",config='height=600,width=600')
}







