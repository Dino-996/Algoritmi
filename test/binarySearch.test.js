const binarySearch = require('../Algoritmi di ricerca/binarySearch');

describe('binarySearch', () => {
    it('dovrebbe restituire -1 per un array vuoto', () => {
        const A = [];
        const key = 5;
        const result = binarySearch(A, key, 0, A.length - 1);
        expect(result).toBe(-1);
    });

    it('dovrebbe restituire -1 se il valore cercato non è presente', () => {
        const A = [1, 3, 5, 7, 9];
        const key = 2;
        const result = binarySearch(A, key, 0, A.length - 1);
        expect(result).toBe(-1);
    });

    it('dovrebbe restituire l\'indice corretto se il valore cercato è presente nel primo elemento', () => {
        const A = [1, 3, 5, 7, 9];
        const key = 1;
        const result = binarySearch(A, key, 0, A.length - 1);
        expect(result).toBe(0);
    });

    it('dovrebbe restituire l\'indice corretto se il valore cercato è presente nell\'ultimo elemento', () => {
        const A = [1, 3, 5, 7, 9];
        const key = 9;
        const result = binarySearch(A, key, 0, A.length - 1);
        expect(result).toBe(4);
    });

    it('dovrebbe restituire l\'indice corretto se il valore cercato è presente in mezzo all\'array', () => {
        const A = [1, 3, 5, 7, 9];
        const key = 5;
        const result = binarySearch(A, key, 0, A.length - 1);
        expect(result).toBe(2);
    });

    it('dovrebbe gestire correttamente un array con un solo elemento', () => {
        const A = [5];
        const key = 5;
        const result = binarySearch(A, key, 0, A.length - 1);
        expect(result).toBe(0);
    });

    it('dovrebbe gestire correttamente un array con due elementi', () => {
        const A = [1, 3];
        const key = 3;
        const result = binarySearch(A, key, 0, A.length - 1);
        expect(result).toBe(1);
    });

    it('dovrebbe gestire correttamente un array con tre elementi', () => {
        const A = [1, 3, 5];
        const key = 1;
        const result = binarySearch(A, key, 0, A.length - 1);
        expect(result).toBe(0);
    });

    it('dovrebbe gestire correttamente un array con numeri negativi', () => {
        const A = [-5, -3, -1, 0, 2, 4, 6, 8];
        const key = -3;
        const result = binarySearch(A, key, 0, A.length - 1);
        expect(result).toBe(1);
    });

    it('dovrebbe gestire correttamente un array grande', () => {
        const A = Array.from({ length: 1000 }, (_, index) => index);
        const key = 567;
        const result = binarySearch(A, key, 0, A.length - 1);
        expect(result).toBe(567);
    });
});

