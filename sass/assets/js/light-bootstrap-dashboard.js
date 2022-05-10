var searchVisible = 0;
var transparent = true;

var transparentDemo = true;
var fixedTop = false;

var navbar_initialized = false;

$(document).ready(function(){
    window_width = $(window).width();
    
    // 检查侧边栏的背景是否设置了图片
    lbd.checkSidebarImage();
    
    // 初始化小屏幕导航切换   
    if(window_width <= 991){
        lbd.initRightMenu();   
    }
     
    //  激活tooltins   
    $('[rel="tooltip"]').tooltip();

    //      用图标激活交换 
    if($('.switch').length != 0){
        $('.switch')['bootstrapSwitch']();
    }  
    //      激活正常开关
    if($("[data-toggle='switch']").length != 0){
         $("[data-toggle='switch']").wrap('<div class="switch" />').parent().bootstrapSwitch();     
    }
     
    $('.form-control').on("focus", function(){
        $(this).parent('.input-group').addClass("input-group-focus");
    }).on("blur", function(){
        $(this).parent(".input-group").removeClass("input-group-focus");
    });
      
});

// 当Windows调整大小时，激活折叠右菜单
$(window).resize(function(){
    if($(window).width() <= 991){
        lbd.initRightMenu();   
    }
});
    
lbd = {
    misc:{
        navbar_menu_visible: 0
    },
    
    checkSidebarImage: function(){
        $sidebar = $('.sidebar');
        image_src = $sidebar.data('image');
        
        if(image_src !== undefined){
            sidebar_container = '<div class="sidebar-background" style="background-image: url(' + image_src + ') "/>'
            $sidebar.append(sidebar_container);
        }  
    },
    initRightMenu: function(){  
         if(!navbar_initialized){
            $navbar = $('nav').find('.navbar-collapse').first().clone(true);
            
            $sidebar = $('.sidebar');
            sidebar_color = $sidebar.data('color');
            
            $logo = $sidebar.find('.logo').first();
            logo_content = $logo[0].outerHTML;
                    
            ul_content = '';
             
            $navbar.attr('data-color',sidebar_color);
             
            // 将侧边栏中的内容添加到右边的菜单中
            content_buff = $sidebar.find('.nav').html();
            ul_content = ul_content + content_buff;
            
            //将常规标题中的内容添加到右边的菜单中
            $navbar.children('ul').each(function(){
                content_buff = $(this).html();
                ul_content = ul_content + content_buff;   
            });
             
            ul_content = '<ul class="nav navbar-nav">' + ul_content + '</ul>';
            
            navbar_content = logo_content + ul_content;
            
            $navbar.html(navbar_content);
             
            $('body').append($navbar);
             
            background_image = $sidebar.data('image');
            if(background_image != undefined){
                $navbar.css('background',"url('" + background_image + "')")
                       .removeAttr('data-nav-image')
                       .addClass('has-image');                
            }
             
             
             $toggle = $('.navbar-toggle');
             
             $navbar.find('a').removeClass('btn btn-round btn-default');
             $navbar.find('button').removeClass('btn-round btn-fill btn-info btn-primary btn-success btn-danger btn-warning btn-neutral');
             $navbar.find('button').addClass('btn-simple btn-block');
            
             $toggle.click(function (){    
                if(lbd.misc.navbar_menu_visible == 1) {
                    $('html').removeClass('nav-open'); 
                    lbd.misc.navbar_menu_visible = 0;
                    $('#bodyClick').remove();
                     setTimeout(function(){
                        $toggle.removeClass('toggled');
                     }, 400);
                
                } else {
                    setTimeout(function(){
                        $toggle.addClass('toggled');
                    }, 430);
                    
                    div = '<div id="bodyClick"></div>';
                    $(div).appendTo("body").click(function() {
                        $('html').removeClass('nav-open');
                        lbd.misc.navbar_menu_visible = 0;
                        $('#bodyClick').remove();
                         setTimeout(function(){
                            $toggle.removeClass('toggled');
                         }, 400);
                    });
                   
                    $('html').addClass('nav-open');
                    lbd.misc.navbar_menu_visible = 1;
                    
                }
            });
            navbar_initialized = true;
        }
   
    }
}


//返回一个函数，只要它继续被调用，就不会被触发。函数将在停止调用
// N毫秒后被调用。如果传递了'immediate'，则在
//前面，不是尾部。

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		}, wait);
		if (immediate && !timeout) func.apply(context, args);
	};
};
