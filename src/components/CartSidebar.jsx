"use client"

import { useCart } from "../context/CartContext"
import { X, Trash2 } from "lucide-react"

export default function CartSidebar() {
  const { cart, isOpen, closeCart, removeFromCart, updateQuantity, getCartTotal } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={closeCart}></div>

      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Tu Carrito</h2>
          <button onClick={closeCart} className="text-gray-500 hover:text-gray-700" aria-label="Cerrar carrito">
            <X size={24} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-4">
          {cart.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Tu carrito está vacío</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item.id} className="flex border-b pb-4">
                  <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                    <img
                      src={item.imagen || "https://via.placeholder.com/150"}
                      alt={item.nombre}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="ml-4 flex-grow">
                    <h3 className="font-medium">{item.nombre}</h3>
                    <p className="text-amber-700">${item.precio.toLocaleString()}</p>

                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center border rounded-l"
                        aria-label="Disminuir cantidad"
                      >
                        -
                      </button>
                      <span className="w-10 h-8 flex items-center justify-center border-t border-b">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center border rounded-r"
                        aria-label="Aumentar cantidad"
                      >
                        +
                      </button>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto text-red-500 hover:text-red-700"
                        aria-label="Eliminar del carrito"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-4 border-t">
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Total:</span>
              <span className="font-semibold">${getCartTotal().toLocaleString()}</span>
            </div>

            <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-md font-medium">
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
