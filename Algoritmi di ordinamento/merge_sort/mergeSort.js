/**
 * @author Davide Sabia <davidesabia22@gmail.com>
 * @description Il merge sort è un algoritmo di ordinamento stabile che utilizza la tecnica del divide et impera per ordinare una sequenza. È noto per la sua stabilità e prestazioni affidabili.
 * @param {Array} A
 * @param {number} p
 * @param {number} r
 * @returns
 */

const merge = require('./merge');

function mergeSort(A, p, r) {
    if (p < r) {
        let q = Math.floor((p + r) / 2);
        mergeSort(A, p, q);
        mergeSort(A, q + 1, r);
        merge(A, p, q, r);
    }
}

// Esempio di utilizzo
const A = [12, 3, 7, 9];
const p = 0;
const r = A.length - 1;
mergeSort(A, p, r);
console.log("Array ordinato: ", A)