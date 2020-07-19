const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, 'build');
const publicPathHealthApp = path.join(__dirname, 'health-app-build');
const publicPathStockTrackerApp = path.join(__dirname, 'stock-tracker-build');

const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('/', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});

// app.get('/health-app', (req, res) => {
//    res.sendFile(path.join(publicPathHealthApp, 'index.html'));
// });

// app.get('/stock-tracker-app', (req, res) => {
//    res.sendFile(path.join(publicPathStockTrackerApp, 'index.html'));
// });

// app.get('/true-blogger-app', (req, res) => {
//    res.sendFile(path.join(publicPathStockTrackerApp, 'index.html'));
// });

app.listen(port, (req, res) => {
   console.log('Server is up! on, '+ port);
});