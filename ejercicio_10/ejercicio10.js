// Creando la aplicación Vue
const app = Vue.createApp({
    // Definición de las propiedades reactivas
    data() {
        return {
            valor: '', // Almacena el valor ingresado por el usuario
            mensaje: '' // Almacena el mensaje que se muestra cuando el valor cambia
        };
    },
    // Watcher para detectar cambios en la variable "valor"
    watch: {
        valor(nuevoValor) {
            // Se ejecuta cada vez que "valor" cambia
            this.mensaje = `El valor ha cambiado a: ${nuevoValor}`;
        }
    }
});

// Montando la aplicación en el elemento con id="app"
app.mount('#app');
