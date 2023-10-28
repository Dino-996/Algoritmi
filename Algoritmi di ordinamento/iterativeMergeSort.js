function mergeSort(array) {

    if (array == null) {
        return;
    }

    if (array.length > 1) {

        var mid = Math.floor((array.length) / 2);
        var left = Array(mid).fill(0);

        for (var i_1 = 0; i_1 < mid; i_1++) {
            left[i_1] = array[i_1];
        }

        var right = Array(array.length - mid).fill(0);
        
        for (var i_2 = mid; i_2 < array.length; i_2++) {
            right[i_2 - mid] = array[i_2];
        }
        
        mergeSort(left);
        mergeSort(right);
        
        var i = 0;
        var j = 0;
        var k = 0;
        
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                array[k] = left[i];
                i++;
            }
            else {
                array[k] = right[j];
                j++;
            }
            k++;
        }
        
        while (i < left.length) {
            array[k] = left[i];
            i++;
            k++;
        }
        
        while (j < right.length) {
            array[k] = right[j];
            j++;
            k++;
        }
    }
}

function printArray(array) {
    mergeSort(array);
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push(array[i]);
    }
    console.log("Array ordinato: ", newArray.toString());
}

var vector = [12, 3, 7, 9, 14, 6, 11, 2];
printArray(vector);
