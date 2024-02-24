/**
 * @file
 * @author Davide Sabia <davidesabia22@gmail.com>
 * @description Implementa l'algoritmo di ricerca per interpolazione che funziona su un array ordinato e stima la posizione dell'elemento desiderato in base ai valori degli estremi.
 */

/**
 * @function interpolationSearch
 * @description Implementa l'algoritmo di ricerca per interpolazione. Funziona su un array ordinato e stima la posizione dell'elemento desiderato in base ai valori degli estremi.
 * @param {Array} A - L'array in cui cercare.
 * @param {number} key - Il valore da cercare.
 * @returns {number} L'indice in cui si trova il valore cercato nell'array. Se il valore non è presente, restituisce -1.
 */

function interpolationSearch(A, key) {
    let low = 0;
    let high = A.length - 1;

    while (low <= high && key >= A[low] && key <= A[high]) {
        if (low === high) {
            if (A[low] === key) {
                return low;
            } else {
                return -1;
            }
        }

        let position = low + Math.floor(((key - A[low]) * (high - low)) / (A[high] - A[low]));

        if (A[position] === key) {
            return position;
        }
        
        else if (A[position] < key) {
            low = position + 1;
        } 
        
        else {
            high = position - 1;
        }
    }

    return -1;
}

module.exports = interpolationSearch;