const k = 17
const arraysujet1 = [15, 10, 3, 7]
//  exo 1

function compare (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        return true;
      }
    }
  }
  return false;
}


console.log(compare(arraysujet1))

// exo 3

function isTrueOrFalse(num, numtwo, k) {
  return num + numtwo === k;
}

function compareTo(arr, k) {
  if (arr.length < 2) {
    return false;
  }

  const [first, ...rest] = arr; //  syntaxe de décomposition (detructuring)
// first est la variable qui stocke le premier élément du tableau arr, 
// rest est une variable qui stocke le reste des éléments du tableau.

  if (rest.some(num => isTrueOrFalse(first, num, k))) {
    return true;
  }

  return compareTo(rest, k);
}

console.log(compareTo(arraysujet1, k)); // Résultat : true ou false
 // Résultat : true ou false
