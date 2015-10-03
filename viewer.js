$.get("http://knowgod.com/en/kgp/1").success(function(response) {
  var view_content = $(response).find('article').first();
  $('#view').html(view_content);
});
