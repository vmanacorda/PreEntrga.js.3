

const Doctor = function(nombre, apellido, especializacion){
    this.nombre= nombre
    this.apellido = apellido
    this.especializacion = especializacion
}
let doctor1  = new Doctor("Gomez","Juan","Medico clinico")
let doctor2  = new Doctor("martinez","gonzalo","Pediatra")
let doctor3  = new Doctor("lopes","carlos","Radiologo")
let doctor4 = new Doctor("perez","Monica","Oftalmologa")


let lista = [doctor1,doctor2,doctor3,doctor4]
lista.forEach( Doctor => {
    (`Nombre: ${Doctor.nombre}, Apellido: ${Doctor.apellido}, Especializacion: ${Doctor.especializacion}`);
})
function cargarDoctores() {
    const doctorSelect = document.getElementById("doctor");
   doctorSelect.innerHTML = '';

   // Crear una opción por cada doctor
   lista.forEach(doctor => {
       let option = document.createElement("option");
       option.value = doctor.nombre + " " + doctor.apellido;
       option.textContent = `${doctor.nombre} ${doctor.apellido} (${doctor.especializacion})`;
       doctorSelect.appendChild(option);
   });
}

document.addEventListener('DOMContentLoaded', function() {
   cargarDoctores();
});



