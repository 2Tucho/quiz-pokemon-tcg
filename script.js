document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // paraliza envío formulario

    // Creamos las variables que van a guardar las respuestas que se manden con el formulario
    const respuestaPregunta1 = event.target.primerRey.value;
    const respuestaPregunta2 = event.target.numeroEnanos.value;
    const respuestaPregunta3 = event.target.motivoAyuda.value;
    const respuestaPregunta4 = event.target.ejercitosParticipantes.value;
    const respuestaPregunta5 = event.target.nombreBosque.value;

    console.log("--------------------------")

    // Respuestas correctas
    const respuestasCorrectas = {
        primerRey: "thrain",
        numeroEnanos: "13",
        motivoAyuda: "derrotarSmaug",
        ejercitosParticipantes: "cambiapielesCarroca",
        nombreBosque: "bosqueNegro"
    }

    let errores = "";

    /* LÓGICA DE VALIDACIÓN */

    // Todas las preguntas deben ser contestadas o dará error
    if ((erebor1.checked) || (erebor2.checked) || (erebor3.checked) || (erebor4.checked)) {
    }
    else { errores += " · Te falta por escoger una opción en la primera pregunta\n "; }

    if ((enanos1.checked) || (enanos2.checked) || (enanos3.checked) || (enanos4.checked)) {
    }
    else { errores += "· Te falta por escoger una opción en la segunda pregunta\n "; }

    if ((motivo1.checked) || (motivo2.checked) || (motivo3.checked) || (motivo4.checked)) {
    }
    else { errores += "· Te falta por escoger una opción en la tercera pregunta\n "; }

    if ((ejercito1.checked) || (ejercito2.checked) || (ejercito3.checked) || (ejercito4.checked)) {
    }
    else { errores += "· Te falta por escoger una opción en la cuarta pregunta\n "; }

    if ((bosque1.checked) || (bosque2.checked) || (bosque3.checked) || (bosque4.checked)) {
    }
    else { errores += "· Te falta por escoger una opción en la quinta pregunta\n "; }

    // Comprobar si la respuesta seleccionada es la correcta o no
    if (respuestaPregunta1 == respuestasCorrectas.primerRey) {
        document.getElementById("ereborFieldset").style.backgroundColor = "green";
    } else {
        document.getElementById("ereborFieldset").style.backgroundColor = "red";
        //document.getElementsByClassName(label.className).style.color = "white"
    }
    //Que me ponga texto de que est'a bien abajo, o de que est'a mal

    if (respuestaPregunta2 == respuestasCorrectas.numeroEnanos) {
        document.getElementById("enanosFieldset").style.backgroundColor = "green";
    } else {
        document.getElementById("enanosFieldset").style.backgroundColor = "red";
    }

    if (respuestaPregunta3 == respuestasCorrectas.motivoAyuda) {
        document.getElementById("motivosFieldset").style.backgroundColor = "green";
    } else {
        document.getElementById("motivosFieldset").style.backgroundColor = "red";
    }

    if (respuestaPregunta4 == respuestasCorrectas.ejercitosParticipantes) {
        document.getElementById("ejercitosFieldset").style.backgroundColor = "green";
    } else {
        document.getElementById("ejercitosFieldset").style.backgroundColor = "red";
    }

    if (respuestaPregunta5 == respuestasCorrectas.nombreBosque) {
        document.getElementById("bosqueFieldset").style.backgroundColor = "green";
    } else {
        document.getElementById("bosqueFieldset").style.backgroundColor = "red";
    }

    // Comprobación final
    if (errores) {
        alert("Por favor, selecciona una opción de las siguientes preguntas:\n" + errores);
        document.ResultadoForm = false;
    }
    else document.ResultadoForm = true;
});

function selectLabel(label) {
    let allLabels = document.getElementsByClassName(label.className);
    for (let i = 0; i < allLabels.length; i++) {
        let element = allLabels[i];
        if (element !== label) {
            element.style.color = "white";
        }
    }
    label.style.color = "yellow";
}