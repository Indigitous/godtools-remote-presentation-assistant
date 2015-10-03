var additional_css = "nav { display: none !important; }";

var session = fb.child('xyz');

session.on('value', function(snapshot) {
  var session_data = snapshot.val();
  var knowgod_url = session_data.knowgod_url;
  load_view_from_knowgod(knowgod_url, additional_css);
});

