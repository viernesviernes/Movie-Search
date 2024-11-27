const express = require('express');
const axios = require('axios');
require('dotenv').config({ path: '../.env' });

const app = express();

app.listen(3000, console.log("Port 3000 is active."));

app.get('/api/search/:search', (req, res) => {
    
    let search = req.params['search'];
    
    axios({
        method: 'get',
        url: `https://www.omdbapi.com/?apikey=${process.env.APIKEY}&s=${search}`
        })
        .then((response) => {
            res.json(response.data);
        });
    
});

app.get('/api/search/:search/page/:page', (req, res) => {
    let search = req.params['search'];
    let page = req.params['page'];
    
    axios({
        method: 'get',
        url: `https://www.omdbapi.com/?apikey=${process.env.APIKEY}&s=${search}&page=${page}`
        })
        .then((response) => {
            res.json(response.data);
        });
});

app.get('/api/id/:id', (req, res) => {

    let search = req.params['id'];
    
    axios({
        method: 'get',
        url: `https://www.omdbapi.com/?apikey=${process.env.APIKEY}&i=tt0082971`
        })
        .then((response) => {
            res.json(response.data);
        });

});