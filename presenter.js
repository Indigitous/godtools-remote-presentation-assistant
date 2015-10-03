var fb = new Firebase('https://blinding-fire-1510.firebaseio.com/');
var test = fb.set({
  "xyz":
  {
    password: "test",
    html_content: "hello Sheldon",
    knowgod_url: "http://knowgod.com/en/kgp/1/"
  }
});
