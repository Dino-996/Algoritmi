# Algoritmi e strutture dati

Questo repository contiene implementazioni e descrizioni di vari algoritmi e strutture dati.

## Insertion Sort

L'Insertion Sort è un algoritmo di ordinamento semplice ed efficiente che costruisce una sequenza ordinata uno alla volta. È particolarmente utile per piccoli insiemi di dati.

### Implementazione
- [InsertionSort.js](https://github.com/Dino-996/Algoritmi/blob/resume_main/Algoritmi%20di%20ordinamento/insertionSort.js)

### Costo nel Caso Pessimo
Il costo nel caso pessimo dell'Insertion Sort è O(n^2), dove "n" è la lunghezza della sequenza da ordinare.

## Quick Sort

Il Quick Sort è un algoritmo di ordinamento rapido basato sul paradigma divide et impera. È noto per la sua efficienza e ampiamente utilizzato in molte librerie di programmazione.

### Implementazione
- [QuickSort.js](https://github.com/Dino-996/Algoritmi/blob/resume_main/Algoritmi%20di%20ordinamento/quickSort.js)

### Costo nel Caso Pessimo
Il costo nel caso pessimo del Quick Sort è O(n^2), ma con una scelta accurata del pivot, può essere ridotto a O(n log n), dove "n" è la lunghezza della sequenza da ordinare.

## Merge Sort

Il Merge Sort è un algoritmo di ordinamento stabile che utilizza la tecnica del divide et impera per ordinare una sequenza. È noto per la sua stabilità e prestazioni affidabili.

### Implementazione
- [MergeSort.js](https://github.com/Dino-996/Algoritmi/blob/resume_main/Algoritmi%20di%20ordinamento/mergeSort.js)

### Costo nel Caso Pessimo
Il costo nel caso pessimo del Merge Sort è sempre O(n log n), dove "n" è la lunghezza della sequenza da ordinare.

## Heap Sort

L'Heap Sort è un algoritmo di ordinamento basato su una struttura dati chiamata heap. È noto per la sua efficienza e capacità di ordinare sequenze in loco.

### Implementazione
- [HeapSort.js](https://github.com/Dino-996/Algoritmi/blob/resume_main/Algoritmi%20di%20ordinamento/heapSort.js)

### Costo nel Caso Pessimo
Il costo nel caso pessimo dell'Heap Sort è sempre O(n log n), dove "n" è la lunghezza della sequenza da ordinare.

## Binary Search

La ricerca binaria è un algoritmo di ricerca che opera su sequenze ordinate. Divide ripetutamente la sequenza in due parti e confronta il valore cercato con il valore al centro.

### Implementazione
- [BinarySearch.js](https://github.com/Dino-996/Algoritmi/blob/resume_main/Algoritmi%20di%20ricerca/binarySearch.js)

### Costo nel Caso Pessimo
Il costo nel caso pessimo della ricerca binaria è O(log n), dove "n" è la lunghezza della sequenza in cui si sta cercando.

## Ricerca per interpolazione

Funziona su una lista ordinata e stima la posizione dell'elemento desiderato in base ai valori degli estremi.

### Implementazione
- [InterpolationSearch.js](https://github.com/Dino-996/Algoritmi/blob/resume_main/Algoritmi%20di%20ricerca/interpolationSearch.js)

### Costo nel caso pessimo
Il costo nel caso pessimo della ricerca per intepolazione è O(log n log n), dove "n" è la lunghezza della sequenza in cui si sta cercando.

## Come utilizzare le implementazioni

Le implementazioni di questi algoritmi sono fornite in linguaggio JavaScript e possono essere utilizzate come segue:

    1. Scarica il file sorgente desiderato.
    2. Esegui il file con node: node <nomefile>.

## Licenza

Questo progetto è concesso in licenza in base ai termini della licenza MIT.
