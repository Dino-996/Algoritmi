/**
 * @author Davide Sabia <davidesabia22@gmail.com>
 * @description Partition partizionare l’array in due parti, in modo che tutti gli elementi a sinistra del pivot siano minori del pivot e tutti gli elementi a destra del pivot siano maggiori del pivot.
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

module.exports = partition;