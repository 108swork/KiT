function elch(e){return $(e).length>0}function sizeFix(e){winWidth>e}function defineParam(){wh=$(window).height(),ww=$(window).width(),whAd=wh/100*10,wsc=$(window).scrollTop(),uEf=dsc,dEf=wh+dsc,dsc=$(document).scrollTop()}function light(e){var n=$(e);TweenMax.to(n,0,{display:"block"}),TweenMax.to(n,.5,{opacity:1})}function dark(e){var n=$(e);TweenMax.to(n,.5,{opacity:0}),TweenMax.to(n,0,{display:"none",delay:.5})}function aA(e){var n=eUl(e),o=eDl(e);return dEf-whAd>n&uEf+whAd<o?!0:!1}function eUl(e){var n=$(e).offset().top;return n}function eDl(e){var n=$(e).offset().top,o=$(e).outerHeight(),t=n+o;return t}function menuScroll(e){var n=$(e),o=$(e).outerHeight();dsc>o?TweenMax.to(n,0,{position:"fixed",top:0}):TweenMax.to(n,0,{position:"relative",top:"auto"})}function initialize(){var e=new google.maps.LatLng(51.7380523,36.2358488),n={zoom:15,center:e,mapTypeId:google.maps.MapTypeId.ROADMAP},o=new google.maps.Map(document.getElementById("map_canvas"),n);setMarkers(o,places)}function setMarkers(e,n){var o=new google.maps.LatLngBounds,t=new google.maps.MarkerImage("./img/map_marker.png",new google.maps.Size(87,87),new google.maps.Point(0,0),new google.maps.Point(0,87)),a=new google.maps.LatLng(51.7393523,36.2357288);o.extend(a);new google.maps.Marker({position:a,map:e,icon:t,title:"РћРћРћ В«РљСѓСЂСЃРєРѕРµ РјРѕР»РѕРєРѕВ»"});e.setCenter(o.getCenter())}$(document).ready(function(){$(".cat_item").hover(function(){var e=$(this),n=$(this).find("p");TweenMax.to(e,.5,{scale:1.1}),TweenMax.to(n,0,{display:"block"}),TweenMax.to(n,.5,{opacity:1,y:20})},function(){var e=$(this),n=$(this).find("p");TweenMax.to(e,.5,{scale:1}),TweenMax.to(n,.5,{opacity:0,y:0}),TweenMax.to(n,0,{display:"none",delay:.5})}),elch("#map_canvas")&&initialize(),$(".ctr").click(function(){var e=$(this),n=$(e).index(),o=$(".conbl").eq(n),t=$(".conbl.active");$(o).is(":not(.active)")&&(TweenMax.to(t,.5,{scale:1.5,opacity:0}),TweenMax.to(t,0,{display:"none",delay:.5}),TweenMax.to(o,0,{scale:0,display:"block",delay:.6}),TweenMax.to(o,.5,{scale:1,opacity:1,delay:.6}),setTimeout(function(){$(".conbl").removeClass("active"),$(".ctr").removeClass("active"),$(o).addClass("active"),$(e).addClass("active"),initialize()},1100))})});var places=[["РћРћРћ В«РљСѓСЂСЃРєРѕРµ РјРѕР»РѕРєРѕВ»",51.7393523,36.2357288]];