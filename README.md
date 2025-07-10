Day1
# 🚀 JavaScript Async Styles: Callback vs Promise vs Async/Await

This project demonstrates three common ways to handle asynchronous operations in JavaScript:

- 📌 Callback Style (Nested functions)
- 📌 Promise Style (Chained `.then()`)
- 📌 Async/Await Style (Modern and readable)
  

Day2
# 🌦️ JavaScript CLI Tools – Weather App & To-Do App

Welcome to my Day 2 project for the #10DaysOfJavaScript series!  
This repository contains two simple but practical **command-line tools** built using **Node.js**:

- ✅ Real-Time **Weather App**
- ✅ File-based **To-Do App**

Day3
# 🚀 Deployment Status API (Node.js + Axios)

This project demonstrates the use of Node.js's built-in `http` module to build a simple REST API, and `axios` to consume that API. It simulates a real-world DevOps scenario where microservice deployment statuses are tracked and fetched.

---

## 📦 Features

- Simple HTTP server using Node.js `http` module
- REST endpoint to check deployment status of services
- Axios-based client to poll service status (like a DevOps dashboard)
- Real-world use case: status monitoring for microservices in CI/CD


Day4

### ✅ Express.js Basics
- A minimalist web framework for Node.js that simplifies server and route management.
- Used to handle HTTP requests and define routes for different actions (GET, POST, PUT, DELETE).

### ✅ Routes & Route Handlers
- **Routes** define how the server responds to different endpoints.
- **Route Handlers** are the functions that execute when a request is received — they send back responses to the client.

## 🛠 Tools Used

- **Postman**: For testing API routes with JSON bodies and headers.
- **curl**: Command-line tool for making HTTP requests and debugging.

---


Day5

### 🧠 Core Concepts Covered
- **MongoDB**: A NoSQL database used to store data in flexible, JSON-like documents.
- **Mongoose**: An Object Data Modeling (ODM) library that provides a schema-based solution for MongoDB and Node.js.
- **Schemas and Models**: Defined the structure and validation rules for documents stored in MongoDB.
- **Database Operations**:
  - `save()`: To create and store documents in MongoDB.
  - `find()`: To retrieve documents from MongoDB.
- **Express.js**: A web application framework for Node.js to handle routing and APIs.

--


Day6

# 🛡️ JWT Authentication API using Express, Bcrypt, and JSON Web Tokens

This project is a simple **Node.js + Express.js API** that implements user **registration**, **login**, and access to a **protected route** using:

- `bcrypt`: For securely hashing passwords
- `jsonwebtoken`: For generating and verifying JWT tokens
- `dotenv`: To store environment variables (like secret keys)

---

## 🚀 Features

- Register a user and securely hash their password using `bcrypt`
- Login and generate a signed JWT token
- Protect routes using JWT authentication middleware
- Store JWT secret in `.env` for security

---

## 📦 Dependencies

- `express`
- `bcrypt`
- `jsonwebtoken`
- `dotenv`



Day7



## ✅ Topics Covered

### 1. Input Validation

- **Tools Used**: Joi and express-validator
- **Purpose**: Ensure that incoming requests contain expected and valid data before processing.
- **Benefits**:
  - Prevents bad or malicious input.
  - Improves user experience with meaningful error messages.
  - Increases overall API security and stability.

---

### 2. Error-First Callbacks

- **Concept**: Common pattern in Node.js where the first argument of a callback is an error (if any).
- **Structure**:
  ```js
  callback(err, result)


Day8



## 📦 Understanding `package.json` and `package-lock.json`

- `package.json` defines the project's metadata, scripts, and dependencies.
- `package-lock.json` records the exact version of every installed package to ensure consistent installs across different environments.

These files are essential for project reproducibility and stability.

---

## 🧰 Utility Functions

Utility functions are small, reusable, and independent functions that perform specific tasks.  
Examples:
- Adding two numbers
- Capitalizing text
- Formatting a date

### ✅ Why Test Them?
Because they are used throughout the app and are easy to test due to their pure nature.

---

## 🧪 Unit Testing with Jest

Jest is a powerful JavaScript testing framework used for unit, integration, and snapshot testing.

### Features I Used:
- **`jest.fn()`**: Used to create mock functions.
- **Mocking**: Simulates function behavior to isolate code during tests.
- **Assertions**: Validates outputs using functions like `toBe()`, `toEqual()`, and `toHaveBeenCalled()`.


Day9


## ✅ Concepts Covered

### 1. 🔐 Closures
Closures allow a function to remember and access variables from its lexical scope even after the outer function has finished execution.

> Use Case: Helps in data privacy, function factories, and managing state in async operations.

---

### 2. 🍛 Currying
Currying transforms a function with multiple arguments into a series of nested functions that each take one argument.

> Use Case: Enables function reuse and partial function application — powerful in creating flexible DevOps utilities.

---

### 3. 🚀 Hoisting
Hoisting is JavaScript's default behavior of moving declarations to the top of their scope.

- `var` is hoisted and initialized with `undefined`.
- `let` and `const` are hoisted but remain in the **Temporal Dead Zone (TDZ)** until declared, throwing `ReferenceError` if accessed early.

> Use Case: Understanding hoisting helps avoid undefined bugs and runtime errors in large-scale modular scripts.

---


Day10

## 📚 Concepts Covered

### ✅ EventEmitters
- Built-in `events` module in Node.js
- Custom event creation and handling
- Example: Triggering and responding to a `log` event

### ✅ Streams
- `fs.createReadStream` and `fs.createWriteStream`
- Efficient reading/writing of large files in chunks
- Piping data from input to output stream

### ✅ Buffers
- Temporary storage for binary data
- Used internally by streams for chunked data handling

---

## 📂 Files Included

- `largefile.txt` – Sample large file to simulate stream processing
- `copy.txt` – Output file generated using write stream
- `stream-copy.js` – Script demonstrating stream read/write operations
- `event-logger.js` *(optional)* – Script to show custom EventEmitter usage

---

## 🧪 How to Run

1. Clone this repo or download files
2. Run the stream example:
   ```bash
   node stream-copy.js

