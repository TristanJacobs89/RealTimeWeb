const express = require('express');
const Router = express.Router();

// Spotify Keys
const client_id                   = process.env.CLIENT_ID;
const client_secret               = process.env.CLIENT_SECRET;
const response_type               = process.env.RESPONSE_TYPE;
const grant_type                  = process.env.GRANT_TYPE;
const scope                       = process.env.SCOPE;
const redirect_uri                = process.env.REDIRECT_URI;

// Base Request URL
const base_URL = 'https://accounts.spotify.com/authorize/';
var request_url = base_URL + '?client_id=' + client_id + '&scope=' + scope + '&response_type=' + response_type + '&redirect_uri=' + redirect_uri;

Router.get('/', function(req, res) {
    res.render('index', {
        title: 'Tweetify',
        request_url: request_url
    });
});

module.exports = Router;