module.exports = {
  packagerConfig: {},
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-deb",
      platforms: ["linux"],
      config: {
        options: {
          name: "Webview",
          productName: "Webview",
          genericName: "Webview",
          description: "Webview",
          productDescription: "Simple webview built in Electron",
          maintainer: "dev-venv",
          homepage: "https://github.com/dev-venv/webview",
          icon: "./icon.png",
          categories: ["Development"],
        },
      },
    },
    {
      name: "@electron-forge/maker-squirrel",
      platforms: ["windows"],
      config: {},
    },
  ],
};
