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
    TweenMax.killAll(true, true, true, false);
    var targ1 = $(this);
    var ti = $(targ1).index();
    var targ2 = $('.conbl').eq(ti);
    var targ3 = $('.conbl.active');
    if($(targ2).is(':not(.active)')){
      TweenMax.to(targ3,.5,{scale:1.5,opacity:0});
      TweenMax.to(targ3,0,{display:'none',delay:.5});
      TweenMax.to(targ2,0,{scale:0,display:'block',delay:.6});
      TweenMax.to(targ2,.5,{scale:1,opacity:1,delay:.6});
      // setTimeout(function(){
        $('.conbl').removeClass('active');
        $('.ctr').removeClass('active');
        $(targ2).addClass('active');
        $(targ1).addClass('active');
        initialize();
        setTimeout(function(){
          initialize();
        },1100);
      // },1100);
    }
  });

  $('.gsmt').click(function(){
    TweenMax.killAll(true, true, true, false);
    var targ1 = $(this);
    var ti = $(targ1).index();
    var targ2 = $('.gs_slide').eq(ti);
    var targ2st = $(targ2).find('.sp');
    var targ3 = $('.gs_slide.active');
    if($(targ2).is(':not(.active)')){
      TweenMax.to(targ3,.5,{scale:.5,opacity:0});
      TweenMax.to(targ3,0,{display:'none',delay:.5});
      TweenMax.to(targ2,0,{scale:1,opacity:1,display:'block',delay:.6});
      TweenMax.to(targ2st,0,{scale:0,opacity:0,display:'block',delay:.6});
      TweenMax.staggerTo(targ2st,.5,{scale:1,opacity:1,delay:.6},.25);
      // setTimeout(function(){
        $('.gs_slide').removeClass('active');
        $('.gsmt').removeClass('active');
        $(targ2).addClass('active');
        $(targ1).addClass('active');
      // },1100);
    }
  });

  if(elch('.fancy')){
    $('.fancy').fancybox();
  }

  $('.f_sub').click(function(e) {
    e.preventDefault();

    var fin1 = $('.fin1').val();
    var fin2 = $('.fin2').val();
    var fin3 = $('.fin3').val();
    var fin4 = $('.fin4').val();
    var fin5 = $('.fin5').val();

    if (fin1 != 0 && fin2 != 0 && fin4 != 0 && fin5 != 0) {

        var dataString = 'name=' + fin1 + '&mail=' + fin2 + '&phone=' + fin3 + '&theme=' + fin4 + '&mess=' + fin5;

        jQuery.ajax({
          type: "POST",
          url: "/dist/sendmail.php",
          data: dataString,
          success: function() {
            alert('Сообщение успешно отправлено!');
          }
        });

        $('.fin1').val('');
        $('.fin2').val('');
        $('.fin3').val('');
        $('.fin4').val('');
        $('.fin5').val('');
      }
      else {
        alert('Пожалуйста заполните все поля помеченные *');
      }

    return false;
  });











});
