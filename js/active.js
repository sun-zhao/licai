
$(document).ready(function(){
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	var $plus= $('#plus'),
	//点击底部加号
	$plus.off('touchstart').on('touchstart',function(){
		var $this = $(this);
		$this.addClass('current');	
		setTimeout(function(){
			$this.removeClass('current');
		},300);
	});
});






























