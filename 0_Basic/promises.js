//funciones
//se crea una promesa que indica el estado del proceso.
//en vez de devolver callback se usara promesa
function hola(nombres){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log('hola, '+ nombres[0] + nombres [1]);
            resolve(nombres);
        },1000);
    });
}
function hablar(nombres) {
    return new Promise((resolve,reject)=>{
        setTimeout(function () {
            console.log('bla bla bla bla,' + nombres[0] + nombres[1]);
            resolve(nombres);
        },1000);
    });
}
function adios(nombre) {
    return new Promise((resolve,reject)=>{
        setTimeout(function () {
            console.log('adios',nombre);
            resolve(nombre);
        },1000);
    });
}

let names = ["ab", "cd"];

//lo que se ejecutara....
console.log('Iniciando el Proceso...')
hola(names)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then((nombres) => adios(nombres[0]))
    .then((nombre)=>{
        console.log('Terminando Proceso');
    })

//cualquier hilo de ejcucion lo llevará al catch para ejecutar su funcion
//console
    .catch(error =>{
        console.error('ha habido un error');
        console.error(error);
    })