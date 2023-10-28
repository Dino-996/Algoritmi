function iterativeBinarySearch(a, key, low, high) {
    if (low > high) {
        return -1;
    }
    while (low <= high) {
        var n = Math.floor((low + high) / 2);
        if (a[n] === key) {
            return n;
        }
        if (a[n] < key) {
            low = n + 1;
        }
        else {
            high = n - 1;
        }
    }
    return -1;
}
var b = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var chiave = 13;
var inizio = 0;
var fine = b.length - 1;
var indice = iterativeBinarySearch(b, chiave, inizio, fine);
console.log("Fine iterativeBinarySearch(array, key, low, high), ".concat(b[indice] ? "il numero " + b[indice] + " sta in posizione (n): " : "il numero " + chiave + " non è stato trovato: "), iterativeBinarySearch(b, chiave, inizio, fine));
