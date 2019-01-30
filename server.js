const express = require('express');
const app = require('app');

app.get('/', (req, res) => {
    res.send('<h1>This is working!</h1>');
});

app.listen(3001, () => {
    console.log('The app is running on localhost:3001')
});