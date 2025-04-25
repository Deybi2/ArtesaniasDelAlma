import { Instagram, Facebook, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-amber-800 text-amber-50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Artesanías del Alma</h3>
            <p className="mb-4">
              Productos artesanales hechos con amor y dedicación, respetando técnicas tradicionales y materiales
              naturales.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <a href="/productos" className="hover:text-white">
                  Productos
                </a>
              </li>
              <li>
                <a href="/categorias" className="hover:text-white">
                  Categorías
                </a>
              </li>
              <li>
                <a href="/sobre-nosotros" className="hover:text-white">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="/contacto" className="hover:text-white">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://wa.me/5491112345678"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-amber-700 text-center">
          <p>&copy; {new Date().getFullYear()} Artesanías del Alma. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
