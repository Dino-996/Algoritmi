function insertionSort(a, n) {
    var i, key, j;
    for (i = 1; i < n; i++) {
        key = a[i];
        j = i - 1;
        while (j >= 0 && a[j] > key) {
            a[j + 1] = a[j];
            j = j - 1;
        }
        a[j + 1] = key;
    }
}
function printArray(arr, n) {
    insertionSort(arr, n);
    for (var i = 0; i < n; i++) {
        console.log("Array ordinato: ", arr[i]);
    }
}
var c = [9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(printArray(c, c.length));
