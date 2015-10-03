var fb = new Firebase('https://blinding-fire-1510.firebaseio.com/');
var test = fb.set({
        "xyz": 
        {
            password: "test",
            html_content: "hello Sheldon"
        }
    });
var post_id = test.key();
alert(post_id);