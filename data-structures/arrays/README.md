# Arrays (list)

Arrays are a linear data structure that arrange items sequentially, one after another, in the computer’s memory. Arrays are index-based, meaning values can be accessed using their index number.

![Array](../../images/array.png)

## Static arrays vs Dynamic arrays

Static arrays, also known as fixed-size arrays in programming languages like C and C++, require the size of the array to be specified during declaration and cannot be modified at runtime.

```c
// C++
string fruits[3];
```

However, in modern programming languages like JavaScript and Python, the size of an array is dynamic, meaning it is not required to specify the size during the declaration of an array. If a new item is added at runtime and no contiguous memory location is available, a new memory location is allocated to accommodate the newly added item.

```js
// JavaScript
var fruits = ["Mango", "Apple", "Kiwi", "Strawberry"];
```

## Implementation of Arrays in different programming languages

The implementation of arrays can differ in different programming languages. Arrays in languages like JavaScript and Python can store different types of data (like numbers, strings, etc.), but arrays in languages like Java and C++ can only store a single type of data.

```c
// C++
string fruits[3] = {"Mango", "Apple", "Kiwi", "Strawberry"}
```

```javascript
// JavaScript
var arr = ["Mango", 1, null];
```

## Time complexity

| Operation | Big O |
| --------- | ----- |
| lookup    | O(1)  |
| push\*    | O(1)  |
| insert    | O(n)  |
| delete    | O(n)  |

\* can be O(n)
