"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function CategoriesPage() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true)
        const response = await fetch("/api/categorias")
        if (!response.ok) {
          throw new Error("Error al cargar las categorías")
        }
        const data = await response.json()
        setCategories(data)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-amber-600 border-t-transparent"></div>
        <p className="mt-4 text-lg">Cargando categorías...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-red-500 text-lg">{error}</p>
        <p className="mt-4">Por favor, intenta nuevamente más tarde.</p>
      </div>
    )
  }

  // Imágenes de ejemplo para cada categoría
  const categoryImages = {
    Cerámica: "https://us.123rf.com/450wm/lobodaphoto/lobodaphoto1506/lobodaphoto150600471/40963025-vacaciones-de-navidad-en-el-oeste-de-ucrania-en-lviv.jpg?ver=6",
    Tejidos: "https://us.123rf.com/450wm/bepsphoto/bepsphoto1506/bepsphoto150600450/41245122-vista-del-telar-blanca-casera-hilo.jpg?ver=6",
    Decoración: "https://us.123rf.com/450wm/grigory_bruev/grigory_bruev2301/grigory_bruev230101439/200844893-jarra-oriental-de-metal-con-textura-grabada-patrón-floral-estilo-oriental-jarra-antigua-en-el.jpg?ver=6",
    Joyería: "https://us.123rf.com/450wm/romanzaiets/romanzaiets2210/romanzaiets221000324/192372528-muchas-pulseras-coloridas-de-la-tienda-de-souvenirs-artesanales.jpg?ver=6",
    Madera: "https://us.123rf.com/450wm/mariiaboiko/mariiaboiko1809/mariiaboiko180900284/108413274-vitrina-con-jabón-artesanal-en-cajas-de-madera-venta-de-cosmética-ecológica-en-tienda-fragancia-de.jpg?ver=6",
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-amber-900 text-center">Nuestras Categorías</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link key={category} to={`/productos?categoria=${category}`} className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform group-hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img
                  src={categoryImages[category] || "https://via.placeholder.com/500x300"}
                  alt={category}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
              </div>

              <div className="p-6 text-center">
                <h2 className="text-xl font-semibold text-amber-800">{category}</h2>
                <p className="mt-2 text-gray-600">Explora nuestra colección de {category.toLowerCase()}</p>
                <div className="mt-4 inline-block text-amber-600 font-medium group-hover:text-amber-800">
                  Ver productos
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
