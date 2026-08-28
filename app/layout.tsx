import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "İbin Elektronik | Mersin Uyducu, Televizyoncu ve Kamera Sistemleri",
  description: "Mersin Toroslar merkezli uydu servisi, televizyon tamiri ve güvenlik kamerası sistemleri. Erdal Usta: 0535 944 76 62.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
