import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EXT Lighting",
    short_name: "EXT Lighting",
    description: "Sacramento's trusted source for permanent exterior LED lighting",
    start_url: "/",
    display: "standalone",
    background_color: "#1a1a1a",
    theme_color: "#b8860b",
    icons: [
      {
        src: "/api/icon-192",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/api/icon-512",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
