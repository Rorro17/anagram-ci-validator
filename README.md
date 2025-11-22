# Anagram Validator

The goal was to implement a function that checks if two strings are anagrams (same characters, same frequency) with support for configurable options like case sensitivity and whitespace handling.

I also set up a CI pipeline using GitHub Actions to validate the solution automatically.

## 📋 The Solution

The core logic lives in `src/anagram.ts`.
Instead of sorting the strings (which costs $O(n \log n)$), I used a **Frequency Map** approach to keep the time complexity down to **$O(n)$**.

### Supported Options
The function signature is `isAnagram(a, b, options)`. You can pass an object to handle edge cases:

* **`ignoreCase`**: (Default: `false`) Treats 'A' and 'a' as the same.
* **`ignoreWhitespace`**: (Default: `false`) Ignores spaces, tabs, and newlines.
* **`normalizeUnicode`**: (Default: `false`) Handles accents correctly (e.g., matching a composed `ñ` with a decomposed `n` + `~`).

---

## 🛠️ Setup & Running Locally

I used **TypeScript** and **Jest** for this project. You'll need Node.js (v18+) installed.

1.  **Install dependencies:**
    ```bash
    npm ci
    ```

2.  **Run the test suite:**
    ```bash
    npm test
    ```

3.  **Run in watch mode (for development):**
    ```bash
    npm run test:watch
    ```

---

## 🤖 CI/CD & Automation

I configured **GitHub Actions** to handle both automated testing and manual verification. You can find the workflow file in `.github/workflows/ci.yml`.

### 1. Automated CI (Push & PR)
To ensure code quality, the test suite runs automatically whenever:
* Code is pushed to `main` or `master`.
* A Pull Request is opened targeting `main` or `master`.

This guarantees that no regressions are introduced during refactoring.

### 2. Manual Testing (Workflow Dispatch)
I added a manual trigger so you can test specific words directly in the GitHub UI without needing to clone the repo.

**How to run it:**
1.  Go to the **Actions** tab.
2.  Select **Anagram Validator** on the left.
3.  Click **Run workflow**.
4.  Enter two words (e.g., "Listen" and "Silent") and hit Run.

The script uses `ts-node` to execute the function with your inputs and prints the result ("✅ Anagrams" or "❌ Not Anagrams") directly in the build logs.

![GitHub Action](image.png)

---

## 📂 Project Structure

* `src/anagram.ts` - The implementation.
* `tests/anagram.test.ts` - Jest test suite covering happy paths, edge cases, and options.
* `.github/workflows/ci.yml` - The CI configuration.