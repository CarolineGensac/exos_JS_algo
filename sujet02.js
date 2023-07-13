//  exo 2
const arraysujet2 = [10, 7, 8, 3, 6, 1]

function highEnough(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let sunset = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] >= arr[i]) {
        sunset = true;
        break;
      }
    }
    if (!sunset) {
      count++;
    }
  }
  return count;
}

console.log(highEnough(arraysujet2));

// exo 4

function highEnoughRecursive(arr, index = 0) {
  if (index >= arr.length - 1) {
    return 1; // vérifie l'index, si tt vérifié renvoi que seul un immeuble peut voir le sunset
  }

  const hasHigher = checkHigher(arr, index + 1, arr[index]);

  if (!hasHigher) {
    return 1 + highEnoughRecursive(arr, index + 1);
  } else {
    return highEnoughRecursive(arr, index + 1);
  }
}

function checkHigher(arr, index, height) {
  if (index >= arr.length) {
    return false;
  }

  if (arr[index] >= height) {
    return true;
  }

  return checkHigher(arr, index + 1, height);
}

console.log(highEnoughRecursive(arraysujet2)); // Résultat : 3

