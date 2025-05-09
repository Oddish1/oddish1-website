import path from 'path';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    webpack(config) {
	config.resolve.alias = {
	    ...(config.resolve.alias || {}),
	    "@components": path.resolve(__dirname, "components"),
	};
    return config;
    },
};

export default nextConfig;
