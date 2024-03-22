module.exports = {
    chainWebpack: config => {
      config.module
        .rule('images')
          .set('parser', {
            dataUrlCondition: {
              maxSize: 0 // 0KiB
            }
          })
    }
}