# 💰 Track My Paisa – Expense Tracker Web App

A real-world **Expense Tracker Web Application** built using **JavaScript & Firebase**, designed to manage personal expenses with **secure authentication** and **user-specific data storage**.

---

## 🚀 Live Overview
This application allows users to:
- Create an account / login securely
- Add their daily expenses
- View all expenses in a clean dashboard
- Manage only **their own data** (no data mixing)

---

## 🧠 Key Features

- 🔐 **Authentication System**
  - Firebase Authentication
  - Secure login & logout

- 👤 **User-Specific Data**
  - Every user has separate expense records
  - Data stored at:
    ```
    users/{uid}/expenses
    ```

- ➕ **Expense Management**
  - Add expenses
  - View expense list
  - Delete expenses

- 📊 **Clean Dashboard UI**
  - Simple & user-friendly interface
  - Responsive layout

- ☁️ **Cloud Database**
  - Firebase Firestore integration
  - Real-time data handling

---

## 🛠 Tech Stack

- **Frontend**
  - HTML
  - CSS
  - JavaScript

- **Backend / Database**
  - Firebase Authentication
  - Firebase Firestore

---

## 🔧 Project Architecture

```text
User
 └── Authentication (Firebase Auth)
      └── User UID
           └── Firestore
                └── users/{uid}/expenses
