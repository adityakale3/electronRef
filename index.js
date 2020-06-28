const { app, BrowserWindow, globalShortcut } = require('electron');
const url = require('url');
const path = require('path');

var win;

function boot(){
    win = new BrowserWindow({
        width:800,
        height:300,
        frame:false,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    });
    win.loadURL(url.format({
        pathname: 'index.html',
        slashes: true
    }));
    win.on('close', () => {
        win = null;
    });


    // Global ShortCuts
    globalShortcut.register('CommandOrControl+M', () => {
        if(!(win.isMaximized())){
            win.maximize();
        }else{
            win.unmaximize();
        }   
    });
}

app.on('ready', boot);
