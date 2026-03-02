/**
 * 强制将图片路径转为绝对路径，避免 404
 * 确保路径为 /projects/project-01/01.jpg 格式，而非相对路径 01.jpg
 */
export function ensureAbsoluteImageSrc(src: string): string {
  if (!src || typeof src !== "string") return src;
  if (src.startsWith("data:")) return src;
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  if (src.startsWith("/public")) return src.replace(/^\/public/, "");
  const base =
    (typeof process !== "undefined" &&
      process.env?.NEXT_PUBLIC_BASE_PATH) ||
    "";
  const path = src.startsWith("/") ? src : `/${src}`;
  return base + path;
}
