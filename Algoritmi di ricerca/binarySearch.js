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

// Esempio di utilizzo
const A = [1, 2, 3, 4, 5];
const key = 3;
const low = 0;
const high = A.length - 1;
const result = binarySearch(A, key, low, high);
console.log(result === -1 ? 'Valore non presente' : `Valore in posizione ${result}`);
