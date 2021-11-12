module.exports = function (api) {
  process.env.NODE_ENV === "development" ? api.cache(false) : api.cache(true);
  const presets = [
    [
      '@babel/preset-env',
      { targets: { node: true }, modules: 'commonjs' }
    ],
    "@babel/preset-typescript",
  ];
  const plugins = ['@babel/plugin-syntax-dynamic-import'];
  return {
    presets,
    plugins,
  };
};
