function slide(eles,option){

	if($(eles).length<=0) return;
	
	var self = eles;
	
	//set default control
	option == undefined ? option = {} : option;
	option.status == undefined ? option.status = false : option.status;
	option.active == undefined ? option.active = 0 : isNaN(option.active)==true ? option.active = 0 : option.active = parseInt(option.active) ;
	option.auto == undefined ?  option.auto = true : option.auto ==true || option.auto ==false ? option.auto : option.auto=true;
	option.time == undefined ? option.time = 5000 : isNaN(option.time)==true ? option.time = 5000 : option.time = parseInt(option.time);
	option.thumbnail == undefined ?  option.thumbnail = false : option.thumbnail ==true || option.thumbnail ==false ? option.thumbnail : option.thumbnail = false;
	option.animate == undefined ? option.animate = 'fade' : option.animate;
	option.touch == undefined ?  option.touch = false : option.touch ==true || option.touch ==false ? option.touch : option.touch=true;	
	
	var animateIndex = -1;
	
	if(option.animate=='fade') animateIndex = 0;
	if(option.animate=='slide') animateIndex = 1;
	
	
	var setAutoplay;
	switch(animateIndex){
		case 0:
			//all function
			setBannerDefault = function(){
				$(self).find('.item').eq(option.active).addClass('active');
			}
			
			//slide fading
			fading = function(cur,next){
				$(self).find('.item').eq(next).css({'z-index':2}).stop().fadeIn(500,function(){
					$(self).find('.item').removeClass('active');
					$('#slideControl').children().removeClass('active');
					$(this).css({'z-index':''}).addClass('active').css({'display':'','opacity':''});
					$('#slideControl').children().eq(next).addClass('active');
				})
				
				if(option.auto==true){
					setAutoplay = setTimeout(function(){
						autoSlide();
					},option.time)
				}
			}
			
			//show index slide
			showstatus = function(){
				var count_icon = $(self).find('.item');
				
				var ul = document.createElement('ul');
				ul.id='slideControl';
				$(self).append(ul);
				
				var width=0;
				for(var i=1;i<=count_icon.length;i++){
					var li = document.createElement('li');
					var a = document.createElement('a');
					var node = document.createTextNode(i);
					if(i==1) li.className = 'active'; 
					a.setAttribute('href','#');
					a.appendChild(node);
					if(i == option.active) li.setAttribute('class','active');
					
					li.appendChild(a);
					ul.appendChild(li);
				}
				//var width = $('#slideControl').children().width();
				/*$('#slideControl').css({'width':$('#slideControl').children().length*parseInt($('ul#slideControl li a').css('width')) + parseInt($('#slideControl').children().css('margin-right'))*$('#slideControl').children().length + parseInt($('#slideControl').children().css('margin-left'))*$('#slideControl').children().length + parseInt($('#slideControl').children().css('border-left'))*$('#slideControl').children().length + parseInt($('#slideControl').children().css('border-right'))*$('#slideControl').children().length + 'px'});*/
				
				$('#slideControl').children().click(function(e){
					e.preventDefault();
					var idx;
					var next_idx  = $(this).index();
					
					for(var i=0; i<count_icon.length;i++){
						if(count_icon.eq(i).hasClass('active')) idx=i;
					}
					
					if(next_idx==idx) return;
					
					fading(idx,next_idx);
				})
			}
			
			//show status thumbnail
			showstatusthumbnail = function(){
				if(option.thumbnail==false) return;
				if($('#slideControl').length<=0) return;
				
				var list = $('#slideControl');
				if($(list).children().length<=0) return;
				
				for(var i=0;i<$(list).children().length;i++){
					$(list).children().eq(i).append('<div class="statusThumb"><img width="70" src="'+($(self).find('.item').eq(i).find('img').eq(0).attr('src'))+'" alt="" /></div>')
				}
				
				$('#slideControl').children().mouseover(function(){
					$('#slideControl').children().removeClass('hover');
					$(this).addClass('hover');
					$(this).find('.statusThumb').eq(0).css({'left':($(this).width()/2-$('#slideControl').children().find('.statusThumb').eq(0).width()/2)})
				})
				$('#slideControl').children().mouseout(function(){
					$('#slideControl').children().removeClass('hover');
				})
				
			}
			
			setBannerDefault();
			
			if(option.status==true) showstatus();
		
			if(option.thumbnail==true) showstatusthumbnail();
			
			break;
		case 1:
			var firstTimeRuning = true;
				var clickable = true;
				
				option.maxSlideInColumn == undefined ? option.maxSlideInColumn = 2 : isNaN(option.maxSlideInColumn) == true ? option.maxSlideInColumn = 2 : option.maxSlideInColumn;
				option.width == undefined ? option.width = 500 : isNaN(option.width) == true ? option.width = 500 : option.width;
				option.height == undefined ? option.height = 49 : isNaN(option.height) == true ? option.height = 49 : option.height;
				
				var _idx=0;
				
				next = function(e){
					e.preventDefault();
					
					if(!clickable) return;
					clickable = false;
					
					var btnNext = $(this);
					if($(btnNext).hasClass('off')) {clickable=true; return;}
					_idx-=1;
					
					$(self).stop().animate({'left':_idx*option.width},300,function(){
						if( parseInt($(self).css('left'))==option.width-$(self).width() ){
							$(btnNext).parent().children().removeClass('off')
							$(btnNext).addClass('off');
						}
						else{
							$(btnNext).parent().children().removeClass('off')
						}
						clickable = true;
					})
				}
				
				prev = function(e){
					e.preventDefault();
					
					if(!clickable) return;
					clickable = false;
					
					var btnPrev = $(this);
					if($(btnPrev).hasClass('off')) {clickable=true; return;}
					_idx+=1;
					
					$(self).stop().animate({'left':_idx*option.width},300,function(){
						if( parseInt($(self).css('left'))==0 ){
							$(btnPrev).parent().children().removeClass('off')
							$(btnPrev).addClass('off');
						}
						else{
							$(btnPrev).parent().children().removeClass('off')
						}
						clickable = true;
					})
					
				}
				
				setDefaultValue = function(element){
					if( $(element).parent().find('.newsNavigator').length<=0){
						$(element).parent().find('.newsNavigator').append('<div class="newsNavigator"><p><a href="#" class="prev off">&lt; TrÃƒÆ’Ã¢â‚¬ Ãƒâ€šÃ‚Â°ÃƒÆ’Ã‚Â¡Ãƒâ€šÃ‚Â»ÃƒÂ¢Ã¢â€šÂ¬Ã‚Âºc</a><a href="#" class="next">Sau &gt;</a></p></div>');
					}
					var left=-1,top=-1;
					for(var i=0;i<$(element).children().length;i++){
						if(i%option.maxSlideInColumn==0){
							left++;
						}
						top++;
						if(top>=option.maxSlideInColumn) top = 0;
						$(element).children().eq(i).css({'left': left * ( option.width ),'top': top*( option.height )  })
					}
				}
				
				
				$(self).parent().find('.next').eq(0).click(next);
				$(self).parent().find('.prev').eq(0).click(prev);
				
				setDefaultValue($(self))
			break;
		default:
			return;
			break;
	}
	
	var touchslide = function(){
		
	}
	
	//auto slide
	var autoSlide = function(){

		if(option.auto==false) return;

		switch(animateIndex){
			case 0:
				var count_icon = $(self).find('.item');
				var idx;
				
				for(var i=0; i<count_icon.length;i++){
					if(count_icon.eq(i).hasClass('active')) idx=i;
				}
				var next_idx = idx+1;
				if(next_idx>=count_icon.length) next_idx=0; 
				
				setAutoplay = setTimeout(function(){
					fading(idx,next_idx);
				},option.time)
				break;
			case 1: 
				
				break;
			default:
				return;
				break;
		}
	}
	
	var general = function(){
		if(option.auto==true) autoSlide();
		
		$(self).mouseover(function(e){
			e.preventDefault();
			option.auto = false;
			clearTimeout(setAutoplay);
			setAutoplay = null;
		})
		$(self).mouseout(function(e){
			e.preventDefault();
			option.auto = true;
			setAutoplay = setTimeout(function(){
				autoSlide();
			},option.time);
		})
		
	}
	
	general();
	
	if(option.touch==true) touchslide(); 
};

