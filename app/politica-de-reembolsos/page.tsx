import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "../components/LegalPage";
import { LEGAL } from "../lib/legal";

export const metadata: Metadata = {
  title: "Política de Cancelación y Reembolsos | Sarhè Consultores",
  description: "Política de cancelación y reembolsos de los servicios de Sarhè Consultores.",
};

export default function Reembolsos() {
  return (
    <LegalPage title="Política de Cancelación y Reembolsos">
      <h2>1. Alcance</h2>
      <p>
        Esta política aplica a los servicios profesionales de {LEGAL.marca}. <strong>Este sitio web no
        procesa pagos</strong>: los honorarios, anticipos y formas de pago se acuerdan en la cotización o en el
        contrato o carta de encargo de cada servicio. Si ese documento establece condiciones distintas a las
        de esta política, prevalecerán las del documento firmado.
      </p>

      <h2>2. Naturaleza de los servicios</h2>
      <p>
        Los servicios de contabilidad, auditoría y asesoría son servicios profesionales de medios, no de
        resultado. Por ello, los honorarios no son reembolsables únicamente porque una autoridad o un tercero
        emita una resolución o decisión distinta a la esperada por el cliente.
      </p>

      <h2>3. Cancelación antes de iniciar el trabajo</h2>
      <p>
        Si el cliente cancela antes de que se inicie la prestación del servicio, se reembolsará el 100 % de los
        anticipos recibidos, descontando únicamente los gastos de terceros ya erogados por cuenta del cliente
        (por ejemplo, derechos, trámites o certificaciones), que se acreditarán con comprobantes.
      </p>

      <h2>4. Cancelación una vez iniciado el trabajo</h2>
      <p>
        Si el servicio ya inició, se cobrará la parte proporcional al trabajo realizado y a los gastos
        efectuados hasta la fecha de la cancelación, y se reembolsará el saldo no devengado de los anticipos.
        Los servicios de pago recurrente (por ejemplo, contabilidad mensual) podrán cancelarse con aviso por
        escrito con la anticipación pactada en el contrato; no se reembolsan periodos ya prestados.
      </p>

      <h2>5. Servicios concluidos</h2>
      <p>
        Una vez entregado el servicio o producto de trabajo y aceptado por el cliente, no procede el
        reembolso, salvo que exista un error imputable al despacho. En ese caso se corregirá sin costo
        adicional o, si no fuera posible, se reembolsará la parte proporcional afectada.
      </p>

      <h2>6. Pagos a autoridades y terceros</h2>
      <p>
        Los impuestos, derechos, multas, recargos, contribuciones y cualquier otro pago realizado a
        autoridades o proveedores externos no son reembolsables por el despacho, ya que no constituyen
        honorarios.
      </p>

      <h2>7. Cómo solicitar una cancelación o reembolso</h2>
      <p>
        Envíe su solicitud por escrito a <a href={`mailto:${LEGAL.correo}`}>{LEGAL.correo}</a> indicando su
        nombre, el servicio contratado, el motivo y, en su caso, el comprobante de pago. Confirmaremos la
        recepción y le daremos respuesta por el mismo medio.
      </p>

      <h2>8. Plazo y forma de reembolso</h2>
      <p>
        Cuando proceda, el reembolso se realizará dentro de los 15 días hábiles siguientes a la aprobación de
        la solicitud, por el mismo medio de pago utilizado, salvo que se acuerde otro por escrito.
      </p>

      <h2>9. Derechos del consumidor</h2>
      <p>
        Esta política no limita los derechos que la Ley Federal de Protección al Consumidor y demás
        disposiciones aplicables le reconocen. Puede consultar también nuestros{" "}
        <Link href="/terminos-y-condiciones">Términos y Condiciones</Link>.
      </p>
    </LegalPage>
  );
}
