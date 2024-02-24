/**
 * @file
 * @author Davide Sabia <davidesabia22@gmail.com>
 * @description Il merge sort è un algoritmo di ordinamento stabile che utilizza la tecnica del divide et impera per ordinare una sequenza. È noto per la sua stabilità e prestazioni affidabili.
 */

/** 
 * @function mergeSort
 * @param {Array} A - L'array da ordinare.
 * @param {number} p - L'indice di partenza dell'array.
 * @param {number} r - L'indice di fine dell'array.
 * @returns {void} - Non restituisce nulla. Modifica direttamente l'array fornito.
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
