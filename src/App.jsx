import { useState } from "react";
import Swal from "sweetalert2"; // Importación de SweetAlert2
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // Función para mostrar el popup de éxito
  const handleSuccess = () => {
    Swal.fire({
      icon: "success", // Tipo de ícono para indicar éxito
      title: "¡Operación exitosa!", // Título del popup
      text: "La acción se completó correctamente.", // Mensaje que muestra el popup
    });
  };

  // Función para mostrar el popup de error
  const handleError = () => {
    Swal.fire({
      icon: "error", // Tipo de ícono para indicar error
      title: "Error en la operación", // Título del popup
      text: "Ocurrió un problema al completar la acción.", // Mensaje que muestra el popup
    });
  };

  // Función para simular una llamada al backend
  const simulateBackendResponse = async () => {
    // Mostrar un popup de carga mientras espera la respuesta
    Swal.fire({
      title: "Cargando...",
      text: "Esperando respuesta del servidor",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    // Simulamos una llamada al backend con setTimeout
    setTimeout(() => {
      // Ejemplo de respuesta del backend
      const backendResponse = {
        success: true,
        message: "Datos recibidos correctamente desde el servidor",
      };

      // Cierra el popup de carga y muestra el resultado
      Swal.fire({
        icon: backendResponse.success ? "success" : "error", // Ícono según éxito o error
        title: backendResponse.success
          ? "Operación exitosa"
          : "Error en la operación",
        text: backendResponse.message, // Mensaje del backend
      });
    }, 2000); // Simula un retraso de 2 segundos
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      {/* Botón para mostrar el popup de éxito */}
      <button onClick={handleSuccess} className="success-button">
        Mostrar Éxito
      </button>

      {/* Botón para mostrar el popup de error */}
      <button onClick={handleError} className="error-button">
        Mostrar Error
      </button>
      {/* Botón para simular la llamada al backend */}
      <button onClick={simulateBackendResponse} className="backend-button">
        Simular Respuesta del Backend
      </button>
    </>
  );
}

export default App;
