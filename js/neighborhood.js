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
    descriton: "Among the world’s major commercial, financial and cultural centers, it’s the heart of “the Big Apple.”",
    lat: 40.689861,
    lng: -74.045635,
    address: "new york city",
    url: "https://www.nycgo.com/boroughs-neighborhoods/manhattan",
    id: "loc0",
    // pic: ko.observable("http://wikitravel.org/en/File:Manhattan_from_top_of_the_rock.JPG"),
    visible: ko.observable(true),
    boolCheck: true
  },
  {
    title: "Times Square",
    descriton: "Times Square is a major commercial intersection, tourist destination, entertainment center and neighborhood in the Midtown Manhattan section of New York City",
    lat: 40.758895,
    lng: -73.985131,
    address: "Manhattan, NY 10036",
    url: "http://www.timessquarenyc.org/index.aspx",
    id: "loc1",
    // pic:https:"maps.googleapis.com/maps/api/streetview?size=600x300&location=46.414382"+ +","+"+10.013988&heading=151.78&pitch=-0.76&key=",
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

}

function setMarkers(markers) {
  for (i = 0; i < markers.length; i++) {

    // create a marker for each data
    markers[i].holdMarker = new google.maps.Marker({
      position: new google.maps.LatLng(markers[i].lat, markers[i].lng),
      map: map,
      title: markers[i].title,
      shape: {
        coords: [1, 25, -40, -25, 1],
        type: 'poly'
      }


    });

    markers[i].contentString = "<div><center><img src ='https://maps.googleapis.com/maps/api/streetview?size=150x75&location=" +
      markers[i].lat +
      "," +
      markers[i].lng +
      "&heading=151.78&pitch=-0.76&key=AIzaSyBdfBXFbW-fEvIIv2Yib9xPppB5KUtrR0E' alt='Location View of " +
      markers[i].title +
      " '><br><hr style='margin-bottom: 2px'><strong>About<br><br> " +
      markers[i].descriton +
      " <a class='web-links' href='http://" +
      markers[i].url +
      "'><br><br>" +
      markers[i].title +
      "</a></center></div>";

    //Binds infoWindow content
    var infowindow = new google.maps.InfoWindow({
      content: markers[i].contentString
    });

    // refers to the https://developers.google.com/maps/documentation/javascript/events
    new google.maps.event.addListener(markers[i].holdMarker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(markers[i].contentString);
        infowindow.open(map, this);
        var windowWidth = $(window).width();
        if (windowWidth <= 950) {
          map.setZoom(14);
        } else if (windowWidth > 950) {
          map.setZoom(16);
        }
        map.setCenter(marker.getPosition());
        markers[i].picBoolTest = true;
      };
    })(markers[i].holdMarker, i));



  }
}
