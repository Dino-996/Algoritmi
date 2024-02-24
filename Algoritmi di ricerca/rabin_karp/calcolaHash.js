/**
 * @author Davide Sabia <davidesabia22@gmail.com>
 * @description La funzione calcola un valore hash per una stringa data.
 * @param {string} stringa 
 * @returns {number}
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