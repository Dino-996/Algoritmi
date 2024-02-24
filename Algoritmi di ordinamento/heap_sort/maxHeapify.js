/**
 * @author Davide Sabia <davidesabia22@gmail.com>
 * @description L’obiettivo della funzione è di mantenere la proprietà dell’heap massimo.
 * @param {Array} A
 * @returns {Array}
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
 * @author Davide Sabia <davidesabia22@gmail.com>
 * @description Restituisce l’indice del figlio sinistro del nodo all’indice i.
 * @param {number} i 
 * @returns {number}
 */

function left(i) {
    return 2 * i + 1;
}

/**
 * @author Davide Sabia <davidesabia22@gmail.com>
 * @description Restituisce l’indice del figlio destro del nodo all’indice i;
 * @param {number} i
 * @returns {number}
*/

function right(i) {
    return 2 * i + 2;
}

module.exports = maxHeapify;