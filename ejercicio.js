const contador = 1;
if(true){
  const contador = 5;
  console.log(contador);
}
console.log(contador);

const persona = {
  nombre: "Immer",
  apellido: "Guevara"
}

persona.nombre = "Immer";
console.log(persona.nombre);

//objetos literales y Opcional chaining operator

const frutas = ["pera", "manzana", "sandia"];
console.log(frutas[2]); 

//Objetos literales, no indexados 
const animal = {
  color: "naranja",
  nombre: "simba",
  rugiendo: true
}

console.log("Este león es color:" + animal.color);
console.log("y su nombre es:" + animal.nombre);

console.log(animal["rugiendo"]);

const tareas = {
  "2359-91k83204u23rhrefiu" : {
    title: "tarea #01"
  }
}

console.log(tareas["2359-91k83204u23rhrefiu"].title);

const animal = {
  color: "naranja",
  nombre: "Simba",
  rugiendo: true,
  favoritos:{
    dia: {
      ok: true,
    },
    noche:{
      ok: false
    }
  }
}

console.log(animal.favoritos.luna?.ok);

const animal = {
  color: "naranja",
  nombre: "Simba",
  rugiendo: true,
  favoritos:{
    dia: {
      ok: true,
    },
    noche:{
      ok: false
    }
  }
}

console.log(animal.favoritos.dia.ok);


//destructurin
const animal = {
  color: "naranja",
  nombre: "Simba",
  rugiendo: true,
  favoritos:{
    dia: {
      ok: true,
    },
    noche:{
      ok: false
    }
  }
}

//guardar el valor de la propiedad en una constante 
const color = animal.color;
const nombre = animal.nombre;

console.log("Color:" + color + ", animal:" + nombre); 


const animal = {
  color: "Azul",
  nombre: "Torogoz",
  volando: true
}

//destructuring
const {color,nombre,volando} = animal;

console.log("El " + nombre + "es de color " + color);

//arrays indexados
const frutas = ["pera", "manzana", "sandia"];

//destructuring arrays

const [pera, manzana, sandia] = frutas;
console.log("A mi me gusta mucho la pera")

//Interpolacion, operador ternario