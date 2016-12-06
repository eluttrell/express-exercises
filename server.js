const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.use(bodyParser.json())

app.get('/name/:name/age/:age', function(req, res) {
  var age = req.params.age;
  var year = new Date().getFullYear();
  var name = req.params.name;
  var bYear = year - age;
  res.render('hello.hbs', {
    title: 'Hello',
    name: name,
    year: bYear
  });
  // res.json({
  //   message: 'Hello ' + name + '!\nYou were born in ' + bYear + '!'
  // });
});

app.listen(1337, function() {
  console.log("1337");
});
