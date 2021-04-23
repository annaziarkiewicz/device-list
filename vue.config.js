module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/scss/style.scss";`
      }
    }
  }
}
