$(function() {
  var map;

  init();
});

function init() {
  var latlng = new google.maps.LatLng(
    35.697456,
    139.702148
  );

  var opts = {
    zoom: 10,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  var canvas = $('#map_canvas')[0];
  map = new google.maps.Map(canvas, opts);
}
