function binarySearch(a, key, low, high) {
    if (low > high) {
        return -1;
    }
    var n = Math.floor((low + high) / 2);
    if (key === a[n]) {
        return n;
    }
    else {
        if (a[n] < key) {
            return binarySearch(a, key, n + 1, high);
        }
        else {
            return binarySearch(a, key, low, n - 1);
        }
    }
}
var array = [1, 2, 3, 4, 5, 6];
var key = 1;
var low = 0;
var high = array.length - 1;
var posizione = binarySearch(array, key, low, high);
console.log("Fine binarySearch(array, key, low, high), ".concat(array[posizione], " sta in posizione (n): "), binarySearch(array, key, low, high));

export default binarySearch;