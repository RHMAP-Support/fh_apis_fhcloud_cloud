var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

function cloudCallsRoute() {
  var cloudCalls = new express.Router();
  cloudCalls.use(cors());
  cloudCalls.use(bodyParser());


  // GET REST endpoint - query params may or may not be populated
  cloudCalls.get('/', function(req, res) {
    console.log(new Date(), 'In cloudCalls route GET / req.query=', req.query);
    //console.log(req);

    res.json({msg: 'Hello from the cloudcalls GET function.  You passed ' + req.query.query + ' as a query.'});
  });

  cloudCalls.post('/', function(req, res) {
    console.log(new Date(), 'In cloudCalls route POST / req.body=', req.body);

    res.json({msg: 'Hello from the cloudcalls POST function.  You passed ' + JSON.stringify(req.body) + ' in the body of this request.'});
  });

  cloudCalls.put('/', function(req, res) {
    console.log(new Date(), 'In cloudCalls route PUT / req.body=', req.body);

    res.json({msg: 'Hello from the cloudcalls PUT function.  You passed ' + JSON.stringify(req.body) + ' in the body of this request.'});
  });

  cloudCalls.patch('/', function(req, res) {
    console.log(new Date(), 'In cloudCalls route PATCH / req.body=', req.body);

    res.json({msg: 'Hello from the cloudcalls PATCH function.  You passed ' + JSON.stringify(req.body) + ' in the body of this request.'});
  });

  cloudCalls.delete('/', function(req, res) {
    console.log(new Date(), 'In cloudCalls route DELETE / req.body=', req.body);

    res.json({msg: 'Hello from the cloudcalls DELETE function.  You passed ' + JSON.stringify(req.body) + ' in the body of this request.'});
  });

  cloudCalls.options('/', function(req, res) {
    console.log(new Date(), 'In cloudCalls route OPTIONS / req.body=', req.body);

    res.json({msg : 'Hello from the cloudcalls OPTIONS function.  You passed ' + JSON.stringify(req.body) + ' in the body of this request.'});
  });

  cloudCalls.head('/', function(req, res) {
    console.log(new Date(), 'In cloudCalls route HEAD / req.body=', req.body);

    res.json({msg : 'Hello from the cloudcalls HEAD function.  You passed ' + JSON.stringify(req.body) + ' in the body of this request.'});
  });

  return cloudCalls;
}

module.exports = cloudCallsRoute;
