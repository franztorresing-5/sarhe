import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "../components/LegalPage";
import { LEGAL } from "../lib/legal";

export const metadata: Metadata = {
  title: "Política de Cookies | Sarhè Consultores",
  description: "Política de cookies y tecnologías similares de Sarhè Consultores.",
};

export default function Cookies() {
  return (
    <LegalPage title="Política de Cookies">
      <h2>1. ¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos que un sitio web guarda en su navegador o dispositivo para recordar
        información sobre su visita. Existen tecnologías similares (almacenamiento local, píxeles, etiquetas)
        que cumplen funciones parecidas.
      </p>

      <h2>2. ¿Qué cookies utiliza este sitio?</h2>
      <p>
        <strong>Este sitio no instala cookies propias ni de terceros para análisis, publicidad, elaboración de
        perfiles o seguimiento,</strong> y no utiliza almacenamiento local para guardar información sobre usted.
      </p>
      <table>
        <thead>
          <tr><th>Categoría</th><th>¿Se utiliza?</th></tr>
        </thead>
        <tbody>
          <tr><td>Estrictamente necesarias</td><td>No se requieren cookies para el funcionamiento del sitio.</td></tr>
          <tr><td>Preferencias / funcionales</td><td>No</td></tr>
          <tr><td>Analíticas o estadísticas</td><td>No</td></tr>
          <tr><td>Publicidad o seguimiento</td><td>No</td></tr>
        </tbody>
      </table>

      <h2>3. Consentimiento</h2>
      <p>
        Como el sitio no utiliza cookies que requieran su autorización, <strong>no se muestra un banner de
        cookies</strong>. Si en el futuro incorporamos herramientas que las usen (por ejemplo, estadísticas de
        visitas o publicidad), actualizaremos esta política y le pediremos su consentimiento antes de
        activarlas, permitiéndole rechazarlas con la misma facilidad con que las acepta.
      </p>

      <h2>4. Servicios de terceros que pueden recibir datos técnicos</h2>
      <p>
        Aunque no se instalan cookies, al visitar el sitio su navegador se conecta a servicios de terceros que
        pueden recibir de forma automática datos técnicos como su dirección IP y tipo de navegador:
      </p>
      <ul>
        <li><strong>Netlify:</strong> aloja el sitio y puede registrar datos técnicos de las solicitudes por seguridad y operación.</li>
        <li><strong>Google Fonts:</strong> sirve las tipografías del sitio; según su documentación pública, este servicio no almacena cookies.</li>
        <li><strong>Web3Forms:</strong> recibe los datos únicamente cuando usted envía el formulario de contacto.</li>
        <li>
          <strong>WhatsApp e Instagram (Meta):</strong> solo si usted hace clic en sus enlaces; a partir de ese
          momento aplican las políticas de cookies y privacidad de esas plataformas.
        </li>
      </ul>

      <h2>5. Cómo administrar o eliminar cookies</h2>
      <p>
        Puede bloquear o eliminar cookies desde la configuración de su navegador (Chrome, Safari, Firefox,
        Edge, entre otros). Hacerlo puede afectar el funcionamiento de otros sitios que visite.
      </p>

      <h2>6. Más información</h2>
      <p>
        El tratamiento de sus datos personales se describe en el <Link href="/aviso-de-privacidad">Aviso de
        Privacidad</Link>. Para dudas: <a href={`mailto:${LEGAL.correo}`}>{LEGAL.correo}</a>.
      </p>
    </LegalPage>
  );
}
