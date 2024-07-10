const path = require('path')
 
module.exports = {
  trailingSlash: true,
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  output: "export"
  // reactStrictMode: false
}