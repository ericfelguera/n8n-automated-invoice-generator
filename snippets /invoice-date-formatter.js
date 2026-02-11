const meses = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
];

// Obtener la fecha del input
const fechaTexto = $('Generador de facturas').first().json['Fecha de la factura'];

// Parsear la fecha (formato yyyy-mm-dd)
const fecha = new Date(fechaTexto + 'T00:00:00Z');

// Extraer el mes (0-11, por eso usamos el índice directamente)
const mesIndex = fecha.getUTCMonth();
const yearIndex = fecha.getFullYear();

// Obtener el nombre del mes en español
const mesTexto = meses[mesIndex];

return {
  'mes_numero':mesIndex + 1,
  'año_numero':yearIndex,
  'mes_texto':mesTexto,
  'fecha_original': fechaTexto
};
