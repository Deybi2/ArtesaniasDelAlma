"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import CartSidebar from "./CartSidebar"
import { ShoppingCart, Menu, X } from "lucide-react"

export default function Header() {
  const { openCart, getCartCount } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const cartCount = getCartCount()

  return (
    <header className="bg-amber-50 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-amber-800">
            Artesanías del Alma
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-amber-900 hover:text-amber-700 font-medium">
              Inicio
            </Link>
            <Link to="/productos" className="text-amber-900 hover:text-amber-700 font-medium">
              Productos
            </Link>
            <Link to="/categorias" className="text-amber-900 hover:text-amber-700 font-medium">
              Categorías
            </Link>
            <Link to="/sobre-nosotros" className="text-amber-900 hover:text-amber-700 font-medium">
              Sobre Nosotros
            </Link>
            <Link to="/contacto" className="text-amber-900 hover:text-amber-700 font-medium">
              Contacto
            </Link>
          </nav>

          <div className="flex items-center">
            <button
              onClick={openCart}
              className="relative p-2 text-amber-900 hover:text-amber-700"
              aria-label="Ver carrito"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="ml-4 md:hidden text-amber-900"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              to="/"
              className="block text-amber-900 hover:text-amber-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/productos"
              className="block text-amber-900 hover:text-amber-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Productos
            </Link>
            <Link
              to="/categorias"
              className="block text-amber-900 hover:text-amber-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorías
            </Link>
            <Link
              to="/sobre-nosotros"
              className="block text-amber-900 hover:text-amber-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Nosotros
            </Link>
            <Link
              to="/contacto"
              className="block text-amber-900 hover:text-amber-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </nav>
        )}
      </div>

      <CartSidebar />
    </header>
  )
}
