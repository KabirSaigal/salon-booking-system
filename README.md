# Salon Booking System

A modern web application for managing salon services and appointments. Built with React, Firebase, and Tailwind CSS.

## Features

- User-friendly interface for browsing salon services
- Secure admin dashboard for managing services
- Real-time appointment booking system
- Firebase authentication and database integration
- Responsive design for all devices

## Tech Stack

- React 18
- Vite
- Firebase (Authentication, Firestore, Storage)
- Tailwind CSS
- React Router DOM

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account and project

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kabirg/salon-booking-system.git
cd salon-booking-system
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your Firebase configuration:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

4. Start the development server:
```bash
npm run dev
```

## Deployment

This project is deployed to GitHub Pages. To deploy:

1. Install the gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

The site will be available at: https://kabirg.github.io/salon-booking-system

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 