
# Electron

### Installing Electron

1. Globally install Electron
```
npm install -g electron
```

2. in your project folder
```
npm init
```

3. downloads the electron module
```
npm install electron
```
3. for the brave ones that want to get the latest of latest might be buggy.
```
npm install electron@nightly
```

4. after setting up your app to run use
```
electron .
```

### Things Learned

*I learned that Electron uses js, css, html and renders all 3 in one. Its pretty awesome building applications with the same technologies used to build websites.*

- Main Process - Package.json main script. Creates "BrowserWindow" instances to run web pages.
*creates a window*

- Renderer Process - Each webpage runs its own isolated process called the "renderer process"
*creates mini items within the window.*

### Popular Things Built With Electron
- Atom
- Slack
to see more applications built with Electron. checkout 
[Electron](https://electron.atom.io/apps)


### Resources 

[Github Electron Quick Start](https://github.com/electron/electron-quick-start)

[Official Electron Docs](https://electronjs.org/docs)

[Youtube - *Traversy Media* system app start to finish](https://www.youtube.com/watch?v=mr9Mtm_TRpw)

## What I'm building
I want to build a todo list to learn the electron language. 

I invision an application that has 3 columns for different phases of the todo. I want to have a way to manage projects I'm working on and Electron being a desktop app seems a cool way to track the progress.

- [x] Create a github for ElectronApp