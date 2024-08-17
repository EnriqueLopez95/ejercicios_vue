// Crear la aplicación Vue
const { createApp, ref } = Vue;

createApp({
    setup() {
        // Variable reactiva para almacenar la hora ingresada
        const horaIngresada = ref(0);

        // Variable reactiva para almacenar el saludo
        const saludo = ref('');

        // Función para obtener el saludo basado en la hora ingresada
        function obtenerSaludo(hora) {
            if (hora < 0 || hora > 23) {
                return 'Hora inválida. Ingresa una hora entre 0 y 23.'; // Mensaje para hora inválida
            } else if (hora < 12) {
                return '¡Buenos días!'; // Saludo para antes del mediodía
            } else if (hora < 18) {
                return '¡Buenas tardes!'; // Saludo para la tarde
            } else {
                return '¡Buenas noches!'; // Saludo para la noche
            }
        }

        // Función para actualizar el saludo basado en la hora ingresada
        const actualizarSaludo = () => {
            saludo.value = obtenerSaludo(horaIngresada.value); // Actualizar el saludo
        };

        // Retornar las variables y funciones para usarlas en el template
        return { horaIngresada, saludo, actualizarSaludo };
    }
}).mount('#app');
