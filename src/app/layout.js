import { Footer, MainLayout, Navbar } from "@/router";
import "./globals.css";

export const metadata = {
  title: "Stream Vibe",
  description: "Creating website streaming movie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black-6 text-white">
        <Navbar />
        <MainLayout>{children}</MainLayout>
        <Footer />
      </body>
    </html>
  );
}
