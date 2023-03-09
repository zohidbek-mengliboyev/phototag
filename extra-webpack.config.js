module.exports = {
  resolve: {
    fallback: {
      fs: "empty",
      Buffer: false,
      http: false, //"empty",
      https: false, //"empty",
      zlib: false //"empty"
    }
  },
  module: {
    unknownContextCritical: false
  }
};
