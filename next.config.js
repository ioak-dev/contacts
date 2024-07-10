const dotenv = require("dotenv");
const path = require("path");

if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: path.resolve(process.cwd(), ".env.production") });
} else {
  dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });
}

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
