/**
 * @author Davide Sabia <davidesabia22@gmail.com>
 * @description La funzione merge combina due sotto-array ordinati in un unico array ordinato.
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

module.exports = merge;