import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Optional configuration for OpenNext Cloudflare adapter
export default defineCloudflareConfig({
  // Uncomment to use R2 for incremental cache (recommended for production)
  // import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";
  // incrementalCache: r2IncrementalCache,
  
  // Uncomment to configure custom image optimization
  // imageOptimization: {
  //   arch: "x64",
  // },
});