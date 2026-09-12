# AirTracker ✈️

A modern, fast, and responsive **Flight Search & Booking Application** built with React, Vite, and Tailwind CSS.

![AirTracker Banner](https://plus.unsplash.com/premium_photo-1679830513990-82a4280f41b4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3)

---

## 🌐 Live Demo & Repository

- 🚀 **Live Application**: [https://airtracker-two.vercel.app](https://airtracker-two.vercel.app)
- 🐙 **GitHub Repository**: [https://github.com/DarsiHimaja/AirTracker](https://github.com/DarsiHimaja/AirTracker)

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

- 🛡️ **Cancellation Policy & Refund Info**:
  - Interactive **Cancellation Policy & Info** modal on each flight card detailing 100% free cancellation windows and instant refund terms.

- 📝 **Passenger Booking**:
  - Complete passenger details input with client-side validation (Title, Name, DOB, Passenger Type, Mobile, Aadhar).
  - Dynamic passenger addition/removal with automatic price calculation.

- 💳 **Payment & E-Ticket Generation**:
  - Payment options simulation via **Razorpay** (Card/Netbanking) or **UPI**.
  - Automated PDF e-ticket generation and instant browser download.

- 👤 **User Profile & Booking Management**:
  - View user statistics (Total Bookings, Total Spent, Favorite Destination).
  - Full booking history list with status tracking.
  - **Cancel Booking** capability with persistent status saving (`Cancelled (Refund Processed)`). Once cancelled, action buttons are cleanly hidden.

---

## 🛠️ Tech Stack

- **Framework**: React 18 (Vite)
- **Styling**: Tailwind CSS, PostCSS
- **Icons**: FontAwesome Icons (`@fortawesome/react-fontawesome`)
- **Routing**: React Router DOM (`react-router-dom`)
- **Notifications**: React Toastify (`react-toastify`)
- **PDF Generation**: jsPDF (`jspdf`)
- **Deployment**: Vercel

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

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

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
