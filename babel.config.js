module.exports = (api) => {
  const plugins = [
    '@babel/plugin-transform-runtime',
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css' //  set true will import less
      },
      'antd'
    ]
  ]

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          corejs: 3.29,
          useBuiltIns: 'usage'
        }
      ],
      [
        '@babel/preset-react',
        {
          runtime: 'automatic' //  upgrade to the new JSX transform
        }
      ],
      '@babel/preset-typescript'
    ],
    plugins: api.env('development') ? [...plugins, 'react-refresh/babel'] : plugins
  }
}
