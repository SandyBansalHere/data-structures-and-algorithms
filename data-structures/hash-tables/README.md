# Hash Table

Hash table is a non-linear data structure that stores data in `key-value` pairs. Unlike arrays, hash tables do not store data in contiguous memory locations. Instead hash table uses a hash function to generate the hash code which represent the memory address where the value is stored for the corresponding key.

## Hash Function

A hash function is an algorithm/function that takes an input (in the case of a hash table, its key) and returns a fixed-length string. A hash function always returns the same output for the same input, and it is a one-way operation, meaning it can only produce the same output for the same input, but not vice versa.

## Hash Collision

https://en.wikipedia.org/wiki/Hash_collision

## Time complexity

| Operation | Big O |
| --------- | ----- |
| lookup    | O(1)  |
| insert    | O(1)  |
| delete    | O(1)  |

\* could be O(n) with hash collision
