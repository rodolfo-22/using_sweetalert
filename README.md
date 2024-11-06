# Proyecto de Alertas con SweetAlert2 en React

Este proyecto es una aplicación de ejemplo en React que demuestra el uso de [SweetAlert2](https://sweetalert2.github.io/) para crear popups personalizados y dinámicos. La aplicación incluye varias variantes de alertas, como alertas de éxito, error, entrada de datos, y más.

## Requisitos

- Node.js (versión 12 o superior)
- npm (o yarn, si prefieres)

## Instalación

1. **Clona el repositorio**:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_REPOSITORIO>
   ```

2. **Instala las dependencias**:

   ```bash
   npm install
   ```

3. **Instala SweetAlert2**:

   ```bash
   npm install sweetalert2
   ```

4. **Inicia la aplicación**:

   ```bash
   npm run dev
   ```

   La aplicación se ejecutará en `http://localhost:3000` o el puerto configurado en tu entorno.

## Funcionalidades

### Variantes de Alertas

En `App.js`, hemos implementado varias funciones que muestran diferentes tipos de alertas usando SweetAlert2. Cada una tiene un propósito y diseño único para que puedas entender cómo funcionan y personalizarlas.

### Descripción de cada variante

1. **Alerta de Éxito** (`handleSuccess`):  
   Muestra un popup básico de éxito.
   ```javascript
   const handleSuccess = () => {
     Swal.fire({
       icon: "success",
       title: "¡Operación exitosa!",
       text: "La acción se completó correctamente.",
     });
   };
   ```
   - **Uso**: Clic en el botón "Mostrar Éxito".
   - **Modificación**: Cambia `title` y `text` para personalizar el mensaje.

2. **Alerta de Error** (`handleError`):  
   Muestra un popup básico de error.
   ```javascript
   const handleError = () => {
     Swal.fire({
       icon: "error",
       title: "Error en la operación",
       text: "Ocurrió un problema al completar la acción.",
     });
   };
   ```
   - **Uso**: Clic en el botón "Mostrar Error".
   - **Modificación**: Cambia `title` y `text` para personalizar el mensaje.

3. **Simulación de Respuesta de Backend** (`simulateBackendResponse`):  
   Simula una llamada al servidor con un popup de carga y muestra el resultado al recibir la respuesta.
   ```javascript
   const simulateBackendResponse = async () => { ... }
   ```
   - **Uso**: Clic en el botón "Simular Respuesta del Backend".
   - **Modificación**: Cambia `backendResponse` para ajustar el mensaje simulado.

4. **Alerta con Campo de Entrada** (`showInputPopup`):  
   Muestra un popup con un campo de entrada para que el usuario ingrese su nombre.
   ```javascript
   const showInputPopup = () => { ... }
   ```
   - **Uso**: Clic en el botón "Mostrar Input".
   - **Modificación**: Cambia `inputPlaceholder` y `preConfirm` para validar o manejar otros tipos de datos.

5. **Alerta con Imagen Personalizada** (`showImageAlert`):  
   Muestra un popup con una imagen personalizada.
   ```javascript
   const showImageAlert = () => { ... }
   ```
   - **Uso**: Clic en el botón "Mostrar Imagen".
   - **Modificación**: Cambia `imageUrl`, `imageWidth`, y `imageHeight` para mostrar otra imagen.

6. **Alerta con Iconos y Botones Personalizados** (`showCustomIconsButtons`):  
   Muestra una alerta de confirmación con colores personalizados para los botones.
   ```javascript
   const showCustomIconsButtons = () => { ... }
   ```
   - **Uso**: Clic en el botón "Personalizar Iconos y Botones".
   - **Modificación**: Ajusta `confirmButtonColor`, `cancelButtonColor`, y `confirmButtonText` para personalizar los colores y textos de los botones.

7. **Alerta Temporal** (`showAutoCloseAlert`):  
   Muestra un popup que se cierra automáticamente después de un tiempo específico.
   ```javascript
   const showAutoCloseAlert = () => { ... }
   ```
   - **Uso**: Clic en el botón "Alerta Temporal".
   - **Modificación**: Cambia `timer` para ajustar el tiempo de cierre automático.

8. **Ejecutar Código al Cerrar** (`showAlertWithCallback`):  
   Ejecuta código al cerrarse el popup.
   ```javascript
   const showAlertWithCallback = () => { ... }
   ```
   - **Uso**: Clic en el botón "Ejecutar Código al Cerrar".
   - **Modificación**: Ajusta `willClose` y `didClose` para ejecutar funciones personalizadas antes y después de cerrar el popup.

## Personalización

Cada función de alerta en `App.js` se puede personalizar fácilmente cambiando los parámetros de configuración en los objetos de SweetAlert2. Consulta la [documentación de SweetAlert2](https://sweetalert2.github.io/) para ver todas las opciones disponibles y adaptar las alertas a tus necesidades.
