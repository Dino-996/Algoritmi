function merge(arr, p, q, r) {

    let n1 = q - p + 1;
    let n2 = r - q;
    let L = new Array(n1);
    let R = new Array(n2);

    for (let i = 0; i < n1; i++) {
        L[i] = arr[p + i];
    }

    for (let j = 0; j < n2; j++) {
        R[j] = arr[q + 1 + j];
    }

    let i = 0;
    let j = 0;
    let k = p;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

function mergeSort(arr, p, r) {
    if (p < r) {
        var q = Math.floor((p + r) / 2);
        mergeSort(arr, p, q);
        mergeSort(arr, q + 1, r);
        merge(arr, p, q, r);
    }
}

function printArray(arr, p, r) {
    mergeSort(arr, p, r);
    for (var i = 0; i < arr.length; i++) {
        console.log("Risultato: ", arr[i]);
    }
}

var arr = [12, 3, 7, 9, 14, 6, 11, 2];
var p = 0;
var r = array.length;
printArray(arr);