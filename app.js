console.log("Iniciando job...");

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function main() {
    try {
        console.log("Procesando tarea...");
        
        await wait(5000); // Simula trabajo de 5 segundos
        
        console.log("Trabajo finalizado correctamente.");
        process.exit(0);
    } catch (error) {
        console.error("Error en el job:", error);
        process.exit(1);
    }
}

main();