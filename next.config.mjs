import path from "path";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), "styles")],
  },
  images: {
    domains: ["test.zanapo.cz", "zanapo.cz", "zanapo-test.webmexplus.cz"],
  },
};

export default nextConfig;
