/**
 * 视频路径：支持本地 /videos/ 或阿里云 OSS
 * 设置 NEXT_PUBLIC_VIDEO_BASE_URL 后自动使用 OSS 地址
 */
export function getVideoUrl(localPath: string): string {
  const base = process.env.NEXT_PUBLIC_VIDEO_BASE_URL;
  if (!base) return localPath;
  const name = localPath.replace(/^\/videos\//, "").replace(/^\//, "");
  const url = base.endsWith("/") ? `${base}${name}` : `${base}/${name}`;
  return url;
}
