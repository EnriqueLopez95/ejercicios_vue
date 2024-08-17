// Crear la aplicación Vue
const { createApp, ref } = Vue;

createApp({
    // Definir el componente 'calculadora'
    components: {
        'calculadora': {
            template: `
                <div>
                    <!-- Inputs para ingresar los números -->
                    <input v-model.number="numero1" type="number" placeholder="Número 1" />
                    <input v-model.number="numero2" type="number" placeholder="Número 2" />
                    
                    <!-- Botones para las operaciones -->
                    <button @click="operacion('sumar')">Sumar</button>
                    <button @click="operacion('restar')">Restar</button>
                    <button @click="operacion('multiplicar')">Multiplicar</button>
                    <button @click="operacion('dividir')">Dividir</button>
                    
                    <!-- Mostrar el resultado de la operación -->
                    <p>Resultado: {{ resultado }}</p>
                </div>
            `,
            setup() {
                // Variables para almacenar los números y el resultado
                const numero1 = ref(0);
                const numero2 = ref(0);
                const resultado = ref(0);

                // Función para manejar las operaciones según el tipo
                const operacion = (tipo) => {
                    if (tipo === 'sumar') {
                        resultado.value = numero1.value + numero2.value;
                    } else if (tipo === 'restar') {
                        resultado.value = numero1.value - numero2.value;
                    } else if (tipo === 'multiplicar') {
                        resultado.value = numero1.value * numero2.value;
                    } else if (tipo === 'dividir') {
                        // Evitar la división por cero
                        resultado.value = numero2.value !== 0 ? numero1.value / numero2.value : 'Error';
                    }
                };

                // Retornar las variables y la función para usarlas en el template
                return { numero1, numero2, resultado, operacion };
            }
        }
    }
}).mount('#app');
