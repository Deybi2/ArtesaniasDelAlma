// Este archivo simula un backend con Express.js
// En un proyecto real, esto estaría en un repositorio separado

import express from "express"
const app = express()
const PORT = 3001

app.use(express.json())

// Datos de ejemplo
const productos = [
  {
    id: 1,
    nombre: "Maceta de cerámica pintada a mano",
    imagen: "/placeholder.svg?height=300&width=300",
    precio: 2500,
    descripcion: "Maceta artesanal hecha en barro cocido, ideal para suculentas.",
    categoria: "Cerámica",
  },
  {
    id: 2,
    nombre: "Tapiz tejido a telar",
    imagen: "/placeholder.svg?height=300&width=300",
    precio: 4800,
    descripcion: "Tapiz decorativo con diseños geométricos en colores tierra.",
    categoria: "Tejidos",
  },
  {
    id: 3,
    nombre: "Lámpara de mesa artesanal",
    imagen: "/placeholder.svg?height=300&width=300",
    precio: 3600,
    descripcion: "Lámpara de mesa con base de cerámica y pantalla de fibras naturales.",
    categoria: "Decoración",
  },
  {
    id: 4,
    nombre: "Tazas de cerámica esmaltada",
    imagen: "/placeholder.svg?height=300&width=300",
    precio: 1800,
    descripcion: "Set de 2 tazas de cerámica con esmalte reactivo, cada pieza es única.",
    categoria: "Cerámica",
  },
  {
    id: 5,
    nombre: "Cojín tejido a mano",
    imagen: "/placeholder.svg?height=300&width=300",
    precio: 2200,
    descripcion: "Cojín decorativo tejido con lana natural y teñido con tintes vegetales.",
    categoria: "Tejidos",
  },
  {
    id: 6,
    nombre: "Centro de mesa de madera",
    imagen: "/placeholder.svg?height=300&width=300",
    precio: 3200,
    descripcion: "Centro de mesa tallado a mano en madera de algarrobo.",
    categoria: "Decoración",
  },
  {
    id: 7,
    nombre: "Collar de cerámica y cuero",
    imagen: "/placeholder.svg?height=300&width=300",
    precio: 1500,
    descripcion: "Collar con cuentas de cerámica hechas a mano y cordón de cuero.",
    categoria: "Joyería",
  },
  {
    id: 8,
    nombre: "Bandeja de madera tallada",
    imagen: "/placeholder.svg?height=300&width=300",
    precio: 2800,
    descripcion: "Bandeja decorativa tallada a mano con motivos florales.",
    categoria: "Madera",
  },
  {
    id: 9,
    nombre: "Móvil decorativo de cerámica",
    imagen: "/placeholder.svg?height=300&width=300",
    precio: 2100,
    descripcion: "Móvil decorativo con piezas de cerámica esmaltada.",
    categoria: "Decoración",
  },
]

const categorias = ["Cerámica", "Tejidos", "Decoración", "Joyería", "Madera"]

// Endpoints
app.get("/api/productos", (req, res) => {
  res.json(productos)
})

app.get("/api/productos/:id", (req, res) => {
  const id = Number.parseInt(req.params.id)
  const producto = productos.find((p) => p.id === id)

  if (producto) {
    res.json(producto)
  } else {
    res.status(404).json({ error: "Producto no encontrado" })
  }
})

app.get("/api/categorias", (req, res) => {
  res.json(categorias)
})

app.post("/api/contacto", (req, res) => {
  // Simulamos el procesamiento del formulario
  console.log("Formulario recibido:", req.body)

  // Simulamos un pequeño retraso para mostrar el estado de carga
  setTimeout(() => {
    res.status(200).json({ message: "Mensaje recibido correctamente" })
  }, 1000)
})

app.listen(PORT, () => {
  console.log(`Servidor backend simulado corriendo en http://localhost:${PORT}`)
})
