const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

//global variable for the window
let mainWin;

// defining the actual window 
function createWindow(){
    // the size of the window and also can place icon for the window here
    mainWin = new BrowserWindow({width:800, Height:600})


    mainWin.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    // open devtools
    mainWin.webContents.openDevTools();

    mainWin.on('closed', () => {
        win = null
    })
}

// creates the actual window
app.on('ready', createWindow)

// closes all process
app.on('window-all-closed', () => {
    // for mac how to close
    if(process.platform !== 'darwin'){ // tests to see if apple
        app.quit 
    }
})