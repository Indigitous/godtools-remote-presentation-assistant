var session_id = get_parameter_by_name('session_id');

if(typeof(session_id) != 'string' || session_id.length == 0) {
  window.location = 'presenter.html?session_id=' + generate_session_guid();
}

var viewer_url = 'http://indigitous.github.io/godtools-remote-presentation-assistant/viewer.html'


$(document).ready(function() {
  var url = 'http://knowgod.com/en/fourlaws/1/';

  $('#viewer_link').val(viewer_url + '?session_id=' + session_id);

  send_knowgod_url(session_id, url);
});
