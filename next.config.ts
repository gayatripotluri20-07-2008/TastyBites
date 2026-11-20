import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "TastyBites";

const nextConfig: NextConfig = {
  output: "export",
  ...(isProd ? { basePath: `/${repositoryName}` } : {}),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
