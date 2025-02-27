E-Commerce UI Clone

Overview

This project is a clone of an e-commerce site, developed using a modern front-end framework and integrated with the Fake API from Platzi. It includes key features such as product listings, product details, shopping cart functionality, and a checkout process.

Features

Responsive UI: A modern, responsive design that mimics the reference e-commerce site.

Product Listings & Details: Products are dynamically loaded from the Fake API, displaying images, descriptions, and prices.

Shopping Cart & Checkout: Users can add items to their cart and proceed with a mock checkout.

User Authentication: Sign-up and login functionality using Firebase Authentication.

API Integration: Fetching product data, categories, and other relevant information dynamically.

Deployment: The application is deployed on a cloud service (Netlify/Vercel/AWS/Heroku).

Bonus Features (Optional): Search, filtering, sorting, user reviews, and enhanced UI/UX.

Tech Stack

Front-End: React.js (or Vue.js)

State Management: Context API / Redux (if applicable)

Authentication: Firebase Authentication

API: Fake API from Platzi

Styling: Tailwind CSS / SCSS / Styled Components

Deployment: Netlify / Vercel / AWS / Heroku

Getting Started

Prerequisites

Ensure you have the following installed:

Node.js (v16+ recommended)

npm or yarn

Installation

Clone the repository:

git clone https://github.com/your-username/your-repo.git
cd your-repo

Install dependencies:

npm install # or yarn install

Running the Project

To start the development server:

npm run dev # or yarn dev

This will launch the application on http://localhost:3000/ (or the default port for Vue).

Environment Variables

Create a .env file in the root directory and add:

REACT_APP_API_BASE_URL=https://api.escuelajs.co/api/v1/
REACT_APP_FIREBASE_CONFIG=your_firebase_config_here

Deployment

To deploy the app, use the following command:

npm run build # or yarn build

Follow the deployment instructions for your chosen hosting service (Netlify, Vercel, etc.).

API Integration

The application uses the Fake API from Platzi to fetch:

Products: GET /products

Categories: GET /categories

Users (for authentication): POST /auth/login

Contribution

Feel free to contribute by creating a pull request. Follow these steps:

Fork the repository.

Create a new branch: git checkout -b feature-name

Commit your changes: git commit -m "Added new feature"

Push to the branch: git push origin feature-name

Open a pull request.

License

This project is licensed under the MIT License.

Contact

For any queries, reach out to your-email@example.com.

Live Demo

Deployed Site

Repository

GitHub Repository
