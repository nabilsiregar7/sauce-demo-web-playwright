# 🚀 Playwright Automation Project

This project automates **SauceDemo** using **Playwright** with the **Page Object Model (POM)** approach.

---

## 📌 Features

✅ Login & Checkout Flow  
✅ Sorting Items (A-Z, Z-A, Low to High, High to Low)  
✅ Multi User Execution  
✅ Cross-Browser Testing (Chrome & Firefox)  
✅ Page Object Model (POM) for Better Maintainability  


---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/nabilsiregar7/sauce-demo-web-playwright.git
```

### 2️⃣ Install Dependencies
```sh
npm install
npx playwright install
```

### 3️⃣ Run Tests
🔹 Run All Tests in Default Browser (Both Chrome & Firefox)
```sh
npx playwright test
```
🔹 Run a Single Test File
```sh
npx playwright test tests/login.test.ts
```
🔹 Run Tests in Headed Mode (Watch Execution)
```sh
npx playwright test --headed
```
🔹 Generate HTML Report
```sh
npx playwright test --reporter=html
```
🔹 After execution, open the report:
```sh
npx playwright show-report
```

---
## 👨‍💻 Author
### Nabil Iswar Siregar