function selecttabs(el,rel){
	if($(el).hasClass('active')) return;

	$(el).parent().children().removeClass('active');
	$(el).addClass('active');
	
	$(rel).find('>.view').attr('style','');
	$(rel).find('>.'+$(el).find('>a').attr('rel')).css('display','block');
}

function activemenu(menu){
	for(var i=0;i<$('#mainNav ul.list').children().length;i++)
		if($('#mainNav ul.list').children().eq(i).find('>a').attr('rel')== menu )
			$('#mainNav ul.list').children().eq(i).addClass('act');
}

$.fn.animateclass = function(){
	var self = this,idx,onanimation = false;
	
	$(self).find('.name').each(function(){
		if(parseInt($(this).next().css('width'))>0) idx = $(this).parent().index();
		$(this).on('click',function(e){
			e.preventDefault();
			if(onanimation) return;
			if(parseInt($(this).next().css('width'))==0){
				onanimation = true;
				$(self).children().eq(idx).find('.info').animate({'width':0},'slow');
				$(this).next().animate({'width':238},'slow',function(){
					onanimation = false;
				});
				idx = $(this).parent().index();
			}
		})
	})
}

var scroll = 0;
$(window).scroll(function(e){
	
	/*
	if( $('#popupVideo').length>0 )
		$(window).scrollTop(scroll);
	
	if( $('#popupSurvey').length>0 )
		$(window).scrollTop(scroll);
	
	scroll = $(window).scrollTop();
	
	subnavlink_moving($(window).scrollTop());
	*/
})

