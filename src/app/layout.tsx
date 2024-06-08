import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nextjs 템플릿",
  description: "개인적으로 사용할 템플릿인데 가져가셔도 됩니다!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
