function load_view_from_knowgod(url, additional_css) {
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

function generate_session_guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {var r = Math.random()*16|0,v=c=='x'?r:r&0x3|0x8;return v.toString(16);});
}

function send_knowgod_url(session, url) {
  var test = fb.set({
    session: {
      knowgod_url: url
    }
  });
}


