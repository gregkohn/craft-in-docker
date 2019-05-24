module.exports = {
  html: false,
  static: false,
  svgSprite: false,
  ghPages: false,
  fonts: true,
  images: true,
  javascripts: {
    entry: {
      // files paths are relative to
      // javascripts.dest in path-config.json
      app: './app.js',
      parts: './parts.js'
    },
    publicPath: './assets/js',
    babel: {
      presets: ['env'],
      plugins: ['transform-class-properties']
    }
  },
  stylesheets: true
}