const express = require('express');
const axios = require('axios');
require('dotenv').config({ path: '../.env' });
const cors = require('cors');

const app = express();

app.use(cors());

app.listen(3000, console.log("Port 3000 is active."));

app.get('/api/search', (req, res) => {

    const { key, title, page } = req.query;

    let omdbURL = `https://www.omdbapi.com/?apikey=${process.env.APIKEY}&s=${title}${page ? `&page=${page}` : ""}`

    console.log(omdbURL);

    if (key === process.env.BACKENDKEY) {
        axios({
            method: 'get',
            url: omdbURL
            })
            .then((response) => {
                res.json(response.data);
            });
    } else {{
        res.status(400);
    }}
    
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