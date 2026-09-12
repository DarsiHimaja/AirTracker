# AirTracker ✈️

A modern, fast, and responsive **Flight Search & Booking Application** built with React, Vite, and CSS.


---

## 🌐 Live Demo & Repository

- 🚀 **Live Application**: [https://airtracker-two.vercel.app](https://airtracker-two.vercel.app)

---

## ✨ Features

- ✈️ **Smart Flight Search**:
  - Search one-way flights by source & destination city/airport code.
  - Interactive city autocomplete suggestion dropdown (e.g. `Delhi (DEL)`, `Mumbai (BOM)`).
  - Quick location swap button.
  - Departure date selection with date validation.
  - Class selection (Economy, Premium Economy, Business, First Class).
  - Passenger count selectors for Adults, Children, and Infants.

- 🔍 **Results & Advanced Filtering**:
  - Instant flight search results matching selected route and criteria.
  - Filter flights by **Class**, **Departure Time Window** (Morning, Afternoon, Evening, Night), **Airlines**, and **Price Range**.
  - Sort results by **Price (Low to High)** or **Departure Time**.

- 📝 **Passenger Booking**:
  - Complete passenger details input with client-side validation (Title, Name, DOB, Passenger Type, Mobile, Aadhar).
  - Dynamic passenger addition/removal with automatic price calculation.

- 👤 **User Profile & Booking Management**:
  - View user statistics (Total Bookings, Total Spent, Favorite Destination).
  - Full booking history list with status tracking.
  - **Cancel Booking** capability with persistent status saving (`Cancelled (Refund Processed)`).

---

## 🛠️ Tech Stack

- **Framework**: React 18 (Vite)
- **Routing**: React Router DOM (`react-router-dom`)
- **PDF Generation**: jsPDF (`jspdf`)
- **Deployment**: Vercel

---

## 🚀 Getting Started Locally

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/DarsiHimaja/AirTracker.git
   cd AirTracker
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` (or the port specified in terminal) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📄 Deployment

Deploy directly using Vercel CLI:
```bash
npx vercel --prod
```

---
