var Presenter = {};
var session_id = get_parameter_by_name('session_id');

if(typeof(session_id) != 'string' || session_id.length == 0) {
  window.location = 'presenter.html?session_id=' + generate_session_guid();
}

var viewer_url = 'http://indigitous.github.io/godtools-remote-presentation-assistant/viewer.html';

$(document).ready(function() {
  get_session_data().then(Presenter.initialize);
});
