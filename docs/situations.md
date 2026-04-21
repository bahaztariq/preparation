# 100 Situations for Soutenance Preparation

This document contains 100 practical scenarios and theoretical questions to prepare you for your project defense. Try to solve them using the reference files provided (`php_oop.php`, `script.js`, `database.sql`).

## 🐘 PHP OOP (30 Situations)

1. **Class Creation:** Create a `Product` class with `name`, `price`, and `quantity` properties.
2. **Encapsulation:** Make the properties of the `Product` class private and provide getters and setters.
3. **Validation:** In the `setPrice` method, ensure the price cannot be negative.
4. **Constructor:** Add a constructor to the `Product` class to initialize all properties.
5. **Inheritance:** Create an `ElectronicProduct` class that inherits from `Product` and adds a `warranty` property.
6. **Method Overriding:** Override a `getDetails()` method in `ElectronicProduct` to include warranty info.
7. **Abstraction:** Create an abstract class `Device` with an abstract method `turnOn()`.
8. **Interface:** Define an interface `Exportable` with a method `toJson()`.
9. **Polymorphism:** Create an array of different objects that all implement `Exportable` and call `toJson()` on each in a loop.
10. **Static Methods:** Add a static method to a `Calculator` class that adds two numbers without instantiating the class.
11. **Static Properties:** Use a static property to count how many instances of a `User` class have been created.
12. **Constants:** Define a `TAX_RATE` constant inside a `Billing` class.
13. **Traits:** Create a `Logger` trait and use it in both `User` and `Order` classes.
14. **Magic Methods:** Implement `__toString()` to return a string representation of an object.
15. **Dependency Injection:** Pass a `Database` object into a `UserRepository` constructor instead of creating it inside.
16. **Type Hinting:** Create a function that only accepts an object of type `Authenticatable`.
17. **Namespaces:** Organize your classes into a `App\Core` namespace.
18. **Autoloading:** Explain how `composer` handles class loading.
19. **Exception Handling:** Use `try-catch` to handle a division by zero in a math class.
20. **Custom Exceptions:** Create a `DatabaseException` class that extends `Exception`.
21. **Final Keyword:** Mark a method as `final` so it cannot be overridden.
22. **Visibility:** Explain the difference between `protected` and `private`.
23. **Late Static Binding:** Explain the difference between `self::` and `static::`.
24. **Interfaces vs Abstract Classes:** When would you use one over the other?
25. **Composition over Inheritance:** Refactor a complex inheritance tree to use composition.
26. **Fluent Interface:** Implement method chaining (e.g., `$user->setName()->setEmail()->save()`).
27. **Singleton Pattern:** Implement a `Database` class that can only have one instance.
28. **Factory Pattern:** Create a class that generates different types of `Button` objects based on input.
29. **PDO vs MySQLi:** Why is PDO preferred for modern PHP?
30. **Security:** How do you prevent SQL injection using OOP and PDO?

## 📜 JavaScript & DOM (30 Situations)



31. **Variable Scope:** Explain the difference between `let`, `const`, and `var`.
32. **Arrow Functions:** Convert a traditional function to an arrow function.
33. **Destructuring:** Extract properties from a `user` object using destructuring.
34. **Spread Operator:** Merge two arrays using the `...` operator.
35. **Template Literals:** Use backticks to create a multi-line string with variables.
36. **DOM Selection:** Select an element by its ID and change its background color.
37. **Event Listeners:** Add a click event to a button that alerts "Hello".
38. **Event Delegation:** Handle clicks on multiple list items using a single listener on the parent.
39. **Creating Elements:** Create a new `div`, add a class, and append it to the body.
40. **Removing Elements:** Remove an element from the DOM when a 'Delete' button is clicked.
41. **Fetch API:** Fetch data from a public API and log it to the console.
42. **Async/Await:** Rewrite a Promise chain using `async` and `await`.
43. **Error Handling:** Add a `try-catch` block to an async fetch request.
44. **LocalStorage:** Save a user's theme preference (dark/light) in the browser.
45. **JSON Parsing:** Convert a JSON string from an API into a JS object.
46. **Array Map:** Transform an array of prices by adding 20% tax to each.
47. **Array Filter:** Filter an array of users to find only those over 18.
48. **Array Reduce:** Calculate the total sum of items in a shopping cart array.
49. **Classes in JS:** Create a `Vehicle` class with a `move()` method.
50. **Modules:** Export a function from `utils.js` and import it in `app.js`.
51. **Closures:** Create a function that "remembers" a counter value.
52. **Callbacks:** Explain what a callback function is with an example.
53. **Hoisting:** Predict the output of a variable used before it's declared.
54. **This Keyword:** Explain how `this` behaves in an arrow function vs a regular function.
55. **Timers:** Use `setInterval` to create a simple digital clock.
56. **Form Validation:** Prevent a form from submitting if the email field is empty.
57. **Class Toggle:** Toggle a `hidden` class on an element when a button is clicked.
58. **Attributes:** Get and set the `src` attribute of an image.
59. **Dataset:** Use `data-*` attributes to store hidden info on an HTML element.
60. **Event Bubbling:** How do you stop an event from triggering on parent elements?

