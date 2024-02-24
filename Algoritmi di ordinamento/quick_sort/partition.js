/**
 * @file
 * @author Davide Sabia <davidesabia22@gmail.com>
 * @description Questa funzione partiziona un array in due parti, in modo che tutti gli elementi a sinistra del pivot siano minori del pivot e tutti gli elementi a destra del pivot siano maggiori del pivot. Il pivot è l'ultimo elemento dell'array.
 */

/** 
* @function partition
* @param {Array} A - L'array da partizionare.
* @param {number} p - L'indice iniziale da cui iniziare la partizione.
* @param {number} r - L'indice finale dell'array, che funge anche da pivot.
* @returns {number} - Restituisce l'indice del pivot nell'array partizionato.
*/
function partition(A, p, r) {

    let pivot = A[r];
    let i = p - 1;

    for (let j = p; j <= r - 1; j++) {

        if (A[j] < pivot) {
            i = i + 1;
            [A[i], A[j]] = [A[j], A[i]];
        }
    }

    [A[i + 1], A[r]] = [A[r], A[i + 1]];
    return i + 1;
}

module.exports = partition;
