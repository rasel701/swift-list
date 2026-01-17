# 🛒 ProductNest

ProductNest is a modern **product listing & inventory management web application** built with **Next.js (App Router)**. The project is designed as a portfolio-grade application showcasing authentication flow, protected routes, API routes, database integration, and elegant UI/UX.

---

## 🚀 Live Demo

> *(Add your deployed Vercel link here)*

---

## 📌 Features

### 🌐 Public Features

* Modern landing page with smooth animations
* Browse all products without login
* Product details page with premium UI
* Latest products section
* Testimonials, FAQ & CTA sections

### 🔐 Authentication (Mock Login)

* Login using a mock admin account
* Cookie-based authentication
* Persistent login using cookies
* Logout functionality

### 🧑‍💼 Admin / Protected Features

* Protected **Add Product** route
* Only logged-in users can add products
* Middleware-based route protection

### 🗄️ Backend & API

* REST API using **Next.js Route Handlers**
* MongoDB integration
* Fetch all products
* Fetch single product by ID
* Add new products
* Get latest products (sorted by date)

---

## 🛠️ Tech Stack

| Category   | Technology                 |
| ---------- | -------------------------- |
| Framework  | Next.js 15/16 (App Router) |
| Styling    | Tailwind CSS               |
| Animation  | Framer Motion              |
| Database   | MongoDB                    |
| Auth       | Cookie-based (js-cookie)   |
| Icons      | React Icons                |
| Deployment | Vercel                     |

---

## 📂 Project Structure

```
app/
 ├─ api/
 │   └─ all-products/
 │      ├─ route.js
 │      └─ [product-id]/route.js
 ├─ add-item/
 ├─ items/
 ├─ login/
 ├─ products/[id]/
 │   ├─ page.jsx
 │   └─ loading.jsx
 ├─ layout.js
 └─ page.js

components/
 ├─ Navbar.jsx
 ├─ ProductDetails.jsx
 ├─ ProductDetailsSkeleton.jsx
 ├─ Testimonials.jsx
 ├─ FAQ.jsx
 └─ CTA.jsx

lib/
 └─ dbConnect.js
```

---

## 🔑 Mock Login Credentials

```txt
Email: kamal@ka.com
Password: kamal123
```

> ⚠️ This is a demo authentication system (no real backend auth).

---

## 🔐 Route Protection

* Cookies are used to store a mock token
* Middleware checks authentication
* Unauthorized users are redirected to `/login`

---

## 📡 API Endpoints

### 🔹 Get All Products

```
GET /api/all-products
```

### 🔹 Get Single Product

```
GET /api/all-products/:productId
```

### 🔹 Add New Product

```
POST /api/all-products
```

---

## 🧠 Learning Outcomes

* Next.js App Router fundamentals
* Server vs Client Components
* API Routes & MongoDB
* Cookie-based auth handling
* Route protection with middleware
* Skeleton loading & UX optimization
* Clean project structure

---

## 📸 Screenshots

### 🏠 Landing Page
![Landing Page](screenshots/landing.png)

---

## 🧪 Future Improvements

* Real authentication (JWT / NextAuth)
* Role-based access control
* Admin dashboard
* Product update & delete
* Pagination & search
* Image upload support

---

## 🤝 Contribution

This is a personal learning & portfolio project.
Suggestions and improvements are welcome.

---

## 📜 License

This project is for educational purposes only.

---

## 👨‍💻 Author

**Rasel**
Frontend Developer (React & Next.js)

* GitHub: [https://github.com/your-github](https://github.com/your-github)
* Portfolio: [https://your-portfolio.com](https://your-portfolio.com)

---

⭐ If you like this project, don’t forget to give it a star!
