"use client"

import { useCart } from "../context/CartContext"

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img
          src={product.imagen || "https://via.placeholder.com/300"}
          alt={product.nombre}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1 text-amber-900">{product.nombre}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.descripcion}</p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-amber-700">${product.precio.toLocaleString()}</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-1 rounded-md text-sm"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  )
}
