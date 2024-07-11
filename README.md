Anonymous Functions
Anonymous functions are functions that do not have a name. They are often used as arguments to other functions, especially for array operations and event handlers.

Features:

1.No name: Anonymous functions are defined without a name.Flexibility: They are useful for one-time use functions that are not intended to be reused elsewhere.
2.Commonly used with array methods: Methods like map, filter, and reduce frequently use anonymous functions.
---------------------------------------
Immediately Invoked Function Expressions (IIFE)
IIFE (Immediately Invoked Function Expression) is a function that is executed immediately after it is defined. This pattern is often used to create a new scope and avoid polluting the global namespace.

Features:

Immediate execution: The function is executed immediately after being defined.
Useful for initialization code: IIFE is commonly used for initialization code that needs to run once and does not need to be reused.
------------------------------------------------

Arrow Functions
Arrow functions were introduced in ES6 (ECMAScript 2015) and provide a concise syntax for writing functions in JavaScript. They are often used for short, simple functions and are particularly useful when working with array methods like map, filter, and reduce.

Features:

Concise syntax: Arrow functions have a shorter syntax compared to traditional function expressions.
Implicit return: If the function body contains only a single expression, the return keyword can be omitted, and the expression's value will be returned automatically.
