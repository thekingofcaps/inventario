const fs = require("fs");

// URL base del repositorio, donde las imágenes están en la raíz
const baseUrl = "https://thekingofcaps.github.io/CATEGORIA-GORRAS-PRIME/";

// Genera `inventario.json` con las URLs de todas las imágenes .jpg en la raíz del directorio
function generarInventario() {
  // Lee todos los archivos de la raíz y filtra solo los .jpg
  const archivos = fs.readdirSync(".").filter(file => file.endsWith(".jpg"));
  
  const inventario = {
    categoria: "GORRAS PRIME",
    imagenes: archivos.map(file => baseUrl + file) // Genera URLs completas
  };

  // Guarda el archivo `inventario.json`
  fs.writeFileSync("inventario.json", JSON.stringify(inventario, null, 2));
  console.log("inventario.json generado correctamente");
}

generarInventario();
