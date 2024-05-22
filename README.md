# Book Shelf MERN Application

Welcome to the Book-Shelf repository! This project is my first MERN (MongoDB, Express, React, Node.js) stack application. The application allows users to manage a collection of books. The frontend is built using Vite + React, and the backend is powered by Node.js, Express, and MongoDB.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add, update, delete, and view books in your collection.
- User-friendly interface with notifications.
- Fast and responsive design.

## Technologies Used

### Frontend

- **Vite + React**: For building a fast and modern frontend.
- **Tailwind CSS**: For styling the application.
- **Axios**: For making HTTP requests.
- **React Router**: For client-side routing.
- **Notistack**: For displaying notifications.

### Backend

- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing book data.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js.
- **Cors**: Middleware for enabling CORS.
- **Nodemon**: Utility that monitors for changes and automatically restarts the server.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed. You will also need to have MongoDB installed and running.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/talhayaseen57/Book-Shelf.git
   ```
2. Install NPM packages for frontend
   ```sh
   cd frontend
   npm install
   ```
3. Install NPM packages for backend
   ```sh
   cd ../backend
   npm install
   ```

### Usage

1. Start the backend server
   ```sh
   cd backend
   npm run dev
   ```
2. Start the frontend development server
   ```sh
   cd ../frontend
   npm run dev
   ```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

