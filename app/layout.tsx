import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import MainFooter from "@/components/footer";

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Marketeq-digital",
  description: "Marketeq-digital",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={noto.className}>{children}</body>
        <MainFooter />
      </StyledComponentsRegistry>
    </html>
  );
}
