/**
 * Created by zhaoy on 15/10/19.
 */
$(function(){
    var $window = $(window),
        $downloadCode = $('.downloadCode');
    $downloadCode.hover(function(){
        var $this = $(this);
        $this.find('span').stop().fadeIn();
    },function(){
        var $this = $(this);
        $this.find('span').stop().fadeOut();
    });
    //  大 banner 切换
    var $BannerShow =$('.imglist'),
        $banner = $('.imgBox'),
        $LiWidth = $banner.width(),
        $pageBox = $('.page'),
        b_l = $banner.find('li').length,
        b_w = $banner.width(),
        ban_w_h = 1200/464;
//        $banner.height(b_w/ban_w_h);
    if($BannerShow.find('li').length>1){
        $.each($BannerShow.find('li'),function(i,item){
            $BannerShow.find('li').width($LiWidth);
            if(i == 0){
                $pageBox.append("<dd class='current'>" + "</dd>");
            }else{
                $pageBox.append("<dd>" +"</dd>");
            }
        });
    }else{
        $pageBox.hide();
        $('.imgBox .prev,.imgBox .next').hide();
    }
    var $page = $pageBox.find("dd");
    var imgTime =0;
    $page.click(function(){
        var $this = $(this);
        var clickIndex =$page.index($this);
        $this.addClass("current").siblings().removeClass("current");
        $BannerShow.animate({
            "left":-clickIndex * $LiWidth
        },400);
    });
    $('.imgBox .prev,.imgBox .next').click(function(){
        var $this = $(this);
        var $pageCurrent =$('.page dd.current');
        if($this.hasClass('prev')){
            if($pageCurrent.prev().length){
                $pageCurrent.prev().click();
            }else{
                $page.last().click();
            }
        }else{
            if($pageCurrent.next().length){
                $pageCurrent.next().click()
            }else{
                $page.first().click();
            }
        }
    });
//   自动轮播定时器
    function TimeShow(){
        clearTimeout(imgTime);
        $(".imgBox .next").click();
        imgTime = setTimeout(TimeShow,4000);
    }
    imgTime = setTimeout(TimeShow,4000);
    //  大 banner 切换
    var $BannerShow2 =$('.BannerShow'),
        $banner2 = $('.banner'),
        $LiWidth2 = $banner2.width(),
        $pageBox2 = $('.page_2'),
        b_l2 = $banner2.find('li').length,
        b_w2 = $banner2.width();
    if($BannerShow2.find('li').length>1){
        $.each($BannerShow2.find('li'),function(i,item){
            if(i == 0){
                $pageBox2.append("<dd class='current'>" + "</dd>");
            }else{
                $pageBox2.append("<dd>" +"</dd>");
            }
        });
    }else{
        $pageBox2.hide();
        $('.prev_1,.next_1').hide();
    }
    var $page2 = $pageBox2.find("dd");
    var imgTime2 =0;
    $page2.click(function(){
        var $this = $(this);
        var clickIndex =$page2.index($this);
        $this.addClass("current").siblings().removeClass("current");
        $BannerShow2.animate({
            "left":-clickIndex * $LiWidth2
        },500);
    });
    $('.prev_1,.next_1').click(function(){
        var $this = $(this);
        var $pageCurrent =$('.page_2 dd.current');
        if($this.hasClass('prev_1')){
            if($pageCurrent.prev().length){
                $pageCurrent.prev().click();
            }else{
                $page.last().click();
            }
        }else{
            if($pageCurrent.next().length){
                $pageCurrent.next().click()
            }else{
                $page.first().click();
            }
        }
    });

});