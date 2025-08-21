const { app, BrowserWindow } = require('electron');
const { ipcMain } = require("electron");
const { ipcMain } = require("electron");

const url = require('url');
const path = require('path');
// Creates a secure Electron window titled 'WorkFaster' with 400x400 dimensions and security features
function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'WorkFaster',
        width: 400,
        height: 400,
        frame: false,
        titleBarStyle: 'hidden',
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            contextIsolation: true,
            nodeIntegration: false,
        }
    })
};

