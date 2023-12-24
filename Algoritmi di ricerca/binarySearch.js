/**
 * @author Davide Sabia <davidesabia22@gmail.com>
 * @description La ricerca binaria è un algoritmo di ricerca che opera su sequenze ordinate. Divide ripetutamente la sequenza in due parti e confronta il valore cercato con il valore al centro. Versione ricorsiva.
 * @param {Array} A 
 * @param {number} key 
 * @param {number} low 
 * @param {number} high 
 * @returns {number}
 */

function binarySearch(A, key, low, high) {
    if (low > high) {
        return -1;
    }
    var n = Math.floor((low + high) / 2);
    if (key === A[n]) {
        return n;
    }
    else {
        if (A[n] < key) {
            return binarySearch(A, key, n + 1, high);
        }
        else {
            return binarySearch(A, key, low, n - 1);
        }
    }
}