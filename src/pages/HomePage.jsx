import { Link } from "react-router-dom"

export default function HomePage() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[500px] bg-amber-100">
        <img
          src="https://aprende.guatemala.com/wp-content/uploads/2022/06/Historia-del-Mercado-de-Artesan%C3%ADas-en-Guatemala-1.jpg"
          alt="Artesanías hechas a mano"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Artesanías del Alma</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">Artesanías únicas hechas a mano con amor</p>
          <Link
            to="/productos"
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md font-medium text-lg"
          >
            Ver Productos
          </Link>
        </div>
      </div>

      {/* Featured Categories */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">Nuestras Categorías</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://st3.depositphotos.com/1000528/36507/i/1600/depositphotos_365075352-stock-photo-street-market-exhibition-of-handmade.jpg" alt="Cerámica" className="w-full h-48 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-amber-800">Cerámica</h3>
                <p className="text-gray-600 mb-4">Piezas únicas de cerámica hechas y pintadas a mano</p>
                <Link to="/productos?categoria=Cerámica" className="text-amber-600 hover:text-amber-800 font-medium">
                  Ver productos
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://www.lifeder.com/wp-content/uploads/2017/10/artesania-caribenas-colombianas.jpg" alt="Tejidos" className="w-full h-48 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-amber-800">Tejidos</h3>
                <p className="text-gray-600 mb-4">Tejidos artesanales con técnicas tradicionales</p>
                <Link to="/productos?categoria=Tejidos" className="text-amber-600 hover:text-amber-800 font-medium">
                  Ver productos
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://tunegociobonito.com/wp-content/uploads/2022/03/muebles-madera-tienda-artesania.jpg.webp" alt="Decoración" className="w-full h-48 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-amber-800">Decoración</h3>
                <p className="text-gray-600 mb-4">Objetos decorativos para dar vida a tu hogar</p>
                <Link to="/productos?categoria=Decoración" className="text-amber-600 hover:text-amber-800 font-medium">
                  Ver productos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img
                src="https://estaticos-cdn.prensaiberica.es/clip/7ae205c1-d3e6-42d5-b771-001e8e8eedcd_16-9-discover-aspect-ratio_default_0.webp"
                alt="Artesanos trabajando"
                className="rounded-lg shadow-md w-full"
              />
            </div>

            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-amber-900">Nuestra Historia</h2>
              <p className="text-gray-700 mb-4">
                En Artesanías del Alma, creemos en preservar las técnicas tradicionales y el valor del trabajo hecho a
                mano. Cada pieza que creamos tiene una historia y un pedacito de nuestra pasión.
              </p>
              <p className="text-gray-700 mb-6">
                Nuestros artesanos trabajan con dedicación para crear piezas únicas que llevarán belleza y calidez a tu
                hogar.
              </p>
              <Link
                to="/sobre-nosotros"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-md font-medium"
              >
                Conoce más
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
