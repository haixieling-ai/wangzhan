import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Noto_Sans_SC } from "next/font/google";
import { MeteorBackground } from "@/components/MeteorBackground";
import { BackgroundLayers } from "@/components/BackgroundLayers";
import { CustomCursor } from "@/components/CustomCursor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "谢裕琪 - 3D 视觉设计师 & AI 内容设计师",
  description: "谢裕琪的个人作品集",
  other: {
    "theme-color": "#000000",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="bg-transparent" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${notoSansSC.variable} antialiased bg-transparent`}
        suppressHydrationWarning
      >
        <BackgroundLayers />
        <MeteorBackground />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
