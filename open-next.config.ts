import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Optional configuration for OpenNext Cloudflare adapter
export default defineCloudflareConfig({
  // Uncomment to use R2 for incremental cache (recommended for production)
  // incrementalCache: r2IncrementalCache,
  
  // Uncomment to configure custom image optimization
  // imageOptimization: {
  //   arch: "x64",
  // },

  // Configure build output
  buildOutputPath: ".open-next",
  
  // Configure app path
  appPath: ".",
});