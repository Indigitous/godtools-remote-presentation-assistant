var fb = new Firebase('https://blinding-fire-1510.firebaseio.com/');
var test = fb.set({
  "xyz":
  {
    password: "test",
    html_content: "hello Sheldon",
    knowgod_url: "http://knowgod.com/en/kgp/1/"
  }
});

function send_knowgod_url(url) {
  var test = fb.set({
    "xyz":
    {
      knowgod_url: url
    }
  });
}
