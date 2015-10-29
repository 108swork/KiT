// functions

function elch(selector) {
  return ($(selector).length > 0);
}

function sizeFix(size) {
  if(winWidth > size) { //  gen_menu fix
    // some action
  }
  else {
    // some action
  }
}

function defineParam() {		//		define basic parametrs
  wh = $(window).height();
  ww = $(window).width();
  whAd = ((wh/100)*10);  //  some height to delay effect

  wsc = $(window).scrollTop();
  uEf = dsc;	//		up_activarea_line
  dEf = (wh + dsc);		//		down_activarea_line
  dsc = $(document).scrollTop();
}

function light(selector) {
  var targLight = $(selector);
  TweenMax.to(targLight, 0, { display : 'block' });
  TweenMax.to(targLight, 0.5, { opacity: 1 });
}
function dark(selector) {
  var targDark = $(selector);
  TweenMax.to(targDark, 0.5, { opacity: 0 });
  TweenMax.to(targDark, 0, { display : 'none', delay: 0.5 });
}

function aA(selector) {		// 	check "is element in visible area"
  var el1u = eUl(selector);
  var el1d = eDl(selector);
  if (((dEf - whAd) > el1u) & ((uEf + whAd) < el1d)) {
    return true;
  }
  else return false;
}
function eUl(arg) {		//		get element up line
  var valEUL = $(arg).offset().top;
  return valEUL;
}
function eDl(arg) {		//		get element down line
  var scrlT1 = $(arg).offset().top;
  var elemH1 = $(arg).outerHeight();
  var valEDL = scrlT1 + elemH1;
  return valEDL;
}

function menuScroll(selector) {
  var targ = $(selector);
  var hwHeight = $(selector).outerHeight();
  if(dsc > hwHeight) {
    TweenMax.to(targ,0,{position:'fixed', top: 0});
  }
  else { TweenMax.to(targ,0,{position:'relative', top: 'auto'}); }
}

$(document).ready(function(){

  $('.cat_item').hover(function(){
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
      // $('.conbl').removeClass('active');
      // $('.ctr').removeClass('active');
      // $(targ2).addClass('active');
      // $(targ1).addClass('active');
      // initialize();
    }
  });










});

function initialize() {
  var latlng = new google.maps.LatLng(51.7380523,36.2358488);
  var myOptions = {
    zoom: 15,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"),
    myOptions);
    setMarkers(map, places);
}

var places = [
  ['РћРћРћ В«РљСѓСЂСЃРєРѕРµ РјРѕР»РѕРєРѕВ»',51.7393523,36.2357288]
];

function setMarkers(map, locations) {
  var latlngbounds = new google.maps.LatLngBounds();

  var image = new google.maps.MarkerImage('dist/img/map_marker.png',
  new google.maps.Size(87, 87),
  new google.maps.Point(0,0),
  new google.maps.Point(0, 87));
    var myLatLng = new google.maps.LatLng(51.7393523, 36.2357288);
    latlngbounds.extend(myLatLng);
    var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image,
    title: 'РћРћРћ В«РљСѓСЂСЃРєРѕРµ РјРѕР»РѕРєРѕВ»',
  });
  //}
  map.setCenter( latlngbounds.getCenter());
};
