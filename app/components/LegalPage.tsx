import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { LEGAL, hayDatosPendientes } from "../lib/legal";

const LINKS = [
  { href: "/aviso-de-privacidad", label: "Aviso de Privacidad" },
  { href: "/terminos-y-condiciones", label: "Términos y Condiciones" },
  { href: "/politica-de-cookies", label: "Política de Cookies" },
  { href: "/politica-de-reembolsos", label: "Política de Reembolsos" },
];

export default function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070e1c] text-slate-800 dark:text-stone-300 font-sans-clean transition-colors duration-500">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap');
        .font-serif-elegant { font-family: 'Playfair Display', serif; }
        .font-sans-clean { font-family: 'Inter', sans-serif; }
        .legal h2 { font-family: 'Playfair Display', serif; font-size: 1.35rem; margin: 2.25rem 0 0.75rem; letter-spacing: .02em; }
        .legal h3 { font-weight: 600; margin: 1.25rem 0 0.5rem; }
        .legal p, .legal li { font-size: 0.95rem; line-height: 1.75; font-weight: 300; margin-bottom: 0.75rem; }
        .legal ul { list-style: disc; padding-left: 1.5rem; margin-bottom: 0.75rem; }
        .legal a { text-decoration: underline; text-underline-offset: 3px; }
        .legal strong { font-weight: 600; }
        .legal table { width: 100%; border-collapse: collapse; font-size: .9rem; margin: .75rem 0 1.25rem; }
        .legal th, .legal td { border: 1px solid rgba(148,163,184,.4); padding: .5rem .75rem; text-align: left; vertical-align: top; }
        .legal th { font-weight: 600; }
      `,
        }}
      />

      <header className="py-6 px-6 md:px-12 flex justify-between items-center border-b border-slate-200 dark:border-stone-800">
        <Link href="/" className="flex items-center gap-2 text-sm text-slate-600 dark:text-stone-400 hover:opacity-70">
          <ArrowLeft size={16} /> Volver al inicio
        </Link>
        <Link href="/" aria-label="Ir al inicio">
          <Image src="/logo.webp" alt="Logo Sarhè Consultores" width={60} height={60} className="w-12 md:w-16 h-auto object-contain" priority />
        </Link>
      </header>

      <main className="container mx-auto px-6 md:px-12 py-12 max-w-3xl">
        {hayDatosPendientes && (
          <div role="alert" className="mb-8 border border-amber-500 bg-amber-100 text-amber-900 text-sm p-4 rounded-sm">
            <strong>Aviso interno:</strong> faltan datos del responsable por completar en{" "}
            <code>app/lib/legal.ts</code> (texto entre corchetes). No publique el sitio hasta completarlos.
          </div>
        )}

        <h1 className="font-serif-elegant text-3xl md:text-4xl mb-2 text-slate-900 dark:text-white">{title}</h1>
        <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-stone-500 mb-8">
          Última actualización: {LEGAL.actualizacion}
        </p>

        <article className="legal">{children}</article>

        <nav aria-label="Documentos legales" className="mt-16 pt-8 border-t border-slate-200 dark:border-stone-800">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="underline underline-offset-4 text-slate-600 dark:text-stone-400 hover:opacity-70">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </div>
  );
}
