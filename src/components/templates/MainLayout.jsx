export function MainLayout({ children }) {
  return (
    <>
      <main className="min-h-[80vh] flex flex-col gap-40 ">{children}</main>
    </>
  );
}
