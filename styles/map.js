function initialize() {
  var myLatLng = new google.maps.LatLng(47.3870691, 8.1800585);
  var mapCanvas = document.getElementById("map-canvas");
  var mapOptions = {
    center: myLatLng,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.HYBRID
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var myMarker = new google.maps.Marker({position: myLatLng, map: map});
}
google.maps.event.addDomListener(window, 'load', initialize);
