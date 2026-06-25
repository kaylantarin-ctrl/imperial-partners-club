/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // builds static HTML/CSS/JS into ./out for cPanel & Netlify
  images: { unoptimized: true },
  trailingSlash: true,     // emits folder/index.html so static hosts route cleanly
};
export default nextConfig;
