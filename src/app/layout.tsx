
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Center from "../components/Center";

export const metadata: Metadata = {
  title: "Hafiz Academy",
  description: "Unlock Quranic knowledge with expert-led courses and a vibrant community.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: '#181c2a', fontFamily: 'Segoe UI, Roboto, Arial, sans-serif' }}>
          <Header />
          <Center>
            <main style={{ minHeight: "100vh", width: "100%", padding: 0, margin: 0 }}>{children}</main>
          </Center>
          <Footer />
      </body>
    </html>
  );
}
