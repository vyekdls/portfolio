
    

    
        $(function(){
            //마우스가 올라갔을때 2단계 메뉴 보임
            $('.box .w1').mouseover(function(){
                $('.w1').find('.btn').show();
            });
            $('.box .w1').mouseout(function(){
               $('.w1').find('.btn').hide();
            });
        });
    
        