## 🗄️ SQL & Databases (30 Situations)

61. **Table Creation:** Create a `products` table with appropriate data types.
62. **Primary Key:** Explain why every table should have a primary key.
63. **Foreign Key:** Link an `orders` table to a `users` table.
64. **Inserts:** Insert 3 rows of data into the `categories` table.
65. **Updates:** Change the price of all products in the 'Electronics' category.
66. **Deletes:** Delete a user and explain what `ON DELETE CASCADE` does.
67. **Basic Select:** Select all columns from `users` where the role is 'admin'.
68. **Ordering:** Select all products sorted by price from highest to lowest.
69. **Limiting:** Select only the first 5 posts from the database.
70. **Inner Join:** Get a list of posts along with their category names.
71. **Left Join:** list all categories, even those with no products.
72. **Aliases:** Use `AS` to rename a column in the output.
73. **In Operator:** Select posts that belong to category IDs 1, 3, or 5.
74. **Between Operator:** Find products with prices between 10 and 50.
75. **Like Operator:** Find users whose usernames start with 'A'.
76. **Aggregate Functions:** Find the average price of all products.
77. **Group By:** Count how many products are in each category.
78. **Having Clause:** Find categories that have more than 10 products.
79. **Distinct:** Get a list of all unique cities from a `customers` table.
80. **Subqueries:** Find products with price higher than the global average.
81. **Views:** Create a view that shows only active users.
82. **Indexes:** Explain how an index speeds up a database.
83. **Transactions:** Explain `BEGIN`, `COMMIT`, and `ROLLBACK`.
84. **Normalization:** Explain the difference between 1NF, 2NF, and 3NF.
85. **Union:** Combine results from two separate select statements.
86. **Null Handling:** Use `IS NULL` to find posts without a category.
87. **Concat:** Combine `first_name` and `last_name` into a single column.
88. **Dates:** Find all items created in the last 30 days.
89. **Case Statement:** Categorize prices as 'Cheap', 'Medium', or 'Expensive'.
90. **Database Security:** What are the risks of using `SELECT *` in production?

## 🏗️ Architecture, Security & Algorithms (20 Situations)

91. **MVC Pattern:** Explain the roles of the Model, View, and Controller.
92. **XSS Security:** How do you prevent users from injecting scripts into your site?
93. **CSRF Security:** What is a CSRF token and why is it needed?
94. **Password Hashing:** Why should you never store passwords in plain text?
95. **Bubble Sort:** Explain how Bubble Sort works and its time complexity (O(n²)).
96. **Binary Search:** Why is Binary Search faster than Linear Search? What is the requirement for the array?
97. **Recursion:** Explain the "Base Case" and "Recursive Case" using the Factorial example.
98. **Stack vs Queue:** What is the difference between LIFO and FIFO? Give a real-world example of each.
99. **Big O Notation:** What does O(1), O(n), and O(log n) mean?
100. **Problem Solving:** How do you approach a coding problem you've never seen before? (Logical steps).
