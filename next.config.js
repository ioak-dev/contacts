const path = require('path')
 
module.exports = {
  trailingSlash: true,
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  output: "export",
  apps: [
    {
      name: 'next-app',
      script: 'serve',
      args: 'out -l 3000',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
  // reactStrictMode: false
}