'use client';

import { useActionState, useState } from 'react';
import { submitSurvey, type State } from '@/app/actions';

const initialState: State = {
  message: '',
  success: false,
};

export default function SurveyForm() {
  const [state, formAction, isPending] = useActionState(submitSurvey, initialState);
  const [tarifa, setTarifa] = useState(15);

  // Cálculo del porcentaje
  const min = 10;
  const max = 20;
  const percentage = ((tarifa - min) / (max - min)) * 100;

  if (state.success) {
    // MENSAJE PERSONALIZADO
    // Reemplaza '5215528953599' con TU número de negocio real
    const phoneNumber = '5215528953599'; 
    const text = `Hola, soy ${state.userName || 'un usuario'}. Acabo de registrarme y quiero validar mi número para tener prioridad en el lanzamiento del servicio. 🚀`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    return (
      <div className="max-w-md mx-auto p-8 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-indigo-50 text-center transform transition-all animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-indigo-200 shadow-lg animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.75 3c1.99 0 3.757 1.008 4.75 2.544C13.493 4.008 15.26 3 17.25 3c3.036 0 5.5 2.322 5.5 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007-.004-.003.001a.752.752 0 01-.472 0l-.003-.001z" />
          </svg>
        </div>
        
        <h2 className="text-3xl font-extrabold text-gray-900 mb-3">¡Bienvenido a bordo!</h2>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Gracias por registrarte. Tu opinión nos ayuda a construir un mejor servicio. <br/><br/>
          <strong className="text-indigo-600">¿Quieres tener prioridad en tus pedidos cuando iniciemos?</strong>
        </p>
        
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-full flex items-center justify-center gap-3 py-4 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg rounded-2xl shadow-xl shadow-green-500/30 transition-all transform hover:-translate-y-1 hover:scale-105 active:scale-95"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Validar mi registro para Prioridad
          <div className="absolute inset-0 rounded-2xl ring-4 ring-white/20 group-hover:ring-white/40 transition-all" />
        </a>
        
        <p className="mt-6 text-sm text-gray-400">
          Al hacer clic se abrirá tu chat de WhatsApp con nosotros.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
      <div className="bg-indigo-600 p-4 text-center">
        <p className="text-indigo-100 text-sm font-medium">Solo te tomará 1 minuto</p>
      </div>
      
      <div className="p-6 md:p-8">
        <form action={formAction} className="space-y-8">
          
          {/* Nombre */}
          <div className="space-y-2">
            <label htmlFor="nombre" className="block text-sm font-bold text-gray-700">
              Nombre Completo
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all font-medium text-base"
              placeholder="Ej. Juan Pérez"
            />
          </div>

          {/* WhatsApp */}
          <div className="space-y-2">
            <label htmlFor="whatsapp" className="block text-sm font-bold text-gray-700">
              WhatsApp (10 dígitos)
            </label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              required
              pattern="[0-9]{10}"
              maxLength={10}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all font-medium text-base tracking-wide"
              placeholder="Ej. 5512345678"
              onInput={(e) => {
                  const target = e.target as HTMLInputElement;
                  target.value = target.value.replace(/[^0-9]/g, '').slice(0, 10);
              }}
            />
          </div>

          {/* Colonia */}
          <div className="space-y-2">
            <label htmlFor="colonia" className="block text-sm font-bold text-gray-700">
              Colonia
            </label>
            <input
              list="colonias-list"
              id="colonia"
              name="colonia"
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all font-medium text-base"
              placeholder="Selecciona o escribe tu colonia"
            />
            <datalist id="colonias-list">
              <option value="Avenida Principal" />
              <option value="Carril" />
              <option value="Las Casitas" />
            </datalist>
          </div>

          {/* Frecuencia Semanal */}
          <div className="space-y-3">
            <label className="block text-sm font-bold text-gray-700">
              ¿Con qué frecuencia pides delivery?
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: '1-2 veces', value: 'baja' },
                { label: '3-4 veces', value: 'media' },
                { label: '5+ veces', value: 'alta' }
              ].map((option) => (
                <label key={option.value} className="cursor-pointer group relative">
                  <input
                    type="radio"
                    name="frecuencia_semanal"
                    value={option.label}
                    required
                    className="peer sr-only"
                  />
                  <div className="h-full flex flex-col items-center justify-center py-3 px-2 bg-gray-50 border-2 border-transparent rounded-xl peer-checked:bg-indigo-50 peer-checked:border-indigo-600 peer-checked:text-indigo-700 hover:bg-indigo-50/50 transition-all">
                    <span className="text-sm font-bold text-gray-700 group-hover:text-indigo-600 peer-checked:text-indigo-700">{option.label}</span>
                  </div>
                  <div className="absolute top-1 right-1 hidden peer-checked:block text-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Acepta Tarifa Envío - Slider Personalizado */}
          <div className="space-y-4">
            <label htmlFor="rango_tarifa" className="block text-sm font-bold text-gray-700">
              En base a tu ubicación, ¿cuánto estarías dispuesto a pagar de envío?
            </label>
            <div className="bg-indigo-50/30 p-6 rounded-2xl border border-indigo-100">
              <div className="text-center mb-8">
                <div className="inline-block relative">
                   <span className="text-6xl font-extrabold text-indigo-600 tracking-tighter drop-shadow-sm transition-all duration-300">
                    ${tarifa}
                  </span>
                  <span className="text-gray-500 text-xl font-medium ml-1">MXN</span>
                </div>
              </div>
              
              <div className="relative w-full h-8 flex items-center">
                <input
                  type="range"
                  id="rango_tarifa"
                  name="rango_tarifa"
                  min="10"
                  max="20"
                  step="1"
                  value={tarifa}
                  onChange={(e) => setTarifa(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-0"
                  style={{
                    backgroundImage: `linear-gradient(to right, #4f46e5 ${percentage}%, #e5e7eb ${percentage}%)`,
                  }}
                />
                
                {/* Estilos específicos para personalizar el thumb (botón) que no se pueden hacer solo con clases de utilidad estándar de forma sencilla sin plugins */}
                <style jsx>{`
                  input[type=range]::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    height: 28px;
                    width: 28px;
                    border-radius: 50%;
                    background: #4f46e5;
                    cursor: pointer;
                    box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.4), 0 2px 4px -1px rgba(79, 70, 229, 0.2);
                    margin-top: -8px; /* Centrar verticalmente respecto al track de h-3 (12px) -> (28-12)/2 = 8 */
                    transition: transform 0.1s ease-in-out, background-color 0.2s;
                  }
                  input[type=range]::-webkit-slider-thumb:hover {
                    transform: scale(1.15);
                    background: #4338ca;
                  }
                  input[type=range]::-webkit-slider-runnable-track {
                    width: 100%;
                    height: 12px;
                    cursor: pointer;
                    background: transparent; /* El fondo lo maneja el input con linear-gradient */
                    border-radius: 9999px;
                  }
                  /* Firefox styles */
                  input[type=range]::-moz-range-thumb {
                    height: 28px;
                    width: 28px;
                    border: none;
                    border-radius: 50%;
                    background: #4f46e5;
                    cursor: pointer;
                    box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.4);
                    transition: transform 0.1s ease-in-out;
                  }
                  input[type=range]::-moz-range-thumb:hover {
                    transform: scale(1.15);
                  }
                `}</style>
              </div>

              <div className="flex justify-between mt-4 font-bold text-sm text-gray-400 select-none">
                <span className={`transition-colors duration-300 ${tarifa === 10 ? 'text-indigo-600 scale-110' : ''}`}>$10</span>
                <span className={`transition-colors duration-300 ${tarifa === 15 ? 'text-indigo-600 scale-110' : ''}`}>$15</span>
                <span className={`transition-colors duration-300 ${tarifa === 20 ? 'text-indigo-600 scale-110' : ''}`}>$20</span>
              </div>
            </div>
          </div>

          {/* Comentarios / Recomendaciones */}
          <div className="space-y-2">
            <label htmlFor="comentarios" className="block text-sm font-bold text-gray-700">
              ¿Tienes alguna recomendación o comentario adicional?
            </label>
            <textarea
              id="comentarios"
              name="comentarios"
              rows={3}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all font-medium text-base resize-none"
              placeholder="Ej. Me gustaría que aceptaran pagos con transferencia..."
            ></textarea>
          </div>

          {/* Error Message */}
          {state.message && !state.success && (
            <div className="p-4 bg-red-50 text-red-700 text-sm font-medium rounded-xl border border-red-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 flex-shrink-0">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              {state.message}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-indigo-500/40 transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
          >
              {isPending ? (
                  <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando respuesta...
                  </>
              ) : 'Enviar mi opinión 🚀'}
          </button>
        </form>
      </div>
    </div>
  );
}
