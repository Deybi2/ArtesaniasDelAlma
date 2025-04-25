import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { setupMockAPI } from "./mockApi"

// Configurar el mock de la API
setupMockAPI()

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
