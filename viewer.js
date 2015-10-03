var additional_css = "nav { display: none !important; }";

var session_id = get_parameter_by_name('session_id');

var session = fb.child(session_id);

$(document).ready(function() {

  session.on('value', function(snapshot) {
    var session_data = snapshot.val();
    var knowgod_url = session_data.knowgod_url;
    load_view_from_knowgod(knowgod_url, additional_css);
  });

});
