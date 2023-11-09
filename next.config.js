import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: {
    webpackBuildWorker: true,
  },
};

export default withVanillaExtract(config);
