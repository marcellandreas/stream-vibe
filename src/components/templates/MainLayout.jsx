import { Footer, Navbar } from "@/router";

export function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh] flex flex-col gap-40 ">{children}</main>
      <Footer />
    </>
  );
}
