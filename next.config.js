const dotenv = require("dotenv");
const path = require("path");

// Load environment variables from .env.production
dotenv.config({ path: path.resolve(process.cwd(), ".env.production") });

module.exports = {
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
    NODE_ENV: process.env.NODE_ENV,
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
