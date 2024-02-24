/**
 * @file
 * @author Davide Sabia <davidesabia22@gmail.com>
 * @description Il Quick Sort è un algoritmo di ordinamento rapido basato sul paradigma divide et impera. È noto per la sua efficienza e ampiamente utilizzato in molte librerie di programmazione.
 */

/**
 * @function quickSort
 * @param {Array} A - L'array da ordinare.
 * @param {number} p - L'indice iniziale dell'array da ordinare.
 * @param {number} r - L'indice finale dell'array da ordinare.
 * @returns {void} - Questa funzione non restituisce nulla; modifica l'array in-place.
 */
const partition = require('./partition');

function quickSort(A, p, r) {
    if (p < r) {
        let q = partition(A, p, r);
        quickSort(A, p, q - 1);
        quickSort(A, q + 1, r);
    }
}

module.exports = quickSort;
