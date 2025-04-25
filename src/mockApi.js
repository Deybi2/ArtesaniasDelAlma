// Este archivo configura un mock de la API para desarrollo

export function setupMockAPI() {
  // Datos de ejemplo
  const productos = [
    {
      id: 1,
      nombre: "Maceta de cerámica pintada a mano",
      imagen: "https://us.123rf.com/450wm/riderfoot/riderfoot1901/riderfoot190100573/121531874-souvenirs-de-cerámica-de-cuba.jpg?ver=6",
      precio: 2500,
      descripcion: "Maceta artesanal hecha en barro cocido, ideal para suculentas.",
      categoria: "Cerámica",
    },
    {
      id: 2,
      nombre: "Tapiz tejido a telar",
      imagen: "https://us.123rf.com/450wm/hibrida/hibrida2001/hibrida200100020/139502220-patrón-creativo-de-patchwork-sin-costuras-con-motivos-geométricos-africanos.jpg?ver=6",
      precio: 4800,
      descripcion: "Tapiz decorativo con diseños geométricos en colores tierra.",
      categoria: "Tejidos",
    },
    {
      id: 3,
      nombre: "Lámpara de mesa artesanal",
      imagen: "https://us.123rf.com/450wm/gudella/gudella2011/gudella201100030/158671840-lámpara-en-una-mesita-de-noche.jpg?ver=6",
      precio: 3600,
      descripcion: "Lámpara de mesa con base de cerámica y pantalla de fibras naturales.",
      categoria: "Decoración",
    },
    {
      id: 4,
      nombre: "Tazas de cerámica esmaltada",
      imagen: "https://us.123rf.com/450wm/alexsfoto/alexsfoto1806/alexsfoto180600007/103634100-tazas-nuevas-sobre-un-tocón-de-madera-con-una-flor-roja-sobre-un-fondo-de-tela-gris-naturaleza.jpg?ver=6",
      precio: 1800,
      descripcion: "Set de 2 tazas de cerámica con esmalte reactivo, cada pieza es única.",
      categoria: "Cerámica",
    },
    {
      id: 5,
      nombre: "Cojín tejido a mano",
      imagen: "https://us.123rf.com/450wm/leadenpork/leadenpork1711/leadenpork171100083/90008415-almohada-tejida-en-un-fondo-de-madera.jpg?ver=6",
      precio: 2200,
      descripcion: "Cojín decorativo tejido con lana natural y teñido con tintes vegetales.",
      categoria: "Tejidos",
    },
    {
      id: 6,
      nombre: "Centro de mesa de madera",
      imagen: "https://us.123rf.com/450wm/shuravi07/shuravi071609/shuravi07160900013/63891310-rose-forjada-a-partir-de-acero-sobre-una-tabla-de-madera-la-forja-manual-la-rosa-se-puede-colgar.jpg?ver=6",
      precio: 3200,
      descripcion: "Centro de mesa tallado a mano en madera de algarrobo.",
      categoria: "Decoración",
    },
    {
      id: 7,
      nombre: "Collar de cerámica y cuero",
      imagen: "https://us.123rf.com/450wm/tallula/tallula1910/tallula191000611/131912361-fragmento-de-un-collar-de-perlas-de-madera-sobre-un-fondo-oscuro-cerrar.jpg?ver=6",
      precio: 1500,
      descripcion: "Collar con cuentas de cerámica hechas a mano y cordón de cuero.",
      categoria: "Joyería",
    },
    {
      id: 8,
      nombre: "Bandeja de madera tallada",
      imagen: "https://us.123rf.com/450wm/zabiyashka/zabiyashka1903/zabiyashka190300005/119654099-patrón-grabado-en-el-cuero-en-el-taller.jpg?ver=6",
      precio: 2800,
      descripcion: "Bandeja decorativa tallada a mano con motivos florales.",
      categoria: "Madera",
    },
    {
      id: 9,
      nombre: "Móvil decorativo de cerámica",
      imagen: "https://us.123rf.com/450wm/realityimages/realityimages1904/realityimages190400347/121453891-campanas-de-viento-de-tierra-en-pune-en-maharashtra-india.jpg?ver=6",
      precio: 2100,
      descripcion: "Móvil decorativo con piezas de cerámica esmaltada.",
      categoria: "Decoración",
    },
  ]

  const categorias = ["Cerámica", "Tejidos", "Decoración", "Joyería", "Madera"]

  // Configurar interceptores de fetch para simular la API
  const originalFetch = window.fetch

  window.fetch = async (url, options) => {
    // Simular retraso de red
    await new Promise((resolve) => setTimeout(resolve, 500))

    if (url === "/api/productos") {
      return new Response(JSON.stringify(productos), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      })
    }

    if (url.match(/\/api\/productos\/\d+/)) {
      const id = Number.parseInt(url.split("/").pop())
      const producto = productos.find((p) => p.id === id)

      if (producto) {
        return new Response(JSON.stringify(producto), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        })
      } else {
        return new Response(JSON.stringify({ error: "Producto no encontrado" }), {
          status: 404,
          headers: { "Content-Type": "application/json" },
        })
      }
    }

    if (url === "/api/categorias") {
      return new Response(JSON.stringify(categorias), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      })
    }

    if (url === "/api/contacto" && options?.method === "POST") {
      return new Response(JSON.stringify({ message: "Mensaje recibido correctamente" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Para cualquier otra URL, usar el fetch original
    return originalFetch(url, options)
  }
}
