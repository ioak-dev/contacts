const path = require("path");

module.exports = {
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  trailingSlash: true,
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  // output: "export",
  // reactStrictMode: false
};
