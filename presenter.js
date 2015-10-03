var viewer_url = 'http://indigitous.github.io/godtools-remote-presentation-assistant/viewer.html'

var fb = new Firebase('https://blinding-fire-1510.firebaseio.com/');

$(document).ready(function() {
  var session = generate_session_guid();
  var url = 'http://knowgod.com/en/fourlaws/1/';

  $('#viewer_link').val(viewer_url + '?session=' + session);

  send_knowgod_url(session, url);
});
