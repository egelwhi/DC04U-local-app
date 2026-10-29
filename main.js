const { app, BrowserWindow, session } = require('electron');
const path = require('node:path');

const dc04uProducts = new Set([2179, 2180, 2186]);

function configureHidAccess() {
  session.defaultSession.setPermissionCheckHandler((_webContents, permission) => permission === 'hid');
  session.defaultSession.setDevicePermissionHandler(({ deviceType }) => deviceType === 'hid');
  session.defaultSession.on('select-hid-device', (event, details, callback) => {
    event.preventDefault();
    const device = details.deviceList.find(
      ({ vendorId, productId }) => vendorId === 1633 && dc04uProducts.has(productId)
    );
    callback(device?.deviceId);
  });
}

function createWindow() {
  const window = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 1024,
    minHeight: 700,
    backgroundColor: '#0a1223',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      webSecurity: false
    }
  });

  window.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(() => {
  configureHidAccess();
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
