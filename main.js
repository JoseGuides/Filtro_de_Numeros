
const { app, BrowserWindow } = require("electron");

function criarJanela() {
    const janela = new BrowserWindow({
        width: 600,
        height: 400,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    janela.loadFile("index.html");
}

app.whenReady().then(criarJanela);