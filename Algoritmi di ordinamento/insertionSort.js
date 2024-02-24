/**
 * @author Davide Sabia <davidesabia22@gmail.com>
 * @description L'Insertion Sort è un algoritmo di ordinamento semplice ed efficiente che costruisce una sequenza ordinata uno alla volta. È particolarmente utile per piccoli insiemi di dati.
 * @param {Array} A
 * @param {number} n
 * @returns
 */

function insertionSort(A, n) {
    let i, key, j;

    for (i = 1; i < n; i++) {
        key = A[i];
        j = i - 1;

        while (j >= 0 && A[j] > key) {
            A[j + 1] = A[j];
            j = j - 1;
        }

        A[j + 1] = key;
    }
}

// Esempio di utilizzo

const A = [5, 4, 3, 2, 1];
insertionSort(A, A.length)
console.log(A);
