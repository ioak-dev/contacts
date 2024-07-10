module.exports = {
    apps: [
      {
        name: 'next-app',
        script: 'serve',
        args: 'out -l 7001', // Change 'out' to your build directory if different
        env: {
          NODE_ENV: 'production',
        //   PORT: 7001
        }
      }
    ]
  };
  