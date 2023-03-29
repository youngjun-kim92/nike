$(function () {
    let winWidth;
    $(window).resize(function () {
        winWidth=$(this).width();
        // console.log(winWidth);
        if(winWidth<=1024) {
            $('nav').prependTo('.h_top');
            $('.main_menu').off('mouseenter');
            $('.main_menu').off('mouseleave');
            $('.jordan_logo').find('img').attr('src','images/AIR-JORDAN-LOGO-b.svg');
        }
        else {
            $('nav').appendTo('header');
            $('.jordan_logo').find('img').attr('src','images/AIR-JORDAN-LOGO.svg');
            $('.main_menu').on({
                mouseenter:function () {
                    $('.sub_menu,.sub_bg').show();
                },
                mouseleave:function () {
                    $('.sub_menu,.sub_bg').hide();
                }
            });
        }
        if(winWidth<=580) {
            $('.main_01 img').attr('src','images/M-01-mobile.png');
            $('.main_01 img').attr('src','images/M-02-mobile.png');
            $('.main_01 img').attr('src','images/M-03-mobile.png');
        }
        else {
            $('.main_01 img').attr('src','images/M-01.png');
            $('.main_01 img').attr('src','images/M-02.png');
            $('.main_01 img').attr('src','images/M-03.png');
        }
    }); //resize 이벤트 종료
    $(window).trigger('resize');    //강제 이벤트 발생
    $('.menu_btn').click(function (event) {
        event.stopPropagation();
        $('#index_wrap').css('filter','blur(10px');
        $('body,html').css({
            height:'100vh',
            overflow:'hidden'
        });
        $('#menu_area').show();
        $('.h_top').animate({
            right:'0%'
        },'fast');
    });
    $('#menu_area').click(function(event) {
        console.log($(this).has(event.target).length);
        if($(this).has(event.target).length===0) {
            $('#index_wrap').css('filter','blur(0px)');
            $('body,html').css({
                height:'auto',
                overflow:'visible'
            });
            $('.h_top').animate({
                right:'-100%'
            },'fast',function () {
                $('#menu_area').hide();
            });
        }
    });
    $('.main_menu>li>a').click(function () {
        $(this).siblings('.sub_menu').animate({
            left:'0%'
        },'fast');
    });
    $('.all>a').click(function () {
        $(this).parents('.sub_menu').animate({
            left:'150%'
        },'fast');
    });
    // swiper 플러그인
    let swiperSlide=new Swiper('.Featured_slide', {
        // 모바일기준
        slidesPerView:'auto',
        spaceBetween:8,
        pagination:{
            el:'.f_pager',
            clickable:true,
            type:'fraction'     //'fraction' -<좌우> 'bullets -원형버튼'
        },
        navigation:{
            prevEl:'.f_prev',
            nextEl:'.f_next'
        },
        // 반응형(화면 너비에 따라 레이아웃 변경)
        breakpoints:{
            1025:{
                slidesPerView:3,
                spaceBetween:24
            },
            480:{
                slidesPerView:'auto',
                spaceBetween:16
            }
        }
    });
}); // 문서가 준비되면 함수 시작(document.ready)부분 종료