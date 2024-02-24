/**
 * @file
 * @author Davide Sabia <davidesabia22@gmail.com>
 * @description Implementa l'algoritmo di ricerca binaria che opera su sequenze ordinate. Divide ripetutamente la sequenza in due parti e confronta il valore cercato con il valore al centro. Versione ricorsiva.
 */

/**
 * @function binarySearch
 * @description Implementa l'algoritmo di ricerca binaria. Divide ripetutamente la sequenza in due parti e confronta il valore cercato con il valore al centro. Versione ricorsiva.
 * @param {Array} A - L'array in cui cercare.
 * @param {number} key - Il valore da cercare.
 * @param {number} low - L'indice iniziale da cui iniziare la ricerca.
 * @param {number} high - L'indice finale fino a cui eseguire la ricerca.
 * @returns {number} L'indice in cui si trova il valore cercato nell'array. Se il valore non è presente, restituisce -1.
 */

function binarySearch(A, key, low, high) {
    if (low > high) {
        return -1;
    }

    let n = Math.floor((low + high) / 2);

    if (key === A[n]) {
        return n;
    }
    
    else if (A[n] < key) {
        return binarySearch(A, key, n + 1, high);
    }

    else {
        return binarySearch(A, key, low, n - 1);
    }
}

module.exports = binarySearch;