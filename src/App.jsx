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
      icon: "success",
      title: "¡Operación exitosa!",
      text: "La acción se completó correctamente.",
    });
  };

  // Función para mostrar el popup de error
  const handleError = () => {
    Swal.fire({
      icon: "error",
      title: "Error en la operación",
      text: "Ocurrió un problema al completar la acción.",
    });
  };

  // Función para simular una llamada al backend
  const simulateBackendResponse = async () => {
    Swal.fire({
      title: "Cargando...",
      text: "Esperando respuesta del servidor",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    setTimeout(() => {
      const backendResponse = {
        success: true,
        message: "Datos recibidos correctamente desde el servidor",
      };

      Swal.fire({
        icon: backendResponse.success ? "success" : "error",
        title: backendResponse.success
          ? "Operación exitosa"
          : "Error en la operación",
        text: backendResponse.message,
      });
    }, 2000);
  };

  // Función para mostrar un popup con input
  const showInputPopup = () => {
    Swal.fire({
      title: "Ingresa tu nombre",
      input: "text",
      inputPlaceholder: "Escribe tu nombre aquí",
      showCancelButton: true,
      confirmButtonText: "Enviar",
      preConfirm: (name) => {
        if (!name) {
          Swal.showValidationMessage("Este campo es obligatorio");
        }
        return name;
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(`Hola, ${result.value}!`);
      }
    });
  };

  // Función para mostrar un popup con imagen personalizada
  const showImageAlert = () => {
    Swal.fire({
      title: "¡Mira esta imagen!",
      text: "Puedes personalizar el popup con cualquier imagen.",
      imageUrl:
        "https://drive.google.com/uc?export=view&id=1l9FPAOzeqX4ssRZTxFoWbFkDhZzFIdXl",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Imagen personalizada",
      confirmButtonText: "Cerrar",
    });
  };

  // Función para personalizar iconos y botones
  const showCustomIconsButtons = () => {
    Swal.fire({
      title: "¡Confirmación!",
      text: "¿Estás seguro de continuar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, adelante",
      cancelButtonText: "No, cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("¡Hecho!", "Has confirmado la acción.", "success");
      } else {
        Swal.fire("Acción cancelada", "No se realizó ningún cambio.", "info");
      }
    });
  };

  // Función para mostrar una alerta temporal
  const showAutoCloseAlert = () => {
    Swal.fire({
      title: "Auto Cierre",
      text: "Este popup se cerrará en 2 segundos.",
      timer: 2000,
      showConfirmButton: false,
      icon: "info",
    });
  };

  // Función para ejecutar código al cerrar el popup
  const showAlertWithCallback = () => {
    Swal.fire({
      title: "Cierra este popup",
      text: "Ejecuta un código al cerrarse",
      icon: "info",
      willClose: () => {
        console.log("El popup está por cerrarse");
      },
      didClose: () => {
        console.log("El popup se ha cerrado");
        alert("¡Popup cerrado! Código ejecutado correctamente.");
      },
    });
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

      {/* Botones para cada tipo de alerta */}
      <button onClick={handleSuccess} className="success-button">
        Mostrar Éxito
      </button>
      <button onClick={handleError} className="error-button">
        Mostrar Error
      </button>
      <button onClick={simulateBackendResponse} className="backend-button">
        Simular Respuesta del Backend
      </button>
      <button onClick={showInputPopup} className="input-button">
        Mostrar Input
      </button>
      <button onClick={showImageAlert} className="image-button">
        Mostrar Imagen
      </button>
      <button onClick={showCustomIconsButtons} className="custom-button">
        Personalizar Iconos y Botones
      </button>
      <button onClick={showAutoCloseAlert} className="auto-close-button">
        Alerta Temporal
      </button>
      <button onClick={showAlertWithCallback} className="callback-button">
        Ejecutar Código al Cerrar
      </button>
    </>
  );
}

export default App;
