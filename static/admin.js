layui.define(['jquery', 'form', 'layer', 'element'], function (exports) {
    var element = layui.element;
    var form = layui.form;
    var $ = layui.jquery;
    var layer = layui.layer;


    /* 左侧收缩hover效果 */
    $('.menu-item').mouseover(function () {

        if ($('.admin-menu.fold').length > 0) {
            $(this).find('.menu-item-tip').show();
        }
    });
    $('.menu-item').mouseout(function () {

        if ($('.admin-menu.fold').length > 0) {
            $(this).find('.menu-item-tip').hide();
        }

    });

    /* 左菜单控制 */
    $('#admin-menu-f').click(function () {
        if ($('.admin-menu').hasClass('open')) {
            $('.header-logo').toggleClass('open');
            $('.admin-menu').toggleClass('open');
            $('.admin-menu').addClass('fold');
            //TODO 有点生硬
            $('.page-content').css({"width": ($(document.body).width()) + "px"});
            $('.page-content').animate({left: '0px'}, 100);
        } else {
            $('.header-logo').toggleClass('open');
            $('.admin-menu').toggleClass('open');
            $('.admin-menu').removeClass('fold');
            $('.page-content').css({"width": ($(document.body).width() - 70) + "px"});
            $('.page-content').animate({left: '70px'}, 100);
        }
    });

    /*
	 * 打开frame
	 */
    $('.menu-item').click(function (event) {
        $('.admin-menu').find('li').each(function (i, o) {
            $(o).removeClass('active');
        });
        $(this).addClass('active');
        var url = $(this).children('a').attr('_href');
        $('.weIframe').attr('src', url);
    });
    /*
     * 打开子frame
     */
    $('.submenu-item-children').click(function (event) {
        $('.admin-submenu').find('li').each(function (i, o) {
            $(o).removeClass('active');
        });
        $(this).addClass('active');
        var url = $(this).children('a').attr('_href');
        $('.weIframeChild').attr('src', url);
    });

    /* 子菜单控制 */
    $('#admin-submenu-c').click(function () {
        if (!$(this).hasClass('out')) {
            $(this).toggleClass('out');
            $('.admin-submenu').addClass('out');
            $('.admin-content').css({"margin-left": "60px"});
        } else {
            $('.admin-submenu').removeClass('out');
            $(this).toggleClass('out');
            $('.admin-content').css({"margin-left": "170px"});
        }
    });

    /* 侧边栏控制面板 */
    $('#admin-panel-c').click(function () {
        if (!$(this).hasClass('out')) {
            $(this).html('<i class="layui-icon layui-icon-tips"></i> 消息看板');
            $('.admin-panel').addClass('out');
            $(this).toggleClass('out');
            $('.admin-content').css({"margin-right": "0px"});
        } else {
            $(this).html('<i class="layui-icon layui-icon-spread-left"></i> 收起面板');
            $('.admin-panel').removeClass('out');
            $(this).toggleClass('out');
            $('.admin-content').css({"margin-right": "170px"});
        }
    });


    exports('admin', {});
});