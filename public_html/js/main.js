$(document).ready(function(){

  $('.cat_item').hover(function(){
    // TweenMax.killAll(true, true, true, false);
    TweenMax.killChildTweensOf('.cat_item', true);
    var targ1 = $(this);
    var targ2 = $(this).find('p');
    TweenMax.to(targ1,.5,{scale:1.1});
    TweenMax.to(targ2,0,{display:'block'});
    TweenMax.to(targ2,.5,{opacity:1,y:20});
  },function(){
    var targ1 = $(this);
    var targ2 = $(this).find('p');
    TweenMax.to(targ1,.5,{scale:1});
    TweenMax.to(targ2,.5,{opacity:0,y:0});
    TweenMax.to(targ2,0,{display:'none',delay:.5});
  });

  if(elch('#map_canvas')){
    initialize();
  }

  $('.ctr').click(function(){
    var targ1 = $(this);
    var ti = $(targ1).index();
    var targ2 = $('.conbl').eq(ti);
    var targ3 = $('.conbl.active');
    if($(targ2).is(':not(.active)')){
      TweenMax.to(targ3,.5,{scale:1.5,opacity:0});
      TweenMax.to(targ3,0,{display:'none',delay:.5});
      TweenMax.to(targ2,0,{scale:0,display:'block',delay:.6});
      TweenMax.to(targ2,.5,{scale:1,opacity:1,delay:.6});
      setTimeout(function(){
        $('.conbl').removeClass('active');
        $('.ctr').removeClass('active');
        $(targ2).addClass('active');
        $(targ1).addClass('active');
        initialize();
      },1100);
    }
  });

  if(elch('.fancy')){
    $('.fancy').fancybox();
  }











});
