/**
 * @file
 * @author Davide Sabia <davidesabia22@gmail.com>
 * @description La funzione costruisce un heap massimo da un array.
 */

/**
 * @function
 * @param {Array} A - L'array da cui costruire l'heap massimo.
 * @param {number} heapSize - La dimensione attuale dell'heap.
 * @returns {void} - Non restituisce nulla. Modifica direttamente l'array fornito.
 */

const maxHeapify = require('./maxHeapify');

function buildMaxHeap(A, heapSize) {
    for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
        maxHeapify(A, heapSize, i);
    }
}

module.exports = buildMaxHeap;