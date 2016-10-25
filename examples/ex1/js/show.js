/**
 * Created by q on 2016/7/25.
 */

$(function (){
    show();
})

//
function show(){

    $('.prev').click(function (){
        prev();
    });
    $('.next').click(function (){
        next();
    });

    var cIndex=1;
    function next(){
        $('.p'+cIndex).css({
            'webkitTransform':'rotateY(-180deg)',
            zIndex:cIndex+5
        });
        cIndex++;
        if(cIndex>7){
            cIndex=7;
        }
        $('.p'+cIndex).css({
            'webkitTransform':'rotateY(0deg)',
            zIndex:cIndex+5
        });
    }
    function prev(){
        $('.p'+cIndex).css({'webkitTransform':'rotateY(90deg)'});
        cIndex--;
        if(cIndex<=1){
            cIndex=1;
        }
        $('.p'+cIndex).css({'webkitTransform':'rotateY(0deg)'});
    }

    $(window).keydown(function(event){

        switch(event.keyCode) {
            case 37:
                $('.prev').trigger('click');
                break;
            case 39:
                $('.next').trigger('click');
                break;
            case 32:
                var num=100;

                setInterval(function (){
                    num--;

                    if(num<=0){
                        num==0
                    }
                    $('.con').css({'webkitFilter':'blur('+num/10+'px)'});
                },10)

                break;
        }
    });
}