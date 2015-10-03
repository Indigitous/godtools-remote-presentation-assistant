$.get("http://knowgod.com/en/kgp/1").success(function(response) {

  // Fetch html
  var knowgod_html = $(response).find('article').first();
  $('#view').html(knowgod_html);

  // Fetch css
  var knowgod_css = response.match(/href=\"(\/css\/main([^\s]*.css))\"/)[1];
  $('<link href="http://knowgod.com' + knowgod_css + '" rel="stylesheet">').prependTo('#view');

});
