/**
 * @file
 * @author Davide Sabia <davidesabia22@gmail.com>
 * @description Implementa una funzione di hash per calcolare un valore hash per una stringa data.
 */

/**
 * @function calcolaHash
 * @description Calcola un valore hash per una stringa data utilizzando un numero primo arbitrario.
 * @param {string} stringa - La stringa per cui calcolare il valore hash.
 * @returns {number} Il valore hash calcolato per la stringa.
 */
function calcolaHash(stringa) {
  let hash = 0;
  const primoNumeroPrimo = 101; // Numero primo arbitrario per la funzione di hash

  for (let i = 0; i < stringa.length; i++) {
    hash = (hash * primoNumeroPrimo + stringa.charCodeAt(i)) % (Math.pow(2, 32));
  }

  return hash;
}

module.exports = calcolaHash;
