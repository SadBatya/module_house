import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `@use "variables" as *; @use "mixins" as *;`,
    includePaths: [path.join(__dirname, 'src/styles')],
  },
};

export default nextConfig;
