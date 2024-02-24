/**
 * @file
 * @author Davide Sabia <davidesabia22@gmail.com>
 * @description Implementa l'algoritmo di ordinamento Insertion Sort che costruisce una sequenza ordinata uno alla volta. È particolarmente utile per piccoli insiemi di dati.
 */

/**
 * @function insertionSort
 * @description Implementa l'algoritmo di ordinamento Insertion Sort. Costruisce una sequenza ordinata uno alla volta. È particolarmente utile per piccoli insiemi di dati.
 * @param {Array} A - L'array da ordinare.
 * @param {number} n - La lunghezza dell'array.
 * @returns {void} La funzione non restituisce nulla ma modifica l'array originale per ordinarlo.
 */
function insertionSort(A, n) {
    let i, key, j;

    for (i = 1; i < n; i++) {
        key = A[i];
        j = i - 1;

        while (j >= 0 && A[j] > key) {
            A[j + 1] = A[j];
            j = j - 1;
        }

        A[j + 1] = key;
    }
}

module.exports = insertionSort;