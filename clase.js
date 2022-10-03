class Animal{
    constructor(nombre, dueña,raza,edad,actividades,comida, veterinario, vacunas) {
        this.nombre = nombre; // va asignación porque es una variable
        this.dueña  = dueña;
        this.raza   = raza;
        this.edad   = edad;
        this.actividades = actividades;
        this.comida = comida;
        this.veterinario = veterinario;
        this.vacunas = vacunas;
        
    }
 
}
let paris = new Animal("Paris","Sofía","Siamés peludo","1 año","Jugar a las escondidas","Croquetas de pollo","Cada 3 meses","Todas");
console.log(paris);
//inner.html inyecta info en la etiqueta seleccionada
document.querySelector("li").innerHTML = `Nombre: ${paris.nombre} </br> Dueña: ${paris.dueña} </br> Raza: ${paris.raza} </br> Edad: ${paris.edad} </br> Actividades: ${paris.actividades} </br> Comida: ${paris.comida} </br> Visita al veterinario: ${paris.veterinario} </br> Vacunas: ${paris.vacunas}`;