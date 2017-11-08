   // 导航栏鼠标经过
    // 记录下原本的标题
    var getIndex = $('.nav_cen .active_nav').index();
    
    $('.nav_cen').on('mouseover', 'li', function() {
        $(this).addClass('active_nav choic_fw').siblings().removeClass('active_nav choic_fw');
    })
    // 导航栏鼠标离开事件
    $('.nav_cen').mouseleave(function() {
        $('.nav_cen li').eq(getIndex).addClass('active_nav choic_fw').siblings().removeClass('active_nav choic_fw')
    })
    // 导航栏点击事件
    $('.nav_cen').on('click', 'li', function() {
        getIndex = $('.nav_cen .active_nav').index();
        $(this).addClass('active_nav choic_fw').siblings().removeClass('active_nav choic_fw');
    })