module.exports = function override(config) {
  config.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: "javascript/auto",
    resolve: {
      fullySpecified: false
    }
  });

  return config;
}
