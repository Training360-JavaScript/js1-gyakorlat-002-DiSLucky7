/*
- Írj egy olyan függvénykifejezést, amely paraméterként vár egy egész számokat tartalmazó tömböt! (Inputellenőrzést nem kell végezni.)
- A függvény neve `brutto` legyen!
- A függvény szorozza meg a tömbelemek értékét 1.27-tel, majd pedig 
__térjen vissza__ az elemek egész számra kerekített összegével!
*/

function brutto(arr) {
    return arr.map(element => Math.round(element * 1.27)).reduce((acc, curr) => acc + curr, 0)
};

console.log(brutto([1, 4, 6, 3]));
