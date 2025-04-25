export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-amber-900 text-center">Sobre Nosotros</h1>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
        <img
          src="https://us.123rf.com/450wm/gorodenkoff/gorodenkoff2402/gorodenkoff240202058/225018246-carpintero-poniéndose-gafas-para-comprobar-el-manual-de-diseño-de-una-elegante-silla-de-madera-hecha.jpg?ver=6"
          alt="Nuestro taller"
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-amber-800">Nuestra Historia</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Artesanías del Alma nació en 2010 como un pequeño emprendimiento familiar en un pueblo del interior de
          Argentina. Lo que comenzó como un hobby se transformó en una pasión que hoy compartimos con clientes de todo
          el país.
        </p>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Nuestra misión es preservar las técnicas artesanales tradicionales y adaptarlas al diseño contemporáneo,
          creando piezas únicas que combinan lo mejor de ambos mundos: la calidez de lo hecho a mano y la estética
          moderna que se integra en cualquier hogar.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-amber-800 mt-10">Nuestros Artesanos</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Contamos con un equipo de artesanos apasionados, cada uno especializado en diferentes técnicas y materiales.
          Desde ceramistas que dominan el torno y el modelado a mano, hasta tejedores que rescatan patrones ancestrales,
          cada uno aporta su talento único a nuestras colecciones.
        </p>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Todos nuestros productos son elaborados en pequeñas series o como piezas únicas, asegurando la máxima calidad
          y atención al detalle. Utilizamos materiales naturales y sostenibles, respetando el medio ambiente en cada
          paso de nuestro proceso creativo.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-amber-800 mt-10">Nuestros Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-amber-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2 text-amber-800">Autenticidad</h3>
            <p className="text-gray-700">Cada pieza refleja nuestra identidad y el amor por lo que hacemos.</p>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2 text-amber-800">Sostenibilidad</h3>
            <p className="text-gray-700">
              Utilizamos materiales naturales y procesos respetuosos con el medio ambiente.
            </p>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2 text-amber-800">Comunidad</h3>
            <p className="text-gray-700">Apoyamos a artesanos locales y promovemos el comercio justo.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
