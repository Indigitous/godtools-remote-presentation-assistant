var fb = new Firebase('https://blinding-fire-1510.firebaseio.com/');
var session = fb.child('xyz');
session.on('value', function(snapshot) {
    var session_data = snapshot.val();
    $('#viewer_content').html(session_data.html_content);
})