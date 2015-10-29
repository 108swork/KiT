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
