var fs = require('fs');

var i;

for(i = 0; i <= 5; i++)
{

  var path = "assets/";

  var file = path + "sync-txt-" + i + ".txt";

  var out = fs.writeFileSync(file, "Hello Node.js!")

  console.log(out)

}

for(i = 0; i <= 5; i++)
{

  var path = "assets/";

  var file = path + "asyns-txt-" + i + ".txt";

  fs.writeFile(file, "Hello Node.js!", function(err, out)
  {
    console.log(out);
  });

}

