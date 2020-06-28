const { remote } = require('electron');

document.getElementById('close').addEventListener('click', closeWin);
document.getElementById('min').addEventListener('click', miniWin);
document.getElementById('max').addEventListener('click', maxWin);

function closeWin(){
    var window = remote.getCurrentWindow()
    window.close();    
}

function miniWin(){
    var window = remote.getCurrentWindow()
    window.minimize();    
}

function maxWin(){
    var window = remote.getCurrentWindow()
    if(!(window.isMaximized())){
        window.maximize();
    }else{
        window.unmaximize();
    }    
}