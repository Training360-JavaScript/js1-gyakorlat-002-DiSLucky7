/*
- A `js/main.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként egy string-eket tartalmazó tömböt kap (inputellenőrzést nem kell végezni), és __visszaad__ egy HTML-template-et (string)! 
- A függvény neve `generateList` legyen!
- A HTML-template egy lista, amelynek a listaelemei a kapott tömb értékeit tartalmazzák.
*/

function generateList(arr) {
    const list = arr.map(element => `<li>${element}</li>`)
    document.querySelector('h1')
    .insertAdjacentHTML('afterend', `<ul>${list.reduce((acc, curr) => acc + curr)}</ul>`);
}
generateList(['asd', 'asd']);