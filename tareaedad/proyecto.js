/*Crear una función que calcule la edad de una persona. La función
  toma como parámetro el año de nacimiento y devuelve la edad 
  correspondiente. */

  function calculaedad(añoNacimiento) {
   
    var añoActual = new Date().getFullYear();

    var age = añoActual - añoNacimiento;

     alert("Tu edad es:"+age + " años");
}
calculaedad(2000); 