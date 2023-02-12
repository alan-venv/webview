const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 700,
    height: 700,
    x: 1900,
    y: 0,
	  frame: false,
    autoHideMenuBar: true,
    alwaysOnTop: true,
    icon: "./tux.png",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.webContents.insertCSS(
    "body::-webkit-scrollbar { display: none; }"
    // "body::-webkit-scrollbar { display: none; } h1 { -webkit-app-region: drag;}"
  );

  mainWindow.loadURL("http://localhost:5173");

  mainWindow.webContents.on("did-finish-load", () => {
    mainWindow.setTitle("");
  });
};

// app.on("page-title-updated", (e, x, n) => {
//   e.preventDefault();
// });

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
