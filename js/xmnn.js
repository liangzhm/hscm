$(function(){
	//tab
		$('.tab .h li').hover(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var index=$('.tab .h li').index(this);
        $('.tab .b').eq(index).addClass('active').siblings('.b').removeClass('active');
    })
	//数字幻灯m5
	$('.m5 .b ul').cycle({
        fx:     'scrollLeft',
        speed:  'fast',
        timeout: 5000,
        pager:  '.m5 .f',
		prev:    '.m5 .prev',
        next:    '.m5 .next'
    });
	//媒体图片m6
	$('.m6 .bc2 li').click(function(){
		var href=$(this).find('a').attr('href');
		$('.m6 .bc1 img').attr('src',href);
		return false;
	})
	$('.m6 .prev').click(function(){
		$('.m6 .bc2 li:first-child').appendTo('.m6 .bc2 ul');
		return false;
	})
	$('.m6 .next').click(function(){
		$('.m6 .bc2 li:last-child').prependTo('.m6 .bc2 ul');
		return false;
	})
	//报名参加m7
	$('.m7 form').html5Validate();
	//海视频道
	$('.m10 .br2 dl').click(function(){
		var index=$('.m10 .br2 dl').index(this);
		$('.m10 .br1').eq(index).show().siblings('.br1').hide();
		return false;
	})
})