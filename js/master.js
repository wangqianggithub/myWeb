/**
 * Created by q on 2016/10/25.
 */


$(function (){
    init();
})

function init(){
    //topMenu();
}

//头部导航点击
function topMenu(){
    $('.topIframe').contents().find('.nav li').click(function (){
        $(this).addClass('active').siblings().removeClass('active');
    });
}
