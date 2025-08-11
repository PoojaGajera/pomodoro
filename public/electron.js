const { app, BrowserWindow } = require('electron');
const { ipcMain } = require("electron");
const { ipcMain } = require("electron");

const url = require('url');
const path = require('path');

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'WorkFaster',
        width: 400,
        height: 400,
        frame: false,
        titleBarStyle: 'hidden',
        webPreferences: {
            preload: path.join(__dirname, "preload.js"), // Path to preload script
            contextIsolation: true,   // Keeps context isolated for security
            nodeIntegration: false,   // Disables Node.js in the renderer (security best practice)
        }
    });