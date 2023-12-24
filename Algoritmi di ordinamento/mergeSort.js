/**
 * @author Davide Sabia <davidesabia22@gmail.com>
 * @description Il Merge Sort è un algoritmo di ordinamento stabile che utilizza la tecnica del divide et impera per ordinare una sequenza. È noto per la sua stabilità e prestazioni affidabili.
 * @param {Array} A
 * @param {number} p
 * @param {number} q
 * @param {number} r
 * @returns
 */

function merge(A, p, q, r) {

    let n1 = q - p + 1;
    let n2 = r - q;
    let L = new Array(n1);
    let R = new Array(n2);

    for (let i = 0; i < n1; i++) {
        L[i] = A[p + i];
    }

    for (let j = 0; j < n2; j++) {
        R[j] = A[q + 1 + j];
    }

    let i = 0;
    let j = 0;
    let k = p;

    while (i < n1 && j < n2) {

        if (L[i] <= R[j]) {
            A[k] = L[i];
            i++;
        }

        else {
            A[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        A[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        A[k] = R[j];
        j++;
        k++;
    }
}

function mergeSort(A, p, r) {
    if (p < r) {
        let q = Math.floor((p + r) / 2);
        mergeSort(A, p, q);
        mergeSort(A, q + 1, r);
        merge(A, p, q, r);
    }
}

const A = [12, 3, 7, 9];
const p = 0;
const r = A.length - 1;
console.log("Array non ordinato: ", A)
mergeSort(A, p, r);
console.log("Array ordinato: ", A)