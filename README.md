# Tripnix - Travel & Tour Booking Platform (Frontend)

A modern, responsive travel and tour booking web application built with React, TypeScript, and Vite. This platform allows users to browse tours, make bookings, and manage their travel experiences while providing admin functionalities for tour management.

## 🚀 Features

### User Features

- **Tour Browsing** - Browse available tours with filtering by division and tour type
- **Tour Details** - View comprehensive tour information including images, itinerary, and pricing
- **User Authentication** - Secure login/register with OTP verification
- **Tour Booking** - Book tours with integrated payment system
- **Booking History** - Track and manage personal bookings
- **Payment Integration** - Seamless payment processing with success/failure handling

### Admin Features

- **Analytics Dashboard** - View key metrics and statistics
- **Tour Management** - Add, edit, and manage tour packages
- **Division Management** - Manage geographical divisions/locations
- **Tour Type Management** - Categorize tours by type

### General

- **Responsive Design** - Fully responsive UI for all devices
- **Dark/Light Theme** - System-aware theme toggle support
- **Protected Routes** - Role-based access control (User, Admin, Super Admin)
- **Real-time Notifications** - Toast notifications for user feedback

## 🛠️ Tech Stack

| Category             | Technologies                    |
| -------------------- | ------------------------------- |
| **Framework**        | React 19, TypeScript            |
| **Build Tool**       | Vite 7                          |
| **Styling**          | Tailwind CSS 4, tw-animate-css  |
| **State Management** | Redux Toolkit, RTK Query        |
| **Routing**          | React Router 7                  |
| **UI Components**    | Radix UI, Lucide Icons          |
| **Forms**            | React Hook Form, Zod Validation |
| **HTTP Client**      | Axios                           |
| **Animations**       | Framer Motion                   |
| **Date Handling**    | date-fns, React Day Picker      |
| **Notifications**    | Sonner                          |

## 📋 Prerequisites

- **Node.js** - v18.0.0 or higher
- **npm** or **yarn** or **pnpm**
- Backend server running (see server documentation)

## ⚙️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/AH-Ratul/tripnix_client.git
   cd tripnix_client
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the root directory:

   ```env
   VITE_BASE_URL=http://localhost:5000/api/v1
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── assets/              # Static assets (icons, images)
│   ├── icons/           # Custom icon components
│   └── images/          # Image files
├── components/
│   ├── layout/          # Layout components (Navbar, Footer, Sidebar)
│   ├── modules/         # Feature-specific components
│   │   ├── Admin/       # Admin module components
│   │   ├── Authenticate/# Auth forms and components
│   │   ├── HomePage/    # Home page components
│   │   ├── TourPage/    # Tour listing components
│   │   └── tourDetails/ # Tour detail components
│   ├── shared/          # Reusable shared components
│   └── ui/              # UI primitives (shadcn/ui)
├── config/              # App configuration
├── constants/           # Constants and enums
├── hooks/               # Custom React hooks
├── lib/                 # Utility libraries (axios, utils)
├── pages/               # Page components
│   ├── Admin/           # Admin pages
│   ├── Payment/         # Payment result pages
│   └── User/            # User dashboard pages
├── providers/           # Context providers
├── redux/               # Redux store and features
│   └── features/        # RTK Query API slices
├── routes/              # Route configuration
├── types/               # TypeScript type definitions
└── utils/               # Utility functions
```

## 🗺️ Routes

### Public Routes

| Path         | Description                                    |
| ------------ | ---------------------------------------------- |
| `/`          | Home page with hero section and featured tours |
| `/tours`     | Browse all tours with filters                  |
| `/tours/:id` | Tour details page                              |
| `/about`     | About page                                     |
| `/login`     | User login                                     |
| `/register`  | User registration                              |
| `/verify`    | OTP verification                               |

### Protected Routes (User)

| Path               | Description          |
| ------------------ | -------------------- |
| `/booking/:id`     | Book a specific tour |
| `/user/bookings`   | View booking history |
| `/payment/success` | Payment success page |
| `/payment/fail`    | Payment failure page |

### Protected Routes (Admin)

| Path                   | Description       |
| ---------------------- | ----------------- |
| `/admin/analytics`     | Admin dashboard   |
| `/admin/add-tour-type` | Add new tour type |
| `/admin/division`      | Manage divisions  |
| `/admin/add-tour`      | Add new tour      |

## 📜 Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

## 🔐 Authentication Flow

1. User registers with email and password
2. OTP sent to registered email
3. User verifies OTP to complete registration
4. Login with credentials
5. JWT token stored via HTTP-only cookies
6. Protected routes check user role for access

## 🎨 Theming

The application supports light and dark themes with system preference detection:

- Uses `next-themes` for theme management
- Theme preference stored in localStorage
- Automatic system theme detection
- Custom CSS variables for consistent theming

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👥 Authors

- **AH-Ratul** - [GitHub](https://github.com/AH-Ratul)

---

**Tripnix** - Explore the world, one tour at a time! 🌍
