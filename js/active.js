
$(document).ready(function(){
//	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	var $plus= $('#plus'),
		$bottomPop = $('#bottomPop'),
		$window = $(window),
		$document = $(document),
		$searchBar = $('.searchBar');
	//点击底部加号
	$plus.off('touchstart').on('touchstart',function(){
		var $this = $(this);
		if($this.hasClass('current')){
			$this.removeClass('current');
			$bottomPop.removeClass('current');
		}else{
			$this.addClass('current');
			$bottomPop.removeClass('current');
		}
	});
	//下拉页面显示搜索框，上滑页面隐藏搜索框
//	$(document).scroll(function(){
//	    alert($(document).scrollTop());
//	})
	var body = $('.main'),
	    startX,
	    startY;
	function touchStart(event) {
	    //阻止网页默认动作（即网页滚动）
	    event.preventDefault();
	    var touch = event.touches[0];
		    startX = touch.pageX;
		    startY = touch.pageY;
	}
	body.addEventListener("touchstart", touchStart, false);
	function touchMove(event) {
	    event.preventDefault();
	    var touch = event.touches[0],
	        x = touch.pageX - startX,
        		y = touch.pageY - startY;
    		if (Math.abs(x) < Math.abs(y)) {
	        alert(111)
	    }
	}
	body.addEventListener("touchmove", touchMove, false);
	function touchEnd(event) {
		var touch = event.touches[0],
	        endX = touch.pageX,
	        endY = touch.pageY;
	    		alert(endY)
	}
	body.addEventListener("touchend", touchEnd, false);
});






























