const path = require("path");
const { app, BrowserWindow, Menu, MenuItem } = require("electron");

if (require("electron-squirrel-startup")) app.quit();

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 600, // 600
    height: 400, // 400
    x: 0, // Display width - app width - gap (1920-600-10=1310)
    y: 0, // gap (10)
    frame: false,
    fullscreenable: false,
    autoHideMenuBar: true,
    alwaysOnTop: true,
    icon: "./icon.png",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.webContents.insertCSS(
    "body::-webkit-scrollbar { display: none; }"
    // "body::-webkit-scrollbar { display: none; } h1 { -webkit-app-region: drag;}"
  );

  mainWindow.loadFile("./index.html");

  mainWindow.webContents.on("did-finish-load", () => {
    mainWindow.setTitle("Webview");
  });

  let menu = new Menu();
  let help = new MenuItem({
    label: "Help",
    submenu: [
      {
        role: "Navigate back",
        accelerator: "Ctrl+Z",
        click: () => {
          mainWindow.webContents.goBack();
        },
      },
      {
        role: "Navigate forward",
        accelerator: "Ctrl+Y",
        click: () => {
          mainWindow.webContents.goForward();
        },
      },
      {
        role: "Reload page",
        accelerator: "Ctrl+R",
        click: () => {
          mainWindow.reload();
        },
      },
      {
        role: "Navigate to home",
        accelerator: "Ctrl+H",
        click: () => {
          mainWindow.loadFile("./index.html");
        },
      },
      {
        role: "Close",
        accelerator: "Ctrl+E",
        click: () => {
          app.quit();
        },
      },
    ],
  });
  menu.append(help);
  Menu.setApplicationMenu(menu);
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("page-title-updated", (e, x, n) => {
  e.preventDefault();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
