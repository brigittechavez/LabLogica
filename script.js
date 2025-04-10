//Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
//Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
//Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
//Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.

document.getElementById('iniciar').addEventListener('click', function () {
    let num1, num2, num3;
    let valido = false;

    while (!valido) {
        num1 = Number(prompt("Ingresa el primer número:"));
        num2 = Number(prompt("Ingresa el segundo número:"));
        num3 = Number(prompt("Ingresa el tercer número:"));

        if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
            valido = true;
        } else {
            alert("Solo se permiten números. Intenta de nuevo.");
        }
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "";

    const pIngresados = document.createElement('p');
    pIngresados.textContent = "Números ingresados: " + num1 + ", " + num2 + ", " + num3;
    resultado.appendChild(pIngresados);

    if (num1 === num2 && num2 === num3) {
        const pIguales = document.createElement('p');
        pIguales.textContent = "Los tres números son iguales.";
        resultado.appendChild(pIguales);
        console.log("Los tres números son iguales.");
    } else {
        let mayor, medio, menor;

        if (num1 >= num2 && num1 >= num3) {
            mayor = num1;
            medio = num2 >= num3 ? num2 : num3;
            menor = num2 < num3 ? num2 : num3;
        } else if (num2 >= num1 && num2 >= num3) {
            mayor = num2;
            medio = num1 >= num3 ? num1 : num3;
            menor = num1 < num3 ? num1 : num3;
        } else {
            mayor = num3;
            medio = num1 >= num2 ? num1 : num2;
            menor = num1 < num2 ? num1 : num2;
        }

        const pMenorMayor = document.createElement('p');
        pMenorMayor.textContent = "De menor a mayor: " + menor + ", " + medio + ", " + mayor;
        resultado.appendChild(pMenorMayor);

        const pDatos = document.createElement('p');
        pDatos.textContent = "Mayor: " + mayor + " | Medio: " + medio + " | Menor: " + menor;
        resultado.appendChild(pDatos);

        console.log("De mayor a menor:", mayor, medio, menor);
        console.log("De menor a mayor:", menor, medio, mayor);
        console.log("Mayor:", mayor);
        console.log("Medio:", medio);
        console.log("Menor:", menor);
    }
});
