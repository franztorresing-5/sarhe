import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "../components/LegalPage";
import { LEGAL } from "../lib/legal";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Sarhè Consultores",
  description: "Términos y condiciones de uso del sitio web de Sarhè Consultores.",
};

export default function Terminos() {
  return (
    <LegalPage title="Términos y Condiciones de Uso">
      <h2>1. Aceptación</h2>
      <p>
        El acceso y uso de este sitio web ({LEGAL.sitio}) implica la aceptación de estos Términos y
        Condiciones. Si no está de acuerdo con ellos, le pedimos no utilizar el sitio. El sitio es operado por{" "}
        <strong>{LEGAL.responsable}</strong>, bajo el nombre comercial <strong>{LEGAL.marca}</strong>, con
        domicilio en {LEGAL.domicilio}.
      </p>

      <h2>2. Objeto del sitio</h2>
      <p>
        Este sitio tiene carácter informativo y de contacto: presenta los servicios de contabilidad, auditoría
        y asesoría legal que ofrece el despacho y permite solicitar una consulta. <strong>El sitio no vende
        servicios ni procesa pagos en línea.</strong> Los servicios se contratan por separado, mediante
        cotización y contrato o carta de encargo firmados entre las partes.
      </p>

      <h2>3. Información general y ausencia de relación profesional</h2>
      <p>
        Los contenidos del sitio son de carácter general y no constituyen asesoría contable, fiscal ni legal
        para un caso concreto. El envío del formulario o de un mensaje, o el intercambio de comunicaciones
        previas, <strong>no genera por sí mismo una relación profesional</strong> ni obliga al despacho a
        prestar un servicio, hasta que ambas partes formalicen la contratación.
      </p>
      <p>
        Le pedimos no enviar por el formulario información confidencial, contraseñas, e.firma, datos bancarios
        ni documentos sensibles; se los solicitaremos por un medio adecuado cuando sea necesario.
      </p>

      <h2>4. Formulario de contacto</h2>
      <p>
        Usted se obliga a proporcionar datos veraces y a usar el formulario de buena fe. Los tiempos de
        respuesta son estimados y no constituyen una garantía. El tratamiento de sus datos se rige por el{" "}
        <Link href="/aviso-de-privacidad">Aviso de Privacidad</Link>.
      </p>

      <h2>5. Uso permitido</h2>
      <p>Al usar el sitio usted se compromete a no:</p>
      <ul>
        <li>Utilizarlo para fines ilícitos o contrarios a estos términos.</li>
        <li>Intentar acceder sin autorización a sus sistemas, o interferir con su funcionamiento o seguridad.</li>
        <li>Enviar mensajes automatizados, masivos, engañosos o con contenido malicioso.</li>
        <li>Suplantar la identidad de otra persona.</li>
      </ul>

      <h2>6. Propiedad intelectual</h2>
      <p>
        El nombre y logotipo de {LEGAL.marca}, los textos, el diseño y demás elementos del sitio están
        protegidos por la legislación aplicable en materia de propiedad intelectual e industrial, en la
        medida en que sean susceptibles de protección. No se autoriza su reproducción, distribución o uso
        comercial sin autorización previa y por escrito. Las imágenes ilustrativas del sitio fueron generadas
        con herramientas de inteligencia artificial y no representan instalaciones, personas o resultados reales.
      </p>

      <h2>7. Enlaces a terceros</h2>
      <p>
        El sitio contiene enlaces a servicios de terceros (por ejemplo, WhatsApp e Instagram). No controlamos
        sus contenidos ni prácticas de privacidad y no somos responsables por ellos.
      </p>

      <h2>8. Servicios, honorarios y reembolsos</h2>
      <p>
        Las características, alcance, honorarios y forma de pago de cada servicio se establecen en la
        cotización o contrato correspondiente. Las condiciones de cancelación y reembolso se describen en la{" "}
        <Link href="/politica-de-reembolsos">Política de Reembolsos</Link>.
      </p>

      <h2>9. Disponibilidad y limitación de responsabilidad</h2>
      <p>
        Procuramos que el sitio funcione de manera continua y que su información sea correcta y actualizada,
        pero no garantizamos que esté libre de interrupciones o errores. En la máxima medida permitida por la
        ley, no seremos responsables por daños derivados del uso del sitio o de la imposibilidad de usarlo.
        Nada de lo anterior excluye la responsabilidad que no pueda excluirse conforme a la legislación
        aplicable ni limita los derechos que la ley reconoce a los consumidores.
      </p>

      <h2>10. Modificaciones</h2>
      <p>
        Podemos modificar estos términos en cualquier momento. La versión vigente será la publicada en esta
        página, con su fecha de actualización.
      </p>

      <h2>11. Legislación aplicable y jurisdicción</h2>
      <p>
        Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Para su interpretación y
        cumplimiento, las partes se someten a los tribunales competentes del domicilio del Responsable señalado
        en este documento, sin perjuicio de los derechos que la Ley Federal de Protección al Consumidor y otras
        disposiciones reconozcan a favor del consumidor, quien también podrá acudir a la Procuraduría Federal
        del Consumidor (PROFECO).
      </p>

      <h2>12. Contacto</h2>
      <p>
        Para dudas sobre estos términos: <a href={`mailto:${LEGAL.correo}`}>{LEGAL.correo}</a> · {LEGAL.telefono}.
      </p>
    </LegalPage>
  );
}
