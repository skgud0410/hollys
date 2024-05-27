let idx = 0;
        // 슬라이더 체인지 함수 sltIdx 0 ~ 3
        function slideChange(sltIdx){
            $('.swiper-slide').fadeOut(300);
            $('.swiper-slide').eq(sltIdx).fadeIn(300);
            $('.swiper-pagination li').removeClass('active');
            $('.swiper-pagination li').eq(sltIdx).addClass('active');
        }

        // pagination click event
        $('.swiper-pagination li').click(function(){
            slideChange($(this).index());
            udx=$(this).index()+1;
        })

        // auto slide change
        setInterval(function(){
            if(idx>3){
                idx=0;
            }
            slideChange(idx++);
        },5000)