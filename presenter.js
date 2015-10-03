var viewer_url = 'http://indigitous.github.io/godtools-remote-presentation-assistant/viewer.html'

var session_id = get_parameter_by_name('session_id');

$(document).ready(function() {
  var url = 'http://knowgod.com/en/fourlaws/1/';

  $('#viewer_link').val(viewer_url + '?session_id=' + session_id);

  send_knowgod_url(session_id, url);
});
