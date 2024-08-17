// Crear la aplicación Vue
const { createApp, ref } = Vue;

createApp({
    // Definir el componente 'mostrar-input'
    components: {
        'mostrar-input': {
            template: `
                <div>
                    <!-- Input para ingresar texto -->
                    <input v-model="mensaje" placeholder="Escribe algo..." />
                    <!-- Botón para mostrar el valor del input en una alerta -->
                    <button @click="mostrarAlerta">Mostrar Valor</button>
                </div>
            `,
            setup() {
                // Variable para almacenar el valor del input
                const mensaje = ref('');

                // Función para mostrar el valor del input en una alerta
                const mostrarAlerta = () => {
                    alert(mensaje.value); // Mostrar el valor del input
                };

                // Retornamos la variable y la función para usarlas en el template
                return { mensaje, mostrarAlerta };
            }
        }
    }
}).mount('#app');
