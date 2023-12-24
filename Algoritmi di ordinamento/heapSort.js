/**
 * @author Davide Sabia <davidesabia22@gmail.com>
 * @description L'Heap Sort è un algoritmo di ordinamento basato su una struttura dati chiamata heap. È noto per la sua efficienza e capacità di ordinare sequenze in loco.
 * @param {Array} A 
 * @returns
 */

function left(i) {
    return 2 * i + 1;
}

function right(i) {
    return 2 * i + 2;
}

function maxHeapify(A, heapSize, i) {
    const l = left(i);
    const r = right(i);
    let max = i;

    if (l < heapSize && A[l] > A[max]) {
        max = l;
    }

    if (r < heapSize && A[r] > A[max]) {
        max = r;
    }

    if (max !== i) {
        const temp = A[i];
        A[i] = A[max];
        A[max] = temp;
        maxHeapify(A, heapSize, max);
    }
}

function buildMaxHeap(A) {
    let heapSize = A.length;
    for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
        maxHeapify(A, heapSize, i);
    }
}

function heapSort(A) {
    let heapSize = A.length;
    buildMaxHeap(A);
    for (let i = heapSize - 1; i > 0; i--) {
        [A[0], A[i]] = [A[i], A[0]];
        heapSize = heapSize - 1;
        maxHeapify(A, i, 0);
    }
}

const A = [10, 21, 30, 19, 23, 12];
buildMaxHeap(A)
console.log("Risultati: ", A);