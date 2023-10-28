function heapSort(arr) {
    let N = arr.length;

    for (let i = Math.floor(N / 2) - 1; i >= 0; i--) {
        heapify(arr, N, i);
    }

    for (let i = N - 1; i > 0; i--) {

        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        heapify(arr, i, 0);
    }
}


function heapify(arr, N, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < N && arr[l] > arr[largest]) { 
        largest = l; 
    }


    if (r < N && arr[r] > arr[largest]) { 
        argest = r; 
    }

    if (largest != i) {
        let swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;

        heapify(arr, N, largest);
    }
}

function printArray(arr) {
    let elem = [];
    for (let i = 0; i < arr.length; ++i) {
        elem.push(arr[i]);
    }
    return elem;
}


let arr = [12, 11, 13, 5, 6, 7];
let N = arr.length;

heapSort(arr);

console.log("Sorted array is: ", printArray(arr, N));