$(window).resize(function(e){
	//switchscreen();
})


$(document).ready(function(){
	
	if($('.list-class .class').length>0)
		$('.list-class .class').animateclass();
	
	if($(".chat_fb").length>0){
		$(".chat_fb").click(function(e) {
			e.preventDefault();			
			$('.fchat').slideToggle('slow');
		})
	}
	
	if($('#slide').length>0) slide($('#slide'),{'status':true,'thumbnail':false,'animate':'fade','related':'#slide ul.slide','touch':true,'auto':true,'time':3000});
	
	if($('.news-ranking .news').length>0)
		// $('.news-ranking .news .tab').children().each(function(){
		// 	$(this).click(function(e){
		// 		e.preventDefault();
		// 		selecttabs(this,$(this).parents('.news').find('.list-news'));
		// 		$('.news-ranking .news .viewall').attr('href','/'+$(this).find('>a').attr('rel'))
		// 	})
		// })
	if($('.list-class .tab-class').length>0)
		$('.list-class .tab-class').children().each(function(){
			$(this).click(function(e){
				e.preventDefault();
				selecttabs(this,$(this).parents('.list-class').find('.class'));				
			})
		})
	
	var selectedTab='level';
	$('.ranking ul.tabs').find('a').each(function(){
		$(this).click(function(e){
			e.preventDefault()
			$('ul.tabs').find('.active').removeClass('active');
			$(this).parent().addClass('active');
			$('.xh').children().css('display','');
			selectedTab = $(this).attr('rel');			
			$('.xh').find('>div[rel="'+$(this).attr('rel')+'"]').css('display','block');
		})
	})
})





function btnplay(){
	return;
	setTimeout(function(){
		$('.page .play').toggleClass('active');
		btnplay();
	}, 500);
}
$(document).ready(function(){
	btnplay();
	$(".scrollbars").ClassyScroll({pathPadding: 0});

	$(".flipster").flipster({
		style: 'carousel'
	});
		
	// $('#link-popup-download').fancybox({
	// 	'titlePosition'		: 'inside',
	// 	'transitionIn'		: 'none',
	// 	'transitionOut'		: 'none'
	// });

	if(menuSlug != undefined){
		$('.menu li, .menu li a').removeClass('active');
		$('.menu a[href="/'+menuSlug+'"]').addClass('active');
		$('.menu a[href="/'+menuSlug+'"]').parent().addClass('active');
	}
	// $('.a-link-download').click(function(){
	// 	$('#link-popup-download').trigger('click');
	// });
})

