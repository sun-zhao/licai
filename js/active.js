
$(document).ready(function(){
//	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	var $plus= $('#plus'),
		$bottomPop = $('#bottomPop');
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
});






























