// Crear la aplicación Vue
const { createApp, reactive } = Vue;

createApp({
    // Definir el componente 'bienvenida'
    components: {
        bienvenida: {
            template: `
                <div>
                    <!-- Mostrando el mensaje de bienvenida -->
                    <h1>Bienvenido, {{ state.nombre }}!</h1>
                </div>
            `,
            setup() {
                // Usando el método reactive para almacenar el nombre
                const state = reactive({
                    nombre: 'Enrique' // Aquí puedes cambiar el nombre
                });

                // Retornamos el estado para poder usarlo en el template
                return { state };
            }
        }
    }
}).mount('#app');
