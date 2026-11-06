import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "../components/LegalPage";
import { LEGAL } from "../lib/legal";

export const metadata: Metadata = {
  title: "Aviso de Privacidad | Sarhè Consultores",
  description: "Aviso de privacidad integral de Sarhè Consultores.",
};

export default function AvisoPrivacidad() {
  return (
    <LegalPage title="Aviso de Privacidad Integral">
      <p>
        En cumplimiento de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares
        (en adelante, la “Ley”), ponemos a su disposición el presente aviso de privacidad.
      </p>

      <h2>1. Identidad y domicilio del responsable</h2>
      <p>
        <strong>{LEGAL.responsable}</strong>, que opera bajo el nombre comercial <strong>{LEGAL.marca}</strong>
        , con domicilio en {LEGAL.domicilio}, es responsable del tratamiento
        de sus datos personales.
      </p>
      <p>
        Correo de contacto para asuntos de privacidad: <a href={`mailto:${LEGAL.correo}`}>{LEGAL.correo}</a>
        {" "}· Teléfono: {LEGAL.telefono}
      </p>

      <h2>2. Datos personales que recabamos</h2>
      <p>Cuando usted llena el formulario de contacto de este sitio web, recabamos únicamente:</p>
      <ul>
        <li><strong>Datos de identificación:</strong> nombre completo.</li>
        <li><strong>Datos de contacto:</strong> correo electrónico y, de forma opcional, número de teléfono.</li>
        <li>
          <strong>Contenido de su mensaje:</strong> el área de interés que usted seleccione y la descripción
          de lo que busca.
        </li>
      </ul>
      <p>
        Además, al navegar por el sitio y al enviar el formulario, los proveedores tecnológicos descritos en
        la sección 5 pueden registrar de forma automática datos técnicos como su dirección IP, tipo de
        navegador, dispositivo y fecha y hora de la visita.
      </p>
      <p>
        <strong>No solicitamos datos personales sensibles</strong> (por ejemplo, salud, origen étnico,
        religión, preferencias sexuales u opiniones políticas), <strong>ni datos financieros o patrimoniales</strong>
        (números de cuenta o tarjeta, contraseñas, claves de acceso). Le pedimos no incluir en el campo de
        mensaje información como RFC, CURP, contraseñas, e.firma o datos bancarios. Si fuera necesario conocer
        ese tipo de información para prestarle el servicio, se la solicitaremos posteriormente por un medio
        adecuado y, cuando la Ley lo exija, con su consentimiento expreso.
      </p>

      <h2>3. Finalidades del tratamiento</h2>
      <h3>Finalidades necesarias (primarias)</h3>
      <p>Utilizamos sus datos para las siguientes finalidades, que dan origen y son necesarias para atender su solicitud:</p>
      <ul>
        <li>Contactarle para responder su consulta o solicitud.</li>
        <li>Agendar citas o reuniones con usted.</li>
        <li>Elaborar y enviarle cotizaciones o propuestas de servicios de contaduría y materias relacionadas.</li>
        <li>Dar seguimiento a su solicitud y, en su caso, formalizar la prestación de servicios.</li>
      </ul>
      <h3>Finalidades que requieren su consentimiento (secundarias)</h3>
      <p>
        <strong>No utilizamos sus datos con fines de mercadotecnia, publicidad ni prospección comercial,</strong>
        ni los destinamos a finalidades distintas a las señaladas. Si en el futuro deseáramos hacerlo,
        solicitaremos su consentimiento de forma previa.
      </p>

      <h2>4. Fundamento del tratamiento y consentimiento</h2>
      <p>
        Al marcar la casilla de aceptación de este Aviso de Privacidad y enviar el formulario, usted manifiesta
        que lo ha leído y que otorga su consentimiento para el tratamiento de sus datos conforme a lo aquí
        descrito. Usted puede revocar su consentimiento en cualquier momento, según se indica en la sección 7.
      </p>

      <h2>5. Proveedores que intervienen en el tratamiento</h2>
      <p>
        No vendemos ni cedemos sus datos personales a terceros con fines propios de ellos. Para operar este
        sitio y atender su solicitud utilizamos proveedores de servicios que tratan datos por nuestra cuenta
        y bajo sus propias políticas de privacidad:
      </p>
      <table>
        <thead>
          <tr><th>Proveedor</th><th>Para qué se utiliza</th></tr>
        </thead>
        <tbody>
          <tr><td>Netlify, Inc.</td><td>Alojamiento (hosting) del sitio web.</td></tr>
          <tr><td>Web3Forms</td><td>Recepción de los datos del formulario y envío al correo del Responsable.</td></tr>
          <tr><td>Google (Gmail)</td><td>Recepción y gestión del correo electrónico en el que recibimos su mensaje.</td></tr>
          <tr><td>Google Fonts</td><td>Carga de tipografías del sitio (recibe su dirección IP al cargar la página).</td></tr>
        </tbody>
      </table>
      <p>
        Estos proveedores pueden ubicarse o almacenar información fuera de México. Si usted decide
        contactarnos por WhatsApp o visitar nuestro perfil de Instagram mediante los enlaces del sitio,
        el tratamiento de sus datos en esas plataformas se rige por las políticas de privacidad de Meta
        Platforms, Inc.
      </p>
      <p>
        Podremos comunicar sus datos a autoridades cuando exista un requerimiento fundado y motivado, o cuando
        la Ley así lo permita.
      </p>

      <h2>6. Conservación y seguridad</h2>
      <p>
        Conservamos sus datos únicamente el tiempo necesario para atender su solicitud y, si no se concreta
        la prestación de un servicio, hasta por 12 meses contados a partir de nuestro último contacto. Si se
        contrata un servicio, los conservaremos durante la relación y por los plazos que establezcan las
        disposiciones fiscales, contables y legales aplicables. Después serán bloqueados y suprimidos.
      </p>
      <p>
        Aplicamos medidas de seguridad administrativas, técnicas y físicas razonables para protegerlos contra
        daño, pérdida, alteración, destrucción o acceso no autorizado, entre ellas el cifrado de la
        conexión (HTTPS) y el acceso restringido al correo donde se reciben los mensajes. En caso de una
        vulneración de seguridad que afecte de forma significativa sus derechos, se lo informaremos.
      </p>

      <h2>7. Derechos ARCO, revocación y limitación de uso</h2>
      <p>
        Usted tiene derecho a <strong>Acceder</strong> a sus datos y conocer cómo los tratamos,
        <strong> Rectificarlos</strong> si son inexactos o están incompletos, solicitar su
        <strong> Cancelación</strong> y <strong>Oponerse</strong> a su tratamiento para fines específicos
        (derechos ARCO). También puede revocar su consentimiento o solicitar que limitemos el uso o la
        divulgación de sus datos.
      </p>
      <p>Para ejercerlos, envíe una solicitud a <a href={`mailto:${LEGAL.correo}`}>{LEGAL.correo}</a> que contenga:</p>
      <ul>
        <li>Su nombre y un medio para comunicarle la respuesta.</li>
        <li>Copia de un documento que acredite su identidad (o la de su representante legal, con el documento que acredite su representación).</li>
        <li>La descripción clara y precisa de los datos y del derecho que desea ejercer.</li>
        <li>Cualquier elemento que facilite localizar sus datos.</li>
      </ul>
      <p>Le responderemos en los plazos que establece la Ley.</p>
      <p>
        Si considera que su derecho a la protección de datos personales ha sido vulnerado, puede acudir ante la
        Secretaría Anticorrupción y Buen Gobierno, autoridad en la materia.
      </p>

      <h2>8. Uso de cookies y tecnologías similares</h2>
      <p>
        Este sitio no utiliza cookies de análisis, publicidad ni seguimiento. El detalle se encuentra en nuestra{" "}
        <Link href="/politica-de-cookies">Política de Cookies</Link>.
      </p>

      <h2>9. Menores de edad</h2>
      <p>
        Los servicios de este sitio están dirigidos a personas mayores de edad. No recabamos
        intencionalmente datos de menores; si usted considera que un menor nos ha proporcionado datos,
        escríbanos para suprimirlos.
      </p>

      <h2>10. Cambios al aviso de privacidad</h2>
      <p>
        Este aviso puede modificarse por cambios legales o en nuestras prácticas. Publicaremos cualquier
        actualización en esta misma página, indicando la fecha de última actualización.
      </p>
    </LegalPage>
  );
}
