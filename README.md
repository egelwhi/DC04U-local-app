# ! This is fully vibe coded, Please be aware !
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

# DC04U Local App

A standalone Electron wrapper for iBasso DC04U control-panel frontend. The packaged frontend is loaded from local files.

# Why making this project?

Currently, the web panel for iBasso device is very slow, Largest Contentful Paint (LCP) can up to 80 seconds. To solve this problem, I decide to vibe something out, and make a local app for iBasso DC04U. This project is fully vibe coded, Please be aware !

## Requirements

- Node.js and npm

The repository includes an Electron dependency in `package.json`. Run the install step once after cloning or downloading the project.

## Start the app

From PowerShell:

```powershell
npm install
npm start
```

Or double-click `Run DC04U Local App.bat` from the project folder. The batch file changes to its own directory and runs the same Electron start command.

The app opens on the DC04U device screen. The local wrapper removes sign-in, login, and registration controls from the restored frontend.

## Included local features

- Loads the frontend directly from `index.html`.
- Opens with the DC04U route selected: `#/device/DC04U`.
- Provides Electron HID permission handling for supported DC04U product IDs.
- Adds a dark/light theme toggle.
- Allows local replacement of displayed images through the image customization tools.
- Stores theme and image replacements in the app's local browser storage.

## Important limitations

This project is a frontend wrapper, not a complete replacement for the iBasso service or device software:

- Features that depend on the iBasso web API still require access to that API.
- The project does not implement a new USB protocol, firmware updater, or backend service.
- Local image replacements and theme preferences are stored on the current machine and are not committed to the repository.
- The original restored frontend is kept as-is; the wrapper behavior is added by `local-overrides.js`.

## Project layout

| File | Purpose |
| --- | --- |
| `main.js` | Creates the Electron window and configures HID permissions. |
| `index.html` | Loads the restored frontend bundle. |
| `local-overrides.js` | Sets the initial route, removes auth controls, and adds local customization tools. |
| `assets/` | Compiled JavaScript and CSS frontend bundles. |
| `images/` | Frontend image assets. |
| `Run DC04U Local App.bat` | Windows shortcut for starting the app. |

## Troubleshooting

### The app does not start

Run the following from the project directory and confirm that npm is available:

```powershell
node --version
npm --version
npm install
npm start
```

### The device is not detected

Connect the DC04U before opening the app, close other applications that may be using the device, and reopen the app. The Electron wrapper only auto-selects supported iBasso DC04U HID product IDs; it does not install device drivers.

### API-backed controls do not work

Check network access to the iBasso web API. The app can load its interface locally, but local loading does not make remote API features available offline.
