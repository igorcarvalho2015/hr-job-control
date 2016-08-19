const {app, BrowserWindow} = require('electron');

app.on('ready', function() {
  var mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // frame: false,
    center: true
  });
  mainWindow.maximize();
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.webContents.openDevTools();
  mainWindow.setMenu(null);
});

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
      app.quit();
    }
 });
