function firstRecurringCharacter(arr) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      return arr[i];
    } else {
      map[arr[i]] = true;
    }
  }

  return undefined;
}

const result = firstRecurringCharacter([9, 5, 0, 3, 4, 7, 0, 3]);
console.log(result);
