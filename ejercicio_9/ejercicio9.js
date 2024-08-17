// Creando la aplicación Vue
const app = Vue.createApp({
    // Definición de las propiedades reactivas
    data() {
        return {
            nombre: '', // Almacena el nombre ingresado por el usuario
            apellido: '' // Almacena el apellido ingresado por el usuario
        };
    },
    // Propiedad computada para generar el nombre completo
    computed: {
        nombreCompleto() {
            // Combina el nombre y el apellido en un solo string
            return `${this.nombre} ${this.apellido}`;
        }
    }
});

// Montando la aplicación en el elemento con id="app"
app.mount('#app');
