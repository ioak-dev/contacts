const path = require('path')
const dotenv = require('dotenv')

let envFile = '.env';
if (process.env.ENVIRONMENT) {
  envFile = `.env.${process.env.ENVIRONMENT}`;
}
dotenv.config({
  path: path.join(__dirname, envFile),
});

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