const mergeSort = require('../Algoritmi di ordinamento/merge_sort/mergeSort');

describe('mergeSort', () => {
    it('dovrebbe ordinare correttamente un array vuoto', () => {
        const A = [];
        mergeSort(A, 0, A.length - 1);
        expect(A).toEqual([]);
    });

    it('dovrebbe ordinare correttamente un array con un solo elemento', () => {
        const A = [1];
        mergeSort(A, 0, A.length - 1);
        expect(A).toEqual([1]);
    });

    it('dovrebbe ordinare correttamente un array già ordinato', () => {
        const A = [1, 2, 3, 4, 5];
        mergeSort(A, 0, A.length - 1);
        expect(A).toEqual([1, 2, 3, 4, 5]);
    });

    it('dovrebbe ordinare correttamente un array in ordine inverso', () => {
        const A = [5, 4, 3, 2, 1];
        mergeSort(A, 0, A.length - 1);
        expect(A).toEqual([1, 2, 3, 4, 5]);
    });

    it('dovrebbe ordinare correttamente un array con elementi duplicati', () => {
        const A = [3, 1, 4, 3, 2];
        mergeSort(A, 0, A.length - 1);
        expect(A).toEqual([1, 2, 3, 3, 4]);
    });

    it('dovrebbe ordinare correttamente un array con numeri negativi', () => {
        const A = [-3, 0, -5, 2, -1];
        mergeSort(A, 0, A.length - 1);
        expect(A).toEqual([-5, -3, -1, 0, 2]);
    });

    it('dovrebbe ordinare correttamente un array grande', () => {
        const A = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
        const sortedA = [...A].sort((a, b) => a - b);
        mergeSort(A, 0, A.length - 1);
        expect(A).toEqual(sortedA);
    });
});
