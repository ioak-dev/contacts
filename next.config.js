const path = require('path')
const dotenv = require('dotenv')

dotenv.config({ path: `${process.env.ENVIRONMENT}` });

module.exports = {
  trailingSlash: true,
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // output: "export",
  // reactStrictMode: false
}