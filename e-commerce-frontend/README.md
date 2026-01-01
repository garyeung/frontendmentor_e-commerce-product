# E-commerce Product Page

This project is a front-end implementation of an e-commerce product page, built with React, TypeScript, and Vite.

## About the Project

This project aims to replicate the functionality and design of a modern e-commerce product page. It includes features such as a product gallery with a lightbox, quantity selection, an "add to cart" functionality, and a cart view. The project is built with a focus on component-based architecture and a clean, maintainable codebase.

## Project Structure

The project is organized into the following directories:

```
/
├── public/               # Static assets
├── src/
│   ├── assets/           # Images, fonts, and other assets
│   ├── components/       # Reusable UI components
│   ├── hooks/            # Custom React hooks
│   ├── interfaces/       # TypeScript interfaces
│   ├── layouts/          # Page layouts
│   ├── pages/            # Application pages
│   ├── services/         # Application-wide services (e.g., context, store)
│   ├── App.tsx           # Main application component
│   ├── index.tsx         # Entry point of the application
│   └── routes.tsx        # Application routing
├── .eslintrc.cjs         # ESLint configuration
├── index.html            # Main HTML file
├── package.json          # Project metadata and dependencies
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://npmjs.com/) installed.

### Installation

1.  Clone the repo:
    ```sh
    git clone https://github.com/garyeung/frontendmentor_e-commerce-product.git 
    ```
2.  Navigate to the project directory:
    ```sh
    cd e-commerce-frontend
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```

### Running the Application

To run the application in development mode, use the following command:

```sh
npm dev
```

This will start the development server at `http://localhost:5173`.

## Available Scripts

In the project directory, you can run:

-   `npm run dev`: Runs the app in the development mode.
-   `npm run build`: Builds the app for production to the `dist` folder.
-   `npm run lint`: Lints the project files using ESLint.
-   `npm run preview`: Serves the production build locally.