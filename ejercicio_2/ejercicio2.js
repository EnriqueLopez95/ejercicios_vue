// Crear la aplicación Vue
const { createApp, reactive } = Vue;

createApp({
    // Definir el componente 'contador'
    components: {
        contador: {
            template: `
                <div>
                    <!-- Mostrar el valor actual del contador -->
                    <p>Has hecho clic {{ state.contador }} veces.</p>
                    <!-- Botón para incrementar el contador -->
                    <button @click="incrementarContador">Haz clic aquí</button>
                </div>
            `,
            setup() {
                // Usando el método reactive para almacenar el contador
                const state = reactive({
                    contador: 0 // El contador empieza en 0
                });

                // Función para incrementar el contador
                const incrementarContador = () => {
                    state.contador++; // Sumar 1 al contador cada vez que se hace clic
                };

                // Retornamos el estado y la función para usarlos en el template
                return { state, incrementarContador };
            }
        }
    }
}).mount('#app');
