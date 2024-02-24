/**
 * @author Davide Sabia <davidesabia22@gmail.com>
 * @description La funzione costruisce un heap massimo da un array.
 * @param {Array} A
 * @param {number} heapSize
 * @returns
 */

const maxHeapify = require('./maxHeapify');

function buildMaxHeap(A, heapSize) {
    for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
        maxHeapify(A, heapSize, i);
    }
}

module.exports = buildMaxHeap;