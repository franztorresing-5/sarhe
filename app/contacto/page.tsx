"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import { LEGAL } from '../lib/legal';

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (loading) return;

        const form = e.currentTarget;
        const formData = new FormData(form);

        // Validación en servidor-lado-cliente: nunca confiar solo en los atributos HTML
        const name = String(formData.get("name") ?? "").trim();
        const email = String(formData.get("email") ?? "").trim();
        const phone = String(formData.get("phone") ?? "").trim();
        const message = String(formData.get("message") ?? "").trim();

        if (!name || !email || !message) {
            alert("Por favor complete los campos obligatorios.");
            return;
        }
        if (phone && !/^[0-9]{10}$/.test(phone)) {
            alert("El teléfono debe tener 10 dígitos.");
            return;
        }
        if (!formData.get("acepta_terminos") || !formData.get("acepta_privacidad")) {
            alert("Para enviar el formulario debe aceptar los Términos y Condiciones y el Aviso de Privacidad.");
            return;
        }

        setLoading(true);

        formData.set("name", name);
        formData.set("email", email);
        formData.set("phone", phone);
        formData.set("message", message);

        // Constancia del consentimiento (se incluye en el correo que recibe el despacho)
        formData.set("acepta_terminos", "Sí");
        formData.set("acepta_privacidad", "Sí");
        formData.set("fecha_consentimiento", new Date().toISOString());
        formData.set("version_aviso_privacidad", LEGAL.version);

        // Llave PÚBLICA de Web3Forms (está pensada para ir en el navegador).
        // Protéjala en el panel de Web3Forms: restrinja el dominio permitido y active la protección anti-spam.
        formData.append("access_key", "bb7c0576-9f37-4fe8-84e2-c04669b89ffb");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setSubmitted(true);
                setLoading(false);
            } else {
                setLoading(false);
                alert("Ocurrió un error al enviar el mensaje. Por favor intente de nuevo.");
            }
        } catch {
            setLoading(false);
            alert("Error de conexión. Verifique su red e intente nuevamente.");
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#070e1c] text-slate-800 dark:text-stone-300 font-sans-clean transition-colors duration-500">
            <style dangerouslySetInnerHTML={{
                __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap');
        .font-serif-elegant { font-family: 'Playfair Display', serif; }
        .font-sans-clean { font-family: 'Inter', sans-serif; }
        .text-metallic {
          background: linear-gradient(to bottom right, #ffffff, #d6d3d1, #a8a29e, #d6d3d1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }
        :root:not(.dark) .text-metallic {
          background: linear-gradient(to bottom right, #334155, #475569, #1e293b, #475569);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }
        .border-metallic { border-color: rgba(214, 211, 209, 0.2); }
      `}} />

            {/* Header / Logo de Regreso */}
            <header className="py-6 px-6 md:px-12 flex justify-center items-center border-b border-slate-200 dark:border-metallic">
                <Link href="/" className="cursor-pointer flex items-center">
                    <Image
                        src="/logo.webp"
                        alt="Logo Sarhè Consultores"
                        width={60}
                        height={60}
                        className="w-15 md:w-20 h-auto object-contain"
                        priority
                    />
                </Link>
            </header>

            {/* Contenido Principal */}
            <main className="container mx-auto px-6 md:px-12 py-5 max-w-5xl">
                <div className="text-center mb-6">
                    <h1 className="font-serif-elegant text-4xl md:text-5xl mb-4 tracking-wide text-slate-900 dark:text-white">
                        Inicie su Consulta
                    </h1>
                    <p className="text-slate-600 dark:text-stone-400 font-light max-w-xl mx-auto text-sm md:text-base">
                        Complete el formulario o comuníquese directamente con nuestros especialistas fiscales y legales. Le responderemos a la brevedad.
                    </p>
                    <div className="w-12 h-px bg-slate-400 dark:bg-stone-400 mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Formulario Moderno con Web3Forms */}
                    <div className="lg:col-span-7 bg-white dark:bg-[#0a1426] border border-slate-200 dark:border-metallic p-8 md:p-10 rounded-sm shadow-xl">
                        {submitted ? (
                            <div className="py-16 text-center flex flex-col items-center justify-center space-y-4">
                                <CheckCircle2 size={64} className="text-emerald-500 animate-bounce" />
                                <h3 className="font-serif-elegant text-2xl text-slate-900 dark:text-white">Mensaje Recibido</h3>
                                <p className="text-slate-600 dark:text-stone-400 text-sm max-w-sm">
                                    Agradecemos su interés. Un especialista de Sarhè Consultores se pondrá en contacto con usted a la brevedad.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-6 text-xs tracking-widest uppercase border-b border-slate-800 dark:border-stone-300 pb-1 hover:opacity-70 transition-opacity text-slate-800 dark:text-stone-300"
                                >
                                    Enviar otro mensaje
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Campo oculto para personalizar el asunto en tu correo */}
                                <input type="hidden" name="subject" value="Nueva cotización o consulta desde Sarhè Consultores" />
                                {/* Trampa anti-bots (honeypot): las personas no lo ven; si se marca, Web3Forms descarta el envío */}
                                <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-slate-500 dark:text-stone-400 mb-2 font-medium">Nombre Completo</label>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            maxLength={100}
                                            autoComplete="name"
                                            placeholder="Lic. Roberto Gómez"
                                            className="w-full bg-slate-50 dark:bg-[#070e1c] border border-slate-300 dark:border-stone-800 rounded-sm px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-slate-600 dark:focus:border-stone-400 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-slate-500 dark:text-stone-400 mb-2 font-medium">Teléfono (opcional, 10 dígitos)</label>
                                        <input
                                            type="tel"
                                            inputMode="numeric"
                                            autoComplete="tel-national"
                                            name="phone"
                                            placeholder="5545760897"
                                            pattern="[0-9]{10}"
                                            maxLength={10}
                                            title="Por favor, ingrese un número telefónico válido de 10 dígitos."
                                            className="w-full bg-slate-50 dark:bg-[#070e1c] border border-slate-300 dark:border-stone-800 rounded-sm px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-slate-600 dark:focus:border-stone-400 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-slate-500 dark:text-stone-400 mb-2 font-medium">Correo Electrónico</label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        maxLength={254}
                                        autoComplete="email"
                                        placeholder="roberto@empresa.com"
                                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                                        title="Por favor, ingrese un correo electrónico válido (ejemplo: usuario@dominio.com)"
                                        className="w-full bg-slate-50 dark:bg-[#070e1c] border border-slate-300 dark:border-stone-800 rounded-sm px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-slate-600 dark:focus:border-stone-400 transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-slate-500 dark:text-stone-400 mb-2 font-medium">Área de Interés / Asunto</label>
                                    <select
                                        name="service"
                                        defaultValue=""
                                        className="w-full bg-slate-50 dark:bg-[#070e1c] border border-slate-300 dark:border-stone-800 rounded-sm px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-slate-600 dark:focus:border-stone-400 transition-colors"
                                    >
                                        <option value="" disabled className="text-gray-400">
                                            Seleccione una opción
                                        </option>
                                        <option value="Contabilidad General y Financiera">Contabilidad General y Financiera</option>
                                        <option value="Asesoría Fiscal e Impuestos">Asesoría Fiscal e Impuestos</option>
                                        <option value="Auditoría y Control Interno">Auditoría y Control Interno</option>
                                        <option value="Nóminas y Seguridad Social">Nóminas y Seguridad Social</option>
                                        <option value="Asesoría Legal y Corporativa">Asesoría Legal y Corporativa</option>
                                        <option value="Capacitación y Formación Empresarial">Capacitación y Formación Empresarial</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-slate-500 dark:text-stone-400 mb-2 font-medium">Mensaje o Requerimiento</label>
                                    <textarea
                                        required
                                        rows={4}
                                        name="message"
                                        minLength={10}
                                        maxLength={1500}
                                        placeholder="Describa brevemente la situación o el servicio que requiere..."
                                        className="w-full bg-slate-50 dark:bg-[#070e1c] border border-slate-300 dark:border-stone-800 rounded-sm px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-slate-600 dark:focus:border-stone-400 transition-colors resize-none"
                                    ></textarea>
                                </div>

                                {/* Aviso de datos sensibles */}
                                <p className="text-xs text-slate-500 dark:text-stone-500 leading-relaxed">
                                    Por favor no incluya en el mensaje contraseñas, RFC, CURP, e.firma ni datos bancarios.
                                </p>

                                {/* Consentimientos (casillas separadas, sin marcar por defecto) */}
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <input
                                            required
                                            id="acepta_terminos"
                                            type="checkbox"
                                            name="acepta_terminos"
                                            className="mt-1 h-4 w-4 shrink-0 accent-slate-800 dark:accent-stone-300"
                                        />
                                        <label htmlFor="acepta_terminos" className="text-sm text-slate-600 dark:text-stone-400 leading-snug">
                                            He leído y acepto los{" "}
                                            <Link href="/terminos-y-condiciones" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 text-slate-900 dark:text-stone-200 hover:opacity-70">
                                                Términos y Condiciones
                                            </Link>
                                            .
                                        </label>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <input
                                            required
                                            id="acepta_privacidad"
                                            type="checkbox"
                                            name="acepta_privacidad"
                                            className="mt-1 h-4 w-4 shrink-0 accent-slate-800 dark:accent-stone-300"
                                        />
                                        <label htmlFor="acepta_privacidad" className="text-sm text-slate-600 dark:text-stone-400 leading-snug">
                                            He leído el{" "}
                                            <Link href="/aviso-de-privacidad" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 text-slate-900 dark:text-stone-200 hover:opacity-70">
                                                Aviso de Privacidad
                                            </Link>{" "}
                                            y consiento el tratamiento de mis datos para que me contacten.
                                        </label>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full group flex items-center justify-center gap-3 bg-slate-900 dark:bg-stone-200 text-white dark:text-[#070e1c] py-4 rounded-sm text-sm tracking-widest uppercase hover:bg-slate-800 dark:hover:bg-white transition-all duration-300 font-medium shadow-lg disabled:opacity-50"
                                >
                                    <span>{loading ? "Enviando..." : "Enviar Mensaje"}</span>
                                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Información de Contacto (Columna Izquierda) */}
                    <div className="lg:col-span-5 bg-white dark:bg-[#0a1426] border border-slate-200 dark:border-metallic p-8 rounded-sm shadow-xl">
                        <h2 className="font-serif-elegant text-2xl text-slate-900 dark:text-stone-200 mb-6 tracking-wide">
                            Datos de Contacto
                        </h2>
                        <p className="text-slate-600 dark:text-stone-400 text-sm font-light mb-8 leading-relaxed">
                            Atención personalizada para empresas y corporativos con cita previa en nuestras oficinas o vía digital.
                        </p>

                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 text-sm text-slate-700 dark:text-stone-300">
                                <div className="p-3 bg-slate-100 dark:bg-stone-900 border border-slate-200 dark:border-stone-700 rounded-full">
                                    <Phone size={18} className="text-slate-700 dark:text-stone-300" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Teléfono</p>
                                    <span className="font-medium">+52 (55) 4576 0897</span>
                                </div>
                            </li>

                            <li className="flex items-start gap-4 text-sm text-slate-700 dark:text-stone-300">
                                <div className="p-3 bg-slate-100 dark:bg-stone-900 border border-slate-200 dark:border-stone-700 rounded-full">
                                    <Mail size={18} className="text-slate-700 dark:text-stone-300" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Correo Electrónico</p>
                                    <span className="font-medium">sarheconsultoresmx@gmail.com</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
                <nav aria-label="Documentos legales" className="mt-12 pt-6 border-t border-slate-200 dark:border-stone-800">
                    <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-500 dark:text-stone-500">
                        <li><Link href="/aviso-de-privacidad" className="underline underline-offset-4 hover:opacity-70">Aviso de Privacidad</Link></li>
                        <li><Link href="/terminos-y-condiciones" className="underline underline-offset-4 hover:opacity-70">Términos y Condiciones</Link></li>
                        <li><Link href="/politica-de-cookies" className="underline underline-offset-4 hover:opacity-70">Política de Cookies</Link></li>
                        <li><Link href="/politica-de-reembolsos" className="underline underline-offset-4 hover:opacity-70">Política de Reembolsos</Link></li>
                    </ul>
                </nav>
            </main>
        </div>
    );
}