const form = document.getElementById('formulario');

form.addEventListener("submit", function(event){
    event.preventDefault();

const numeroA = document.getElementById('numeroA').value;
const numeroB = document.getElementById('numeroB').value;

    if  (numeroB > numeroA){
            return alert("Numero validado , pois numerob e maior que o numeroA");
    } else {
            return alert("Numero nao validado , pois o numeroA e maior que o numeroB");
    } 

});








