const heapSort = require('../Algoritmi di ordinamento/heap_sort/heapSort');

describe('sorting functionality', () => {
    it('ordina correttamente un array vuoto', () => {
        const A = [];
        heapSort(A);
        expect(A).toEqual([]);
    });

    it('ordina correttamente un array con un solo elemento', () => {
        const A = [1];
        heapSort(A);
        expect(A).toEqual([1]);
    });

    it('ordina correttamente un array già ordinato', () => {
        const A = [1, 2, 3, 4, 5];
        heapSort(A);
        expect(A).toEqual([1, 2, 3, 4, 5]);
    });

    it('ordina correttamente un array in ordine inverso', () => {
        const A = [5, 4, 3, 2, 1];
        heapSort(A);
        expect(A).toEqual([1, 2, 3, 4, 5]);
    });

    it('ordina correttamente un array con elementi duplicati', () => {
        const A = [3, 1, 4, 3, 2];
        heapSort(A);
        expect(A).toEqual([1, 2, 3, 3, 4]);
    });

    it('ordina correttamente un array con numeri negativi', () => {
        const A = [-3, 0, -5, 2, -1];
        heapSort(A);
        expect(A).toEqual([-5, -3, -1, 0, 2]);
    });

    it('ordina correttamente un array grande', () => {
        const A = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
        const sortedA = [...A].sort((a, b) => a - b);
        heapSort(A);
        expect(A).toEqual(sortedA);
    });
});