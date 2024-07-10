module.exports = {
    apps: [
      {
        name: 'next-app',
        script: 'serve',
        args: 'out -l 3000',
        env: {
          NODE_ENV: 'production',
          PORT: 7001
        }
      }
    ]
  };
  