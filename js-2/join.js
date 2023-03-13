function join(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
      if (i === arr.length - 1) {
        str += arr[i];
      } else {
        str += arr[i] + " ";
      }
    }
    return str;
  }

  const arr1 = ["Probando", "estoy", "probando", "!"];
  const arr2 = ["Esto", "es", "otra", "prueba"];
  console.log(join(arr1)); 
  console.log(join(arr2)); 