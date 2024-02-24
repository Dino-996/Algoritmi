/**
 * @author Davide Sabia <davidesabia22@gmail.com>
 * @description Il Quick Sort è un algoritmo di ordinamento rapido basato sul paradigma divide et impera. È noto per la sua efficienza e ampiamente utilizzato in molte librerie di programmazione.
 * @param {Array} A 
 * @param {number} p 
 * @param {number} r 
 * @returns
 */

const partition = require('./partition');

function quickSort(A, p, r) {
    if (p < r) {
        let q = partition(A, p, r);
        quickSort(A, p, q - 1);
        quickSort(A, q + 1, r);
    }
}

// Esempio di utilizzo
let A = [10, 7, 8, 9, 1, 5];
let p = 0;
let r = A.length - 1;
quickSort(A, p, r);
console.log("Array ordinato: ", A);