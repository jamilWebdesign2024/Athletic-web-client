🏅 AthleticHub - An Athletic Event Booking Platform
🌐 Live Site: https://athletic-club-c3623.web.app
💻 Client Repository: https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-jamilWebdesign2024
🖥️ Server Repository: https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-jamilWebdesign2024

📌 Project Purpose
AthleticHub is a full-stack athletic event booking platform designed to connect athletes and sports enthusiasts with local sports events. It allows users to browse, book, and manage athletic events while organizers can create, update, and manage their own events.

🚀 Key Features
✅ Email/Password and Google Authentication
✅ JWT-protected private routes
✅ Create, update, delete, and manage events (for organizers)
✅ Book, view, and cancel event bookings
✅ Search events by name or location
✅ My Bookings page layout toggle (Table / Card view)
✅ Dynamic page title based on route
✅ Custom 404 page
✅ Loading spinners during data fetch
✅ Toast notifications for CRUD actions
✅ Fully responsive design for mobile, tablet, and desktop
✅ Firebase & MongoDB credentials secured via environment variables

💻 Tech Stack
Frontend
React

React Router DOM

Tailwind CSS + DaisyUI

Axios

Framer Motion

React Icons

SweetAlert2 / React Toastify

Lottie React (if used)

Backend
Node.js

Express.js

MongoDB + Mongoose

JWT

CORS

dotenv

🌟 Main Pages
/ → Home (Banner + Featured Events + Extra Sections)

/events → All events + search

/login → Login form (email/password + Google)

/register → Registration with validation

/create-event → Create a new event (private route)

/myBookings → View and cancel bookings (private route)

/manageEvents → Manage created events (private route)

/updateEvent/:id → Update event (private route)

/events/:id → Event details + Book Now button

* → Custom 404 page

🔑 NPM Packages
Client
Copy
Edit
react, react-router-dom, axios, tailwindcss, daisyui, framer-motion, react-icons, sweetalert2, react-toastify, lottie-react
Server
Copy
Edit
express, mongoose, cors, jsonwebtoken, dotenv
🌐 Deployment
✅ Client: Hosted on Firebase
✅ Server: Hosted on Render / Vercel / (your actual server hosting service)

🛡 Security
Firebase config keys stored in .env

MongoDB URI stored in .env

JWT tokens protect API endpoints and private routes

📂 Folder Structure
Client
css
Copy
Edit
src/
 ┣ components/
 ┣ pages/
 ┣ routes/
 ┣ contexts/
 ┣ hooks/
 ┣ App.jsx
 ┗ main.jsx
Server
pgsql
Copy
Edit
server/
 ┣ models/
 ┣ routes/
 ┣ controllers/
 ┣ app.js / index.js
 ┗ .env
📈 Commit History
✅ At least 15 meaningful commits on the client side

✅ At least 8 meaningful commits on the server side

✅ Clear and descriptive commit messages

🎯 Unique / Challenge Features
My Bookings page layout toggle (table / card view)

JWT-based authentication

Search functionality (name / location filter)

Advanced Framer Motion animations

📷 Screenshots
Add screenshots of key pages here (e.g., Home, Event Details, My Bookings, Manage Events).

📝 How to Run Locally
Clone repositories
bash
Copy
Edit
git clone https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-jamilWebdesign2024
git clone https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-jamilWebdesign2024
Client
bash
Copy
Edit
cd b11a11-client-side-jamilWebdesign2024
npm install
npm run dev
Server
bash
Copy
Edit
cd b11a11-server-side-jamilWebdesign2024
npm install
npm start
⚠ Important Notes
Add your Firebase auth domain for production deployment

Ensure no CORS / 404 / 504 errors occur in production

Private routes must persist on page reload without redirecting to login


