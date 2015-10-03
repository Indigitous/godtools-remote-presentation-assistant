var Presenter = {};
var session_id = get_parameter_by_name('session_id');

if(typeof(session_id) != 'string' || session_id.length == 0) {
  window.location = 'presenter.html?session_id=' + generate_session_guid();
}

var viewer_url = 'http://indigitous.github.io/godtools-remote-presentation-assistant/viewer.html'

$(document).ready(function() {
  Presenter.initialize();

  viewer_url = viewer_url + '?session_id=' + session_id;
  $('#viewer_link').val(viewer_url);

  new Clipboard('#copy_viewer_link_button');

  $('<iframe src="' + viewer_url + '" height="900" width="768" frameborder="0" allowfullscreen=""></iframe>').appendTo($('html'));
});
