// Suma sin bucle (repitiendo el codigo de forma manual)
var suma = 0;
suma = suma +1;
suma = suma +2;
suma = suma +3;
suma = suma +4;
console.log (suma)

//  FOR
for (var i=0 ; i<5 ; i++){
    suma = suma + i;
    console.log("Variable de interacion: ", i);
}
console.log("Variable suma: ", suma)
// Se utiliza cuando sabemos la cantida de pasos que queremos ejecutar, el segundo parametro o sea "i<5" en este caso, nos indica la cantidad maxima de pasos
// a ejecutar.

// WHILE
while (suma < 3){
    suma = suma + 1;
    console.log(suma);
}
// Se utiliza cuando no sabemos la cantidad de pasos que necesitaremos para finalizar la ejecucion.
// Se repetira hasta que la condicion o variable (si no entiendo mal) que establecimos se cumpla, en este caso es "3" cuando lleag a 3 finaliza la ejecucion.