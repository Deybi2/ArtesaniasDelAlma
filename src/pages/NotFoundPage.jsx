import { Link } from "react-router-dom"

export default function NotFoundPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-6xl font-bold text-amber-800 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-amber-700 mb-6">Página no encontrada</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <Link to="/" className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium">
        Volver al inicio
      </Link>
    </div>
  )
}
