import "./globals.css";

export const metadata = {
  title: 'Sarhè Consultores | Asesoría Fiscal y Legal',
  description: 'Despacho de asesoría fiscal, contable y legal para corporativos.',
  openGraph: {
    title: 'Sarhè Consultores | Asesoría Fiscal y Legal',
    description: 'Despacho de asesoría fiscal, contable y legal para corporativos. Inicie su consulta hoy.',
    url: 'https://sarheconsultoresmx.com',
    siteName: 'Sarhè Consultores',
    images: [
      {
        url: '/sarhe.webp', // Cambia esto por la ruta de tu nueva imagen
        width: 1200,
        height: 630,
        alt: 'Imagen representativa de Sarhè Consultores',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
}
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

