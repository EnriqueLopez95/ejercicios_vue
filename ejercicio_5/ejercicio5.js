// Crear la aplicación Vue
const { createApp, ref } = Vue;

createApp({
    // Definir el componente 'lista-tareas'
    components: {
        'lista-tareas': {
            template: `
                <div>
                    <!-- Input para agregar nueva tarea -->
                    <input v-model="nuevaTarea" placeholder="Agregar nueva tarea" />
                    <!-- Botón para agregar la tarea a la lista -->
                    <button @click="agregarTarea">Agregar Tarea</button>

                    <!-- Mostrar la lista de tareas -->
                    <ul>
                        <li v-for="(tarea, index) in tareas" :key="index">
                            {{ tarea }}
                            <!-- Botón para eliminar la tarea de la lista -->
                            <button @click="eliminarTarea(index)">Eliminar</button>
                        </li>
                    </ul>
                </div>
            `,
            setup() {
                // Variable para almacenar la nueva tarea
                const nuevaTarea = ref('');
                // Lista de tareas
                const tareas = ref([]);

                // Función para agregar la tarea a la lista
                const agregarTarea = () => {
                    if (nuevaTarea.value.trim() !== '') {
                        tareas.value.push(nuevaTarea.value); // Agregar la tarea si no está vacía
                        nuevaTarea.value = ''; // Limpiar el input
                    }
                };

                // Función para eliminar una tarea por su índice
                const eliminarTarea = (index) => {
                    tareas.value.splice(index, 1); // Eliminar la tarea en el índice dado
                };

                // Retornar las variables y funciones para usarlas en el template
                return { nuevaTarea, tareas, agregarTarea, eliminarTarea };
            }
        }
    }
}).mount('#app');
