import SurveyForm from "./components/SurveyForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex flex-col items-center justify-center p-4 sm:p-8">
      <main className="w-full max-w-2xl">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold tracking-wide mb-4">
            PRÓXIMAMENTE EN TU ZONA
          </span>
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-6xl mb-6">
            ¡El Delivery que <span className="text-indigo-600">tú mereces!</span> 🚀
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto leading-relaxed">
            Estamos creando un servicio de entregas <strong>rápido, seguro y justo</strong>. Tu opinión es clave para diseñarlo a tu medida. ¡Ayúdanos a hacerlo realidad!
          </p>
        </div>
        
        <SurveyForm />
        
        <footer className="mt-16 text-center text-sm text-gray-500 font-medium">
          &copy; {new Date().getFullYear()} Tu Nuevo Servicio de Delivery Local.
        </footer>
      </main>
    </div>
  );
}
