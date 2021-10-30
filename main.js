const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });
  win.loadURL("http://localhost:8080");
  win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();
});