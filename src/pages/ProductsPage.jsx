"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import { Search } from "lucide-react"

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [searchTerm, setSearchTerm] = useState("")
  const categoryFilter = searchParams.get("categoria") || ""

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const response = await fetch("/api/productos")
        if (!response.ok) {
          throw new Error("Error al cargar los productos")
        }
        const data = await response.json()
        setProducts(data)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/categorias")
        if (!response.ok) {
          throw new Error("Error al cargar las categorías")
        }
        const data = await response.json()
        setCategories(data)
      } catch (err) {
        console.error("Error fetching categories:", err)
      }
    }

    fetchProducts()
    fetchCategories()
  }, [])

  const handleCategoryChange = (e) => {
    const category = e.target.value
    if (category) {
      setSearchParams({ categoria: category })
    } else {
      setSearchParams({})
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    // The filtering happens in the filteredProducts computation
  }

  const filteredProducts = products.filter((product) => {
    const matchesCategory = categoryFilter ? product.categoria === categoryFilter : true
    const matchesSearch = searchTerm
      ? product.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
      : true

    return matchesCategory && matchesSearch
  })

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-amber-600 border-t-transparent"></div>
        <p className="mt-4 text-lg">Cargando productos...</p>
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

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-amber-900 text-center">Nuestros Productos</h1>

      <div className="mb-8 flex flex-col md:flex-row md:items-end gap-4">
        <div className="md:w-1/3">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Filtrar por categoría
          </label>
          <select
            id="category"
            value={categoryFilter}
            onChange={handleCategoryChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
          >
            <option value="">Todas las categorías</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="md:w-2/3">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </form>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">No se encontraron productos que coincidan con tu búsqueda.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
