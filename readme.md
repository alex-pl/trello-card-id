[![Build Status](https://travis-ci.org/alex-pl/trello-card-id.svg?branch=master)](https://travis-ci.org/alex-pl/trello-card-id)

# Trello Card ID

Shows well formatted Trello card IDs for use in commits and for other quick references. Copies ID by clicking on it.

## Installation
* [Firefox Desktop](https://addons.mozilla.org/firefox/addon/trello-card-id/)
* [Firefox for Android](https://addons.mozilla.org/android/addon/trello-card-id/)


## Screenshot

![Screenshot of the extension running in Firefox.](https://raw.githubusercontent.com/alex-pl/trello-card-id/master/images/trello-card-id-example.png)


## Development

### Set up Environment

1.  Install a current version of [NodeJS](https://nodejs.org/en/download/).
2.  Install Gulp

    ```Shell
    npm install -g gulp
    ```
3. Install dependencies

    ```Shell
    npm install
    ```

### Build

All builds are created inside the `dist/` directory.

Build all Add-on versions:
```Shell
gulp
```

Build the Firefox extension (Desktop and Android):
```Shell
gulp firefox
```

Create the files for Chorme, Edge and Opera:
```Shell
gulp chrome
```


### Browser-Specific Files

Not all browsers are able to use the same files.
The right file for every browser is selected during the build process.

* manifest.firefox.json => Firefox Desktop, Firefox Android
* manifest.chrome.json => Chrome, Edge, Opera
