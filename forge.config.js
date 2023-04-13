module.exports = {
  packagerConfig: {},
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          name: 'Webview',
          productName: 'Webview',
          genericName: 'Webview',
          description: 'Webview',
          productDescription: 'Simple webview built in Electron',
          maintainer: 'Alan',
          homepage: 'https://github.com/alan-venv/web-view',
          icon: "./icon.png",
          categories: ["Development"]
        }
      },
    }
  ],
};
