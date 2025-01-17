const fruits = ["Banana", "Apple", "Mango"];

/**
 * push: appends new elements to the end of an array.
 * returns the new length of the array.
 * Time Complexity: O(1)
 */
fruits.push("Kiwi");

/**
 * unshift: inserts new elements at the start of an array.
 * returns the new length of the array.
 * Time Complexity: O(n)
 */
fruits.unshift("Guava");

/**
 * pop: removes the last element from an array.
 * returns the removed item. If the array is empty, returns undefined.
 * Time Complexity: O(1)
 */
fruits.pop();

/**
 * shift: removes the first element from an array.
 * returns the removed item. If the array is empty, returns undefined.
 * Time Complexity: O(n)
 */
fruits.shift();

/**
 * Accessing an item using its index number
 * Time Complexity: O(1)
 */
console.log(fruits[2]);

/**
 * splice: removes elements from an array.
 * and if necessary, inserts new items in their place.
 * returns array containing the elements that were deleted.
 * Time Complexity: O(n)
 */
fruits.splice(1, 1, "Strawberry");

console.log(fruits);
