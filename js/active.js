
$(document).ready(function(){
//	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	var $plus= $('#plus'),
		$bottomPop = $('#bottomPop'),
		$window = $(window),
		$document = $(document),
		$searchBar = $('.searchBar'),
		$checkWord = $('.checkWord'),
		$mask = $('.mask'),
		$wordList = $('.wordList'),
		$wordListSpan = $wordList.find('span');
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
	//点击选择字母
	$checkWord.off('touchstart').on('touchstart',function(){
		var $this = $(this);
		if($this.hasClass('current')){
			
			$wordList.removeClass('current');
			$mask.stop().fadeOut();
		}else{
			$this.addClass('current');
			$mask.stop().fadeIn();
			$wordList.addClass('current');
		}if($this.hasClass('showWord')){
			$mask.stop().fadeIn();
			$wordList.addClass('current');
		}
		
	});
	$wordList.find('span').off('touchstart').on('touchstart',function(){
		var $this = $(this);
		$this.addClass('current');
		setTimeout(function(){
			$this.removeClass('current')
		},200);
		$checkWord.addClass('showWord').text($this.text());
		setTimeout(function(){
			$wordList.removeClass('current');	
			$mask.stop().fadeOut();
		},300);
	});
	
	
	
	
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






























