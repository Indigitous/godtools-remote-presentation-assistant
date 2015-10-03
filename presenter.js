var Presenter = {};
var viewer_url = 'http://indigitous.github.io/godtools-remote-presentation-assistant/viewer.html'

$(document).ready(function() {
  var session = generate_session_guid();
  var url = 'http://knowgod.com/en/fourlaws/1/';

  Presenter.populate_dropdowns();

  $('#viewer_link').val(viewer_url + '?session=' + session);

  send_knowgod_url(session, url);
});
