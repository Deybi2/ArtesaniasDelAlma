"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido"
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "El email no es válido"
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es requerido"
    } else if (formData.mensaje.length < 10) {
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulating API call
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        setFormData({
          nombre: "",
          email: "",
          mensaje: "",
        })

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false)
        }, 5000)
      } else {
        throw new Error("Error al enviar el formulario")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-amber-900 text-center">Contacto</h1>

      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 bg-amber-100 p-8">
            <h2 className="text-2xl font-semibold mb-4 text-amber-800">Escríbenos</h2>
            <p className="text-gray-700 mb-6">
              ¿Tienes alguna pregunta o comentario? Nos encantaría saber de ti. Completa el formulario y te
              responderemos a la brevedad.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-amber-200 p-2 rounded-full mr-3">
                  <Send size={18} className="text-amber-800" />
                </div>
                <div>
                  <h3 className="font-medium text-amber-800">Email</h3>
                  <p className="text-gray-600">info@artesaniasdelalma.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-200 p-2 rounded-full mr-3">
                  <Send size={18} className="text-amber-800" />
                </div>
                <div>
                  <h3 className="font-medium text-amber-800">Teléfono</h3>
                  <p className="text-gray-600">+54 9 11 1234-5678</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-200 p-2 rounded-full mr-3">
                  <Send size={18} className="text-amber-800" />
                </div>
                <div>
                  <h3 className="font-medium text-amber-800">Dirección</h3>
                  <p className="text-gray-600">Calle Artesanos 123, Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 p-8">
            {submitSuccess ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                <p>¡Mensaje enviado con éxito! Te contactaremos pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-md focus:ring-amber-500 focus:border-amber-500 ${
                      errors.nombre ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.nombre && <p className="mt-1 text-sm text-red-500">{errors.nombre}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-md focus:ring-amber-500 focus:border-amber-500 ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows="5"
                    value={formData.mensaje}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-md focus:ring-amber-500 focus:border-amber-500 ${
                      errors.mensaje ? "border-red-500" : "border-gray-300"
                    }`}
                  ></textarea>
                  {errors.mensaje && <p className="mt-1 text-sm text-red-500">{errors.mensaje}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-md font-medium flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
