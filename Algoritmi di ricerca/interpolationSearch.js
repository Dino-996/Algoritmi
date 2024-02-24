/**
 * @author Davide Sabia <davidesabia22@gmail.com>
 * @description Funziona su un'array ordinato e stima la posizione dell'elemento desiderato in base ai valori degli estremi.
 * @param {Array} A 
 * @param {number} key 
 * @returns {number}
 */

function interpolationSearch(A, key) {
    const low = 0;
    const high = A.length - 1;

    while (low <= high && key >= A[low] && key <= A[high]) {

        let position = Math.floor(low + (key - A[low]));

        if (A[position] === key) {
            return position;

        } else if (A[position] < key) {
            low = position + 1;

        } else {
            high = position - 1;
        }
    }

    return -1;
}

// Esempio di utilizzo
const A = [1, 2, 3, 4, 5];
const key = 3;
const result = interpolationSearch(A, key);
console.log(result === -1 ? 'Valore non presente' : `Valore in posizione ${result}`);