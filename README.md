# JiraCloneDemo

# 🌲 Cypress End-to-End Tests

This project contains E2E tests written with [Cypress](https://www.cypress.io/), a JavaScript end-to-end testing framework for modern web apps.

---

## 📦 Installation

Make sure you have [Node.js](https://nodejs.org/) installed.

1. Clone the repo:

   ```bash
   git clone https://github.com/DragomirQA/JiraCloneDemo.git
   cd JiraCloneDemo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## 🚀 Running Tests

### 🔁 Interactive Mode

Runs Cypress in the GUI:

```bash
npx cypress open
```

### ⚡ Headless Mode

Run tests in the terminal:

```bash
npx cypress run
```

### 🚀 Run tests in **Chrome headless** mode

```bash
npm run test:chrome:headless
```

### 🚀 Run tests in **Chrome headed** mode

```bash
npm run test:chrome:headed
```

## 🧼 Cleaning Reports

### Remove existing Allure results and reports

```bash
npm run clean:allure:report
```

## 📊 Generating Allure Report

```bash
npm run generate:allure:report
```

## 🌐 Open Allure Report in Browser

```bash
npm run open:allure:report
```
