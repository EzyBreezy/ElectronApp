const { app, BrowserWindow, Menu, Tray } = require("electron");


//global variable for the window
let mainWin;

// defining the actual window
function createWindow() {
  // the size of the window and also can place icon for the window here
  mainWin = new BrowserWindow({ width: 800, Height: 600 });

  // Load html into window
  mainWin.loadFile("index.html");

  // open devtools aka F12
  mainWin.webContents.openDevTools();

  // process for when the window is closed.
  mainWin.on("closed", () => {
    win = null;
  });

  // build from menu template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // insert menu
  Menu.setApplicationMenu(mainMenu);
  //Create menu array of objects

}

const mainMenuTemplate = [
    {
      label: "File"
    },
    {
      label: "Todo"
    }
  ];

// creates the actual window
app.on("ready", createWindow); // app.on(ready) function is where you pass api within the same function

// Quit when all the windows are closed.
app.on("window-all-closed", () => {
  // for mac how to close
  if (process.platform !== "darwin") {
    // tests to see if apple
    app.quit();
  }
});

// creates another window when clicked on from bottom bar.
app.on("activate", () => {
  if (mainWin === null) {
    createWindow();
  }
});



