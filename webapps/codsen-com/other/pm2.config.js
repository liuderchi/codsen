module.exports = {
  apps: [
    {
      name: 'Server',
      script: [
        'node',
        '--inspect',
        '--require ../../node_modules/dotenv/config',
        './index.js',
      ]
        .filter(Boolean)
        .join(' '),
      watch: ['./index.js', './server/**/*.ts', './.env'],
      env: {
        NODE_ENV: process.env.NODE_ENV ?? 'development',
        ENABLE_TEST_ROUTES: process.env.ENABLE_TEST_ROUTES ?? true,
        RUNNING_E2E: process.env.RUNNING_E2E,
        FORCE_COLOR: '1',
      },
    },
    {
      name: 'Remix',
      script: 'remix watch',
      ignore_watch: ['.'],
      env: {
        NODE_ENV: process.env.NODE_ENV ?? 'development',
        ENABLE_TEST_ROUTES: process.env.ENABLE_TEST_ROUTES ?? true,
        RUNNING_E2E: process.env.RUNNING_E2E,
        FORCE_COLOR: '1',
      },
    },
    {
      name: 'SASS',
      script: 'sass --load-path ../../node_modules styles:app/styles app/components',
      autorestart: false,
      watch: [
        './app/**/*.ts',
        './app/**/*.tsx',
        './styles/**/*.scss',
      ],
      env: {
        NODE_ENV: process.env.NODE_ENV ?? 'development',
        FORCE_COLOR: '1',
      },
    },
  ],
}