const arraysujet2 = [3, 7, 8, 3, 6, 1]

function highEnough(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let hasHigher = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] >= arr[i]) {
        hasHigher = true;
        break;
      }
    }
    if (!hasHigher) {
      count++;
    }
  }
  return count;
}

console.log(highEnough(arraysujet2)); // Résultat : 3
