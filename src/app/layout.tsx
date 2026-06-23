import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skippi",
  description: "A reimagined website of SHARK TANK BRAND.",
  icons: {
    icon: "https://skippi.in/cdn/shop/files/Skippi_Logo_3674b87f-4b01-41f4-9f27-ca3cae7f448a.png?v=1684873411&width=130",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
