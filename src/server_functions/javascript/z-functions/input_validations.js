
export function soloLetras (idInput) {
    const valorInput = idInput.value;
    let auxiliar = "";

    for (let i = 0; i < valorInput.length; i++) {
        if (/[^a-zA-ZáéíóúñÁÉÍÓÚÑ ]/.test(valorInput.charAt(i))) {
            idInput.setCustomValidity('Solo caracteres alfabéticos (A-Z)');
            idInput.reportValidity();
            break
        } 
        else {
            idInput.setCustomValidity('');
            idInput.reportValidity();
            auxiliar += valorInput.charAt(i)
        }
    }

    idInput.value = auxiliar
}   

export function soloNumeros (idInput) {
    const valorInput = idInput.value;
    let auxiliar = "";

    for (let i = 0; i < valorInput.length; i++) {
        if (/[^0-9]/.test(valorInput.charAt(i))) {
            idInput.setCustomValidity('Solo caracteres numéricos (0-9)');
            idInput.reportValidity();
            break
        }
        else {
            idInput.setCustomValidity('');
            idInput.reportValidity();
            auxiliar += valorInput.charAt(i)
        }
    }

    idInput.value = auxiliar
}

export function validarCantidad(idInput) {
    const cantidad = parseInt(idInput.value, 10);

    if (cantidad < 1) {
        idInput.setCustomValidity('La cantidad mínima es 1');
        idInput.reportValidity();
        idInput.value = 1;
    } else if (cantidad > 100) {
        idInput.setCustomValidity('La cantidad máxima permitida es 100');
        idInput.reportValidity();
        idInput.value = 100;
    } else {
        idInput.setCustomValidity('');
        idInput.reportValidity();
    }
}


export function etiquetasFixer (idInput) {
    const valorInput = idInput.value;
    let auxiliar = "";

    for (let i = 0; i < valorInput.length; i++) {
        if (/[^0-9a-zA-ZáéíóúñÁÉÍÓÚÑ¿?¡!"., ]/.test(valorInput.charAt(i))) {
            idInput.setCustomValidity('Caracteres peligrosos no permitidos (<`$>)');
            idInput.reportValidity();
            break
        }
        else {
            idInput.setCustomValidity('');
            idInput.reportValidity();
            auxiliar += valorInput.charAt(i)
        }
    }

    idInput.value = auxiliar
}

export function etiquetasFixerEmail (idInput) {
    const valorInput = idInput.value;
    let auxiliar = "";

    for (let i = 0; i < valorInput.length; i++) {
        if (/[^0-9a-zA-ZáéíóúñÁÉÍÓÚÑ¿?¡!.,@_-]/.test(valorInput.charAt(i))) {
            idInput.setCustomValidity('Caracteres peligrosos no permitidos (<`$>)');
            idInput.reportValidity();
            break
        }
        else {
            idInput.setCustomValidity('');
            idInput.reportValidity();
            auxiliar += valorInput.charAt(i)
        }
    }

    idInput.value = auxiliar
}

export function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if ( regex.test(correo.value) === false ) {
        correo.setCustomValidity('Pon una estructura de correo válida')
        correo.reportValidity()
        return false
    } else {
        return true
    }
}