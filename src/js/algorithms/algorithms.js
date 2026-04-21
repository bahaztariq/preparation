/**
 * Algorithms and Data Structures Reference (JavaScript)
 * Common concepts for technical interviews and project defenses.
 */

// 1. Sorting Algorithm: Bubble Sort (O(n^2))
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap elements
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        n--; // Optimization: last element is always in place
    } while (swapped);
    return arr;
}

// 2. Searching Algorithm: Binary Search (O(log n)) - Works only on sorted arrays
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid; // Found it!

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1; // Not found
}

// 3. Recursion: Factorial (n!)
function factorial(n) {
    if (n === 0 || n === 1) return 1; // Base case
    return n * factorial(n - 1); // Recursive step
}

// 4. Recursion: Fibonacci Sequence
function fibonacci(n) {
    if (n <= 1) return n; // Base case
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// 5. Data Structure: Stack (LIFO - Last In First Out)
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) { this.items.push(element); }
    pop() { return this.items.length === 0 ? "Underflow" : this.items.pop(); }
    peek() { return this.items[this.items.length - 1]; }
    isEmpty() { return this.items.length === 0; }
}

// 6. Data Structure: Queue (FIFO - First In First Out)
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) { this.items.push(element); }
    dequeue() { return this.items.length === 0 ? "Underflow" : this.items.shift(); }
    front() { return this.items[0]; }
    isEmpty() { return this.items.length === 0; }
}

// --- Demo Usage ---
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Original:", unsortedArray);
console.log("Sorted (Bubble Sort):", bubbleSort([...unsortedArray]));

const sortedArray = [11, 12, 22, 25, 34, 64, 90];
console.log("Binary Search for 25:", binarySearch(sortedArray, 25)); // Index 3

console.log("Factorial of 5:", factorial(5)); // 120
console.log("Fibonacci(6):", fibonacci(6)); // 8 (0, 1, 1, 2, 3, 5, 8)
