// Do the below programs in anonymous function & IIFE
// Print odd numbers in an array
// Convert all the strings to title caps in a string array
// Sum of all numbers in an array
// Return all the prime numbers in an array
// Return all the palindromes in an array
// Return median of two sorted arrays of the same size.
// Remove duplicates from an array
// Rotate an array by k times


// 1. Print odd numbers in an array
// Anonymous Function

const oddNumbers = function(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            result.push(arr[i]);
        }
    }
    return result;
};
console.log(oddNumbers([1, 2, 3, 4, 5])); // Output: [1, 3, 5]

// IIFE:

(function(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            result.push(arr[i]);
        }
    }
    console.log(result); // Output: [1, 3, 5]
})([1, 2, 3, 4, 5]);

// 2. Convert all the strings to title caps in a string array
// Anonymous Function:

const toTitleCaps = function(strArr) {
    return strArr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
};
console.log(toTitleCaps(["hello", "world"])); // Output: ["Hello", "World"]

// IIFE:
(function(strArr) {
    const result = strArr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
    console.log(result); // Output: ["Hello", "World"]
})(["hello", "world"]);

// 3. Sum of all numbers in an array
// Anonymous Function:
const sumArray = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15


// IIFE:
(function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum); // Output: 15
})([1, 2, 3, 4, 5]);

// 4. Return all the prime numbers in an array
// Anonymous Function:
const primeNumbers = function(arr) {
    const isPrime = function(num) {
        if (num <= 1) return false;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    return arr.filter(isPrime);
};
console.log(primeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: [2, 3, 5, 7]

// IIFE:
(function(arr) {
    const isPrime = function(num) {
        if (num <= 1) return false;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    const result = arr.filter(isPrime);
    console.log(result); // Output: [2, 3, 5, 7]
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 5. Return all the palindromes in an array
// Anonymous Function:
const palindromes = function(arr) {
    return arr.filter(function(str) {
        return str === str.split('').reverse().join('');
    });
};
console.log(palindromes(["apple", "2002", "BOB", "civic", "1993"])); // Output: ["2002", "BOB", "civic"]


// IIFE:
(function(arr) {
    const result = arr.filter(function(str) {
        return str === str.split('').reverse().join('');
    });
    console.log(result); // Output: ["2002", "BOB", "civic"]
})(["apple", "2002", "BOB", "civic", "1993"]);

// 6. Return median of two sorted arrays of the same size
// Anonymous Function:
const findMedian = function(arr1, arr2) {
    const combined = arr1.concat(arr2).sort(function(a, b) { return a - b; });
    const len = combined.length;
    if (len % 2 === 0) {
        return (combined[len / 2 - 1] + combined[len / 2]) / 2;
    } else {
        return combined[Math.floor(len / 2)];
    }
};
console.log(findMedian([1, 2, 3], [4, 5, 6])); // Output: 3.5


// IIFE:
(function(arr1, arr2) {
    const combined = arr1.concat(arr2).sort(function(a, b) { return a - b; });
    const len = combined.length;
    let median;
    if (len % 2 === 0) {
        median = (combined[len / 2 - 1] + combined[len / 2]) / 2;
    } else {
        median = combined[Math.floor(len / 2)];
    }
    console.log(median); // Output: 3.5
})([1, 2, 3], [4, 5, 6]);

// 7. Remove duplicates from an array
// Anonymous Function:

const removeDuplicates = function(arr) {
    return arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
};
console.log(removeDuplicates(["apple", "mango", "apple", "orange", "mango", "mango"])); // Output: ["apple", "mango", "orange"]

// IIFE:

(function(arr) {
    const result = arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
    console.log(result); // Output: ["apple", "mango", "orange"]
})(["apple", "mango", "apple", "orange", "mango", "mango"]);

// 8. Rotate an array by k times
// Anonymous Function:
const rotateArray = function(arr, k) {
    k = k % arr.length;
    const rotatedArray = arr.slice(k).concat(arr.slice(0, k));
    return rotatedArray;
};
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [3, 4, 5, 1, 2]


// IIFE:

(function(arr, k) {
    k = k % arr.length;
    const rotatedArray = arr.slice(k).concat(arr.slice(0, k));
    console.log(rotatedArray); // Output: [3, 4, 5, 1, 2]
})([1, 2, 3, 4, 5], 2);

// Do the below programs in arrow functions.
// Print odd numbers in an array
// Convert all the strings to title caps in a string array
// Sum of all numbers in an array
// Return all the prime numbers in an array
// Return all the palindromes in an array

// 1. Print odd numbers in an array

const oddNumbers = arr => arr.filter(num => num % 2 !== 0);
console.log(oddNumbers([1, 2, 3, 4, 5])); // Output: [1, 3, 5]

// 2. Convert all the strings to title caps in a string array

const toTitleCaps = strArr => strArr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
console.log(toTitleCaps(["hello", "world"])); // Output: ["Hello", "World"]

// 3. Sum of all numbers in an array

const sumArray = arr => arr.reduce((sum, num) => sum + num, 0);
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

// 4. Return all the prime numbers in an array

const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const primeNumbers = arr => arr.filter(isPrime);
console.log(primeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: [2, 3, 5, 7]

// 5. Return all the palindromes in an array

const palindromes = arr => arr.filter(str => str === str.split('').reverse().join(''));
console.log(palindromes(["apple", "2002", "BOB", "civic", "1993"])); // Output: ["2002", "BOB", "civic"]
