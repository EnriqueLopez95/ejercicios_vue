// Crear la aplicación Vue
const { createApp, ref } = Vue;

createApp({
    // Definir el componente 'toggle-mensaje'
    components: {
        'toggle-mensaje': {
            template: `
                <div>
                    <!-- Botón para mostrar/ocultar el mensaje -->
                    <button @click="toggleVisibilidad">
                        {{ esVisible ? 'Ocultar' : 'Mostrar' }} Mensaje
                    </button>
                    <!-- Mensaje que se muestra o se oculta -->
                    <p v-if="esVisible">¡Hola! Este es un mensaje de prueba.</p>
                </div>
            `,
            setup() {
                // Usamos ref para manejar la visibilidad del mensaje
                const esVisible = ref(false);

                // Función para cambiar el estado de visibilidad
                const toggleVisibilidad = () => {
                    esVisible.value = !esVisible.value;
                };

                // Retornamos el estado y la función para usarlos en el template
                return { esVisible, toggleVisibilidad };
            }
        }
    }
}).mount('#app');
