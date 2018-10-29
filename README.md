
# Electron

### Installing Electron

Globally install Electron
```
npm install -g electron
```

in your project folder
```
npm init
```

downloads the electron module
```
npm install electron -save
```
for the brave ones that want to get the latest of latest might be buggy.
```
npm install electron@nightly
```

after setting up your app to run use
```
electron .
```

### Quick Start in Electron

https://github.com/electron/electron-quick-start

### Things Learned

- Main Process - Package.json main script. Creates "BrowserWindow" instances to run web pages.

simple english creates a window

- Renderer Process - Each webpage runs its own isolated process called the "renderer process"

simple english creates mini items within the window.

### Popular Things Built With Electron
- Atom
- Slack
to see more applications built with Electron. checkout 

https://electron.atom.io/apps

### Resources 

[Github Electron Quick Start](https://github.com/electron/electron-quick-start)

[Official Electron Docs](https://electronjs.org/docs)

[Youtube - *Traversy Media* system app start to finish](https://www.youtube.com/watch?v=mr9Mtm_TRpw)