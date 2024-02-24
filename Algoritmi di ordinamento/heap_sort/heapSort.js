/**
 * @author Davide Sabia <davidesabia22@gmail.com>
 * @description L'Heap Sort è un algoritmo di ordinamento basato su una struttura dati chiamata heap. È noto per la sua efficienza e capacità di ordinare sequenze in loco.
 * @param {Array} A
 * @returns
 */

const buildMaxHeap = require('./buildMaxHeap');
const maxHeapify = require('./maxHeapify');

function heapSort(A) {
    let heapSize = A.length;
    buildMaxHeap(A, heapSize);
    for (let i = heapSize - 1; i > 0; i--) {
        [A[0], A[i]] = [A[i], A[0]];
        heapSize = heapSize - 1;
        maxHeapify(A, heapSize, 0);
    }
}

// Esempio di utilizzo
const A = [10, 9, 8, 7, 6, 12];
heapSort(A);
console.log("Array ordinato: ", A);