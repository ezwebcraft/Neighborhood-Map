
// initialize the first data that uis required
var map;
var marker;

var NewYokCity = {
  lat: 40.7127837,
  lng: -74.0059413
};

var model_markers = [

{
  title: "Manhatten",
  descriton:"Among the world’s major commercial, financial and cultural centers, it’s the heart of “the Big Apple.”",
  lat: 40.689861,
  lng: -74.045635,
  address:"new york city",
  url: "http://www.timessquarenyc.org/index.aspx",
  id: "loc0",
  visible: ko.observable(true),
  boolCheck: true
}

];

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: NewYokCity,
    zoom: 11
  });

setMarkers(model_markers);
//   marker = new google.maps.Marker({
//    position: NewYokCity,
//    map: map,
//    title: "Test"
// });

}

function setMarkers(markers) {
  for(i=0; i<markers.length; i++) {

// create a marker for each data
    markers[i].holdMarker = new google.maps.Marker({
      position: new google.maps.LatLng(markers[i].lat, markers[i].lng),
      map: map,
      title: markers[i].title,
    });

  }
}

// window.onload = initMap();

// var marker = new google.maps.Marker(model_markers[0];
//Initialize the map and its contents


// var zip_code = '10312';
//
// // adding google api key for ajaxcall
//
// var url = "https://maps.googleapis.com/maps/api/place/textsearch/json";
//
// url += '?query=' + zip_code + "&key=AIzaSyDZn0VpcoL0RV2ywc0vMm86yEcfJ6-WOok";
//
// $.ajax({
//   url: url,
//   method: 'GET',
// }).done(function(result) {
//   console.log(result);
// }).fail(function(err) {
//   throw err;
// });


// var nytimesUrl = ' '+ theCity +'';
//
//
//
// $.getJSON( "ajax/test.json", function( data ) {
//
//   $nytimes-header.text();
//
//   var items = [];
//   $.each( data, function( key, val ) {
//     items.push( "<li id='" + key + "'>" + val + "</li>" );
//   });
//
//   $( "<ul/>", {
//     "class": "my-new-list",
//     html: items.join( "" )
//   }).appendTo( "body" );
// });



// from the nytimes api doc
// Built by LucyBot. www.lucybot.com
// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// url += '?' + $.param({
//   'api-key': "ab8ef0adc1f04b4cafdb7a131d2c34d1"
// });
//
// $.ajax({
//   url: url,
//   method: 'GET',
// }).done(function(result) {
//   console.log(result);
// }).fail(function(err) {
//   throw err;
// });
