var nytimesUrl = ' '+ theCity +'';



$.getJSON( "ajax/test.json", function( data ) {

  $nytimes-header.text();
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });

  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});
