/**
 * @file
 * @author Davide Sabia <davidesabia22@gmail.com>
 * @description L'obiettivo della funzione è di mantenere la proprietà dell'heap massimo.
 */

 /**
 * @function maxHeapify
 * @param {Array} A - L'array rappresentante l'heap.
 * @param {number} heapSize - La dimensione attuale dell'heap.
 * @param {number} i - L'indice del nodo da cui iniziare il processo di massimizzazione.
 * @returns {void} - Non restituisce nulla. Modifica direttamente l'array fornito.
 */

function maxHeapify(A, heapSize, i) {
    let max = null;
    const l = left(i);
    const r = right(i);

    if (l < heapSize && A[l] > A[i]) {
        max = l;
    } else {
        max  = i;
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

/**
 * @function left
 * @description Restituisce l'indice del figlio sinistro del nodo all'indice i.
 * @param {number} i - L'indice del nodo.
 * @returns {number} - L'indice del figlio sinistro.
 */

function left(i) {
    return 2 * i + 1;
}

/**
 * @function right
 * @description Restituisce l'indice del figlio destro del nodo all'indice i.
 * @param {number} i - L'indice del nodo.
 * @returns {number} - L'indice del figlio destro.
 */

function right(i) {
    return 2 * i + 2;
}

module.exports = maxHeapify;