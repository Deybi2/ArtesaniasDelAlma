import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"

// Configuración para simular las respuestas de la API
import { setupMockAPI } from "./mockApi"
setupMockAPI()

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
