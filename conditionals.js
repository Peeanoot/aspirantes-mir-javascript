function calcularColor(numero) {
    var color;
        if (numero === 1){
            color = "negro";
        } else if (numero === 2){
            color = "blanco";
        } else {
            color = "verde";
        }
        return "El color es " + color;
    }

    console.log(calcularColor(1));
    console.log(calcularColor(2));
    console.log(calcularColor(8));