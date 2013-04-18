$(function(){
	//tab
		$('.tab .h li').hover(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var index=$('.tab .h li').index(this);
        $('.tab .b').eq(index).addClass('active').siblings('.b').removeClass('active');
    })
	//slider
	$('.slider .b ul').cycle({
        fx:     'scrollLeft',
        speed:  'fast',
        timeout: 3000,
        pager:  '.slider .f',
		prev:    '.prev',
        next:    '.next'
    });
})