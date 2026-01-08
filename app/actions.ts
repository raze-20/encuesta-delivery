'use server'

import { supabase } from '@/lib/supabase';

type State = {
  message: string;
  success?: boolean;
  userName?: string;
};

export async function submitSurvey(prevState: State, formData: FormData) {
  const nombre = formData.get('nombre') as string;
  const whatsapp = formData.get('whatsapp') as string;
  const colonia = formData.get('colonia') as string;
  const frecuencia_semanal = formData.get('frecuencia_semanal') as string;
  const rango_tarifa_raw = formData.get('rango_tarifa') as string;
  const comentarios = formData.get('comentarios') as string;

  // Basic server-side validation
  if (!nombre || !whatsapp || !colonia || !frecuencia_semanal || !rango_tarifa_raw) {
    return { message: 'Por favor completa todos los campos requeridos.' };
  }

  if (whatsapp.length !== 10 || !/^\d+$/.test(whatsapp)) {
    return { message: 'El número de WhatsApp debe tener 10 dígitos.' };
  }

  const tarifa = parseFloat(rango_tarifa_raw);
  if (isNaN(tarifa) || tarifa < 10 || tarifa > 20) {
     return { message: 'La tarifa debe estar entre $10 y $20.' };
  }

  const { error } = await supabase
    .from('encuesta_delivery')
    .insert({
      nombre,
      whatsapp,
      colonia,
      frecuencia_semanal,
      rango_tarifa: tarifa,
      comentarios, // Nuevo campo
      whatsapp_verificado: false,
    });

  if (error) {
    console.error('Supabase error:', error);
    return { message: 'Hubo un error al guardar tu respuesta. Inténtalo de nuevo.' };
  }

  return { success: true, message: '¡Casi listo! Solo falta un paso.', userName: nombre };
}
