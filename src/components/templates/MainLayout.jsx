import { Navbar } from "@/router";
import { Footer } from "./Footer";

export function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
