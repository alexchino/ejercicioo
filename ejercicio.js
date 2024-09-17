// Variables const en diferentes bloques
const contador = 1;
if (true) {
  const contador = 5;
  console.log(contador); // 5
}
console.log(contador); // 1

// Objeto persona
const persona = {
  nombre: "alexander",
  apellido: "canales"
};

persona.nombre = "alexander";
console.log(persona.nombre); // Immer

// Acceso a elementos de un array
const frutas = ["pera", "manzana", "sandia"];
console.log(frutas[2]); // sandia

// Objetos literales y acceso a propiedades
const animal = {
  color: "naranja",
  nombre: "Simba",
  rugiendo: true
};

console.log("Este león es color: " + animal.color);
console.log("y su nombre es: " + animal.nombre);
console.log(animal["rugiendo"]); // true

// Uso del operador de encadenamiento opcional (?.)
const tareas = {
  "2359-91k83204u23rhrefiu": {
    title: "tarea #01"
  }
};

console.log(tareas["2359-91k83204u23rhrefiu"].title); // tarea #01

const animalConFavoritos = {
  color: "naranja",
  nombre: "Simba",
  rugiendo: true,
  favoritos: {
    dia: {
      ok: true
    },
    noche: {
      ok: false
    }
  }
};

console.log(animalConFavoritos.favoritos.luna?.ok); // undefined
console.log(animalConFavoritos.favoritos.dia.ok); // true

// Desestructuración de objetos
const { color, nombre } = animalConFavoritos;
console.log("Color: " + color + ", animal: " + nombre); // Color: naranja, animal: Simba

const otroAnimal = {
  color: "Azul",
  nombre: "Torogoz",
  volando: true
};

const { color: colorOtro, nombre: nombreOtro, volando } = otroAnimal;
console.log("El " + nombreOtro + " es de color " + colorOtro); // El Torogoz es de color Azul

// Desestructuración de arrays
const [pera, manzana, sandia] = frutas;
console.log("A mi me gusta mucho la pera"); // A mi me gusta mucho la pera

// Interpolación y operador ternario
const frutaFavorita = "pera";
console.log(`A mi me gusta mucho la ${frutaFavorita}`); // A mi me gusta mucho la pera

const esRugiendo = animal.rugiendo ? "sí" : "no";
console.log(`¿El animal está rugiendo? ${esRugiendo}`); // ¿El animal está rugiendo? sí
