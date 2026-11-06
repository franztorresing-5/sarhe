// ─────────────────────────────────────────────────────────────
// DATOS LEGALES DEL SITIO — se editan UNA sola vez aquí y se
// reflejan en todas las páginas legales y en el formulario.
// Todo valor que empiece con "[COMPLETAR" debe sustituirse
// antes de publicar el sitio.
// ─────────────────────────────────────────────────────────────
export const LEGAL = {
  marca: "Sarhè Consultores",
  responsable: "José Alfredo Sanchez Ramirez",
  domicilio: "[Herradura, 862, Geovillas de Jesus Maria, 56586, Ixtapaluca, Estado de México, México]",
  correo: "sarheconsultoresmx@gmail.com",
  telefono: "+52 (55) 4576 0897",
  sitio: "https://sarhe.netlify.app",
  actualizacion: "5 de noviembre de 2026",
  version: "2026-11-05",
} as const;

export const hayDatosPendientes = Object.values(LEGAL).some((v) =>
  v.includes("[COMPLETAR")
);
