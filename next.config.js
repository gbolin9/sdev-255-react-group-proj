/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/sdev-255-react-group-proj',
  assetPrefix: '/sdev-255-react-group-proj/',
  images: {
    unoptimized: true,
  },
  // reactCompiler: true, // Optional: Enable if using the new React Compiler
};

export default nextConfig;
