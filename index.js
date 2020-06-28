const { app, BrowserWindow, BrowserView } = require('electron');
const url = require('url');
const path = require('path');

var win;

function boot(){
    win = new BrowserWindow();
    win.loadURL(url.format({
        pathname: 'index.html',
        slashes: true
    }))
}

app.on('ready', boot);
