var additional_css = "nav { display: none !important; }";

var fb = new Firebase('https://blinding-fire-1510.firebaseio.com/');

var session = fb.child('xyz');

session.on('value', function(snapshot) {
  var session_data = snapshot.val();
  var knowgod_url = session_data.knowgod_url;
  load_view_from_knowgod(knowgod_url);
});

function load_view_from_knowgod(url) {
  $.get(url).success(function(response) {

    // Fetch html
    var knowgod_html = $(response).find('article').first();
    $('#view').html(knowgod_html);

    // Fetch css
    var knowgod_css = response.match(/href=\"(\/css\/main([^\s]*.css))\"/)[1];
    $('<link href="http://knowgod.com' + knowgod_css + '" rel="stylesheet">').prependTo('#view');

    // Additional css
    $('<style type="text/css">' + additional_css + '</style>').prependTo('#view');

  });
}
