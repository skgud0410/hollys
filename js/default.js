 // 서브내비게이션 호출 이벤트
 $('#main-nav li').mouseenter(function(){
    $('#sub-nav').slideDown(300);
    $('#main-nav span:last-child').css({
        color:'#222',
    })
    $(this).find('span:last-child').css({
        color:'#fff',
    })
})


// 메인내비게이션 텍스트 색상 변경
$('#main-nav').mouseleave(function(){
    $('#main-nav span:last-child').css({
        color:'#222',
    })
})


// 서브내비게이션 닫기
$('#sub-nav').mouseleave(function(){
    $('#sub-nav').slideUp(300);
    $('#main-nav span:last-child').css({
        color:'transparent',
    })
})