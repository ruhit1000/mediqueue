# 🎓 MediQueue - Tutor Booking System

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)

MediQueue is a modern, full-stack web application designed to seamlessly connect students with expert tutors. It provides a robust platform for educators to list their services, manage their schedules, and for students to easily discover and book interactive learning sessions.

🔗 **[View Live Demo Here](https://mediqueue-sage.vercel.app/)** ---

## ✨ Key Features

* **Comprehensive Tutor Profiles:** Educators can create detailed, dynamic profiles showcasing their expertise, experience, educational background, hourly rates, and available time slots.
* **Real-Time Booking Engine:** Students can book sessions instantly. The system automatically handles inventory by decreasing available slots upon booking and restoring them if a session is canceled.
* **Interactive Dashboards:** Dedicated, role-based dashboards (`My Tutors` and `My Booked Sessions`) allow users to effortlessly manage their teaching listings or upcoming learning schedules.
* **Secure Authentication:** Integrated secure user authentication, ensuring that personal data, bookings, and profile management are strictly protected and user-specific.
* **Modern, Responsive UI:** Built with a mobile-first approach using Tailwind CSS and HeroUI. The interface features beautifully designed cards, interactive modals, and empty-state illustrations for a flawless user experience across all devices.
* **Instant Feedback & Safety:** Utilizes interactive toast notifications for real-time success/error feedback, alongside secure confirmation alerts (e.g., when deleting a profile or canceling a session) to prevent accidental data loss.

---

## 🛠️ Tech Stack

### Frontend
* **Framework:** [Next.js](https://nextjs.org/) (App Router & Server Actions)
* **Library:** [React 18](https://react.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **UI Components:** [HeroUI](https://heroui.com/)
* **Icons:** Lucide React & Gravity UI Icons
* **Alerts:** React Toastify / React Hot Toast

### Backend
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB (with native driver)
* **Security:** CORS, JWT-based Authentication middleware

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites
* [Node.js](https://nodejs.org/en/) (v18.x or higher)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
* A MongoDB Database (Local or MongoDB Atlas)

### Installation

1. **Clone the repository**
   ```sh
   git clone [https://github.com/your-username/mediqueue.git](https://github.com/ruhit1000/mediqueue.git)
   cd mediqueue
   ```

2. **Install Frontend Dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
Create a `.env.local` file in the root directory and add your specific configurations:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000
   # Add your auth secrets and other variables here
   ```

4. **Run the Development Server**
   ```bash
   npm run dev
   ```

5. **Start the Backend Server** (Assuming your backend is in a separate folder or repo)
   ```bash
   cd server
   npm install
   npm run start
   ```

6. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## 🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.

*Designed & Developed by [Ruhit Paul](https://github.com/ruhit1000)*