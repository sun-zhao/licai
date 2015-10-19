;(function($){
    $.fn.carousel = function(options){
        var defaults = {
            autoRun: true,      // 是否自动滚动
            prevBtn: 'prev',    // 左键样式
            nextBtn: 'next',    // 右键样式
            showItemCount: 1,   // 最小item个数
            autoRunTime: 3000   // 滚动间隔时间
        };
        var _moving;
        var opts = $.extend(defaults, options);
        var obj_mover = $(this);
        this.find("."+ opts.prevBtn +"").click(function(){
            mover_carousel(obj_mover, "left");
        });

        this.find("."+ opts.nextBtn +"").click(function(){
            mover_carousel(obj_mover, "right");
        });

        if(this.find('li').length > opts.showItemCount && opts.autoRun){
            this.hover(function () {
                clearInterval(_moving);//当鼠标在滚动区域中时,停止滚动
            },function () {
                _moving = setInterval(function () {
                    mover_carousel(obj_mover, "left");
                }, opts.autoRunTime);//滚动间隔时间取决于autoRunTime
            }).trigger('mouseleave');
        } else {
            clearInterval(_moving);
        }

        this.find('li').touchwipe({
            wipeLeft: function() {
                mover_carousel(obj_mover, "left");
                if(opts.autoRun){
                    clearInterval(_moving);
                }
            },
            wipeRight: function() {
                mover_carousel(obj_mover, "right");
                if(opts.autoRun){
                    clearInterval(_moving);
                }
            },
            wipeEnd: function(){
                if(opts.autoRun){
                    _moving = setInterval(function () {
                        mover_carousel(obj_mover, "left");
                    }, opts.autoRunTime);//滚动间隔时间取决于autoRunTime
                }
            }
        });

        function mover_carousel(obj_mover, direction){
            // 获取滚动区域list
            var run_list = obj_mover.find('li');
            if (run_list.length > opts.showItemCount) {
                if (direction == "left") {
                    var _field = $(run_list[0]);//此变量不可放置于函数起始处,li:first取值是变化的
                    var _single_num = _field.width();//取得单元滚动数量(多行滚动情况下,此变量不可置于开始处,否则会有间隔时长延时)
                    _field.stop().animate({marginLeft: -_single_num}, 800, function () {
                        _field.css('marginLeft', 0).appendTo(_field.parent());//隐藏后,将该行的margin值置零,并插入到最后,实现无缝滚动
                    });
                } else if (direction == "right") {
                    var _field = $(run_list[run_list.length - 1]);//此变量不可放置于函数起始处,li:last取值是变化的
                    var _single_num = _field.width();//取得每次滚动数量(多行滚动情况下,此变量不可置于开始处,否则会有间隔时长延时)
                    _field.parent().prepend(_field.css('marginLeft', -_single_num));//添加到第一个
                    _field.stop().animate({marginLeft: 0}, 800, function () {
                    });
                }

            }
        }
    }
})(jQuery);