const path = require('path')
const dotenv = require('dotenv')

dotenv

let envFile = '.env';
if (env.target) {
  envFile = `.env.${env.target}`;
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