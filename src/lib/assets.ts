const assets = import.meta.glob<string>(
  "../assets/{logos,team}/*.{png,jpg,jpeg,webp,svg,avif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

export function assetUrl(folder: "logos" | "team", filename: string) {
  return assets[`../assets/${folder}/${filename}`];
}
