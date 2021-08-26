const express = require('express');
const path = require('path');

const app = express();


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../styles.css'))
})

app.get('/animations.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../animations.css'))
})

app.get('/index.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.js'))
})


const port = process.env.PORT || 4005;


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
