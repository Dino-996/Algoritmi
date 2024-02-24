/**
 * @file
 * @author Davide Sabia <davidesabia22@gmail.com>
 * @description Questa funzione combina due sotto-array ordinati (definiti dagli indici p, q, r) in un unico array ordinato. Modifica l'array originale.
 */

/** 
 * @function merge
 * @param {Array} A - L'array che contiene i sotto-array da unire.
 * @param {number} p - L'indice iniziale del primo sotto-array.
 * @param {number} q - L'indice finale del primo sotto-array e l'indice iniziale del secondo sotto-array.
 * @param {number} r - L'indice finale del secondo sotto-array.
 * @returns {void} - Questa funzione non restituisce nulla; modifica l'array in-place.
*/
function merge(A, p, q, r) {

    let n1 = q - p + 1;
    let n2 = r - q;
    let L = new Array(n1);
    let R = new Array(n2);

    for (let i = 0; i < n1; i++) {
        L[i] = A[p + i];
    }

    for (let j = 0; j < n2; j++) {
        R[j] = A[q + 1 + j];
    }

    let i = 0;
    let j = 0;
    let k = p;

    while (i < n1 && j < n2) {

        if (L[i] <= R[j]) {
            A[k] = L[i];
            i++;
        }

        else {
            A[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        A[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        A[k] = R[j];
        j++;
        k++;
    }
}

module.exports = merge;
