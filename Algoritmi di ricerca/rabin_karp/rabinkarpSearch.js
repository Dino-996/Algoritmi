/**
 * @author Davide Sabia <davidesabia22@gmail.com>
 * @description La funzione implementa l’algoritmo di Rabin-Karp, un algoritmo di ricerca di stringhe che utilizza l’hashing per trovare le occorrenze di una stringa modello in una stringa di testo.
 * @param {string} testo 
 * @param {string} modello
 * @returns {number}
 */

const calcolaHash = require('./calcolaHash');

function ricercaRabinKarp(testo, modello) {
  const m = modello.length;
  const n = testo.length;

  const hashModello = calcolaHash(modello);
  let hashFinestra = calcolaHash(testo.substring(0, m));

  for (let i = 0; i <= n - m; i++) {
    // Confronto gli hash
    if (hashFinestra === hashModello) {
      // Verifico il modello carattere per carattere se gli hash coincidono
      if (testo.substring(i, i + m) === modello) {
        console.log(`Modello trovato alla posizione ${i}`);
      }
    }

    // Aggiorno l'hash per la prossima finestra
    if (i < n - m) {
      hashFinestra = (hashFinestra - testo.charCodeAt(i) * Math.pow(101, m - 1)) * 101 + testo.charCodeAt(i + m);
      hashFinestra = hashFinestra % Math.pow(2, 32);
      if (hashFinestra < 0) {
        hashFinestra += Math.pow(2, 32);
      }
    }
  }
}

// Esempio di utilizzo
const testo = "ababcababcabcabc";
const modello = "abcabc";
ricercaRabinKarp(testo, modello);
