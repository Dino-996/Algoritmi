/**
 * @author Davide Sabia <davidesabia22@gmail.com>
 * @description Il Quick Sort è un algoritmo di ordinamento rapido basato sul paradigma divide et impera. È noto per la sua efficienza e ampiamente utilizzato in molte librerie di programmazione.
 * @param {Array} A 
 * @param {number} p 
 * @param {number} r 
 * @returns
 */

function partition(A, p, r) {

    let pivot = A[r];
    let i = p - 1;

    for (let j = p; j <= r - 1; j++) {

        if (A[j] < pivot) {
            i = i + 1;
            [A[i], A[j]] = [A[j], A[i]];
        }
    }

    [A[i + 1], A[r]] = [A[r], A[i + 1]];
    return i + 1;
}

function quickSort(A, p, r) {
    if (p < r) {
        let q = partition(A, p, r);
        quickSort(A, p, q - 1);
        quickSort(A, q + 1, r);
    }
}

let A = [10, 7, 8, 9, 1, 5];
let p = 0;
let r = A.length - 1;

quickSort(A, p, r);
console.log("Array ordinato: ", A);