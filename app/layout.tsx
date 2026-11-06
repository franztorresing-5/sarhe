import "./globals.css";

export const metadata = {
  title: "Sarhè Consultores",
  description: "Despacho Contable, Auditoría y Asesoría Legal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className="antialiased m-0 p-0 overflow-x-hidden bg-white dark:bg-[#070e1c] text-slate-900 dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}