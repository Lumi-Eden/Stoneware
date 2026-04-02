// --- ELECTRON ---
const { globalShortcut } = require('electron');
const { app, BrowserWindow, Menu, ipcMain } = require('electron/main');
const { url } = require('node:inspector');
const path = require('node:path')

let printWin

// WINDOWS
function createWindow () {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    icon: './tombstone.ico',
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.maximize();
  win.show()

  win.loadFile('index.html')

  // win.webContents.openDevTools() -- dev tools on start

  // --- Print Functionality ---
  const contextMenu = [
    {
      label: 'File',
      submenu: [
        { // Page reload - for now only on main page
          label: 'Obnovit',
          accelerator: 'CmdOrCtrl+R', 
          click: () => {
            win.reload();
          }
        },
        { // Page print
          label: 'Tisk',
          accelerator: 'CmdOrCtrl+P', // Handles Ctrl+P (Win/Linux) and Cmd+P (Mac)
          click: () => {
            win.webContents.print();
          }
        },
        {
          label: 'Celá obrazovka',
          accelerator: 'F11',
          click: () => {
            win.setFullScreen(!win.isFullScreen());
          }
        },
        { type: 'separator' },
        {
          label: 'Ukončit',
          accelerator: 'CmdOrCtrl+Q',
          click: () => {
            app.quit();
          }
        }
      ]
    },
    {
      label: 'Edit', // Standard Edit menu (Undo/Copy/Paste)
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'selectAll' }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(contextMenu);
  Menu.setApplicationMenu(menu);
}

ipcMain.on("open-print-page", (e, dataString) => {
  if (printWin) {
    printWin.focus();
    return
  }

  printWin = new BrowserWindow({
    width: 1000,
    height: 1280,
    icon: './tombstone.ico',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  const printFilePath = path.join(app.getAppPath(), 'print.html')
  printWin.loadFile(printFilePath)

  // Pass data as URL query parameter
  printWin.loadFile(printFilePath, {
    query: { data: dataString }
  })

  printWin.on('closed', () => {
    printWin = null
  })
});

// START AND CLOSE
app.whenReady().then(() => {
  createWindow()

  globalShortcut.register('CmdOrCtrl+P', () => {
    const focusedWindow = BrowserWindow.getFocusedWindow();

    if (focusedWindow) {
      focusedWindow.webContents.print({ silent: false })
    }
  })

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

