#!/usr/bin/env nodejs
/* restserver.js 
 * npm i express
 * npm i helmet
 * NodeJS Restful Server, 03-2021
 * Klaus Ruhland, HSZG, Betriebssysteme II, Web Engineering II
 * Test with curl
 * 1.) curl  "http://localhost:8000/api/users?id=4&token=sdfa3&geo=us"
 * 2.) curl http://localhost:8000/api/test/12345
 * 3.) curl curl -d "param1=value1&param2=value2" -X POST http://localhost:8000/api/users
 */


const express = require('express');
const helmet = require('helmet');

const app = express();
const port = process.env.PORT || 8000;

// initializations
app.use(helmet());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing Examples
// http GET: http://localhost:8000/api/users?id=4&token=sdfa3&geo=us
// Paremeter through ? in url 
app.get('/api/users', function(req, res) {
    res.json(req.query);
});
// http GET: http://localhost:8000/api/test/12345
// Parameter through path
app.get('/api/test/:version', function(req, res) {
    res.json(req.params);
});
// http POST: http://localhost:8000/api/users
app.post('/api/users', function(req, res) {
    res.json(req.body);
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){ res.send('file not found', 404); });
app.post('*', function(req, res){ res.send('file not found', 404); });

// Running the server
app.listen(port, () => {
      console.log(`http://localhost:${port}`);
})