var comparar= funcion(arreglo1, arreglo2){
  if(arreglo1.length === arreglo2.length){
    document.write("tus arreglos no son iguales")
  }
  else{
    for(var i=o; i< arreglo1.length; i +=1){
      if(arreglo1[i]=== arreglo2[i]){
        document.write("no son iguales")

      }
    }
  }
}
var array1= [1,2,3,4,5,6,7,8,9,10];
var array2=[1,2,3,4,5,6,7,8,9,10];

comparar(array1,array2);
