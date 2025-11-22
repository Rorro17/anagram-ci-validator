# Anagram CI Validator

A robust, lightweight TypeScript utility that determines if two strings are anagrams. This project demonstrates a complete modern DevOps workflow using **TypeScript**, **Jest**, and **GitHub Actions** for automated testing and manual validation.

## 🚀 Features

### Core Functionality
The `isAnagram` function checks if two strings share the same characters with the same frequencies ($O(n)$ complexity). It supports advanced configuration options:
* **Case Sensitivity:** By default strict, but can ignore case.
* **Whitespace Handling:** Can optionally ignore spaces/tabs.
* **Unicode Normalization:** Correctly handles accents and combined characters (e.g., `ñ` vs `n` + `~`).

### CI/CD Infrastructure
* **Automated Testing:** Runs the full test suite on every `push` and `pull_request` to `main`.
* **Manual Validation:** A custom GitHub Action workflow that allows you to input two words manually via the GitHub UI and see the result instantly in the build logs.

![GitHub Action](image.png)

---

## 🛠️ Getting Started

### Prerequisites
* Node.js (v18 or higher)
* npm

### Installation

1.  Clone the repository:
    ```bash
    git clone [https://github.com/YOUR_USERNAME/anagram-ci-validator.git](https://github.com/YOUR_USERNAME/anagram-ci-validator.git)
    cd anagram-ci-validator
    ```

2.  Install dependencies:
    ```bash
    npm ci
    ```

---

## 💻 Usage & Available Scripts

In the project directory, you can run the following commands:

### `npm test`
Runs the complete test suite once using **Jest**.
This is the command used by the CI/GitHub Actions pipeline.
* *Alias: `npm run test`*

### `npm run test:watch`
Runs the tests in "Watch Mode".
* The runner stays active and automatically re-runs tests whenever you save a file.
* Great for development!

### `npm run build`
Compiles the TypeScript code into JavaScript.
* Useful if you want to verify that your types are correct without running the logic tests.