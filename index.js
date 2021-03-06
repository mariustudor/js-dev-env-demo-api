var express =  require('express');
var cors = require('cors');
const cool = require('cool-ascii-faces')

const app = express();
app.use(cors()); // enable cross origin resource sharing.

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.send('Hello World!')
});

app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob_pay_atention_this_is_from_heroku@gmail.com"},
    {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
    {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
  ]);
});

app.get('/cool', (req, res) => res.send(cool()));

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port')); 
});