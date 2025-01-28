# Product-list-cart - README

## Overview

This application is a product-list-cart built using React and TypeScript. It allows users to browse a selection of desserts, add them to a cart, and view their order summary. The project is structured for scalability, maintainability, and testability, reflecting enterprise-level development practices.

## Project Structure

The project's folder structure is designed to promote feature-based organization and separation of concerns.

```
src/
├── assets/            # Static assets like images, fonts, svgs
│   ├── images/
│   └── fonts/
├── components/       # Reusable UI components (button, card, modal, etc)
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   └── index.ts
│   ├── Card/
│   │   ├── Card.tsx
│   │   ├── Card.test.tsx
│   │   └── index.ts
│   ├── ...
│   └── shared/          # Reusable UI components specific to this project.
│       ├── AddToCartButton/
│       │   ├── AddToCartButton.tsx
│       │   ├── AddToCartButton.test.tsx
│       │   └── index.ts
│       ├── PriceLabel/
│       │   ├── PriceLabel.tsx
│       │   ├── PriceLabel.test.tsx
│       │   └── index.ts
│       └── index.ts
├── contexts/          # React contexts for state management
│   └── CartContext.tsx
│   └── index.ts
├── features/        # Feature-specific code (desserts, cart, etc.)
│   ├── desserts/       # Specific to the desserts listing
│   │   ├── components/ # Components specific to the feature
│   │   │   ├── DessertCard/
│   │   │   │   ├── DessertCard.tsx
│   │   │   │   ├── DessertCard.test.tsx
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   ├── hooks/      # Hooks specific to this feature
│   │   │   └── useDessertData.ts
│   │   ├── types.ts
│   │   ├── constants.ts # Constants
│   │   └── index.ts
│   └── cart/          # Specific to the cart functionality
│       ├── components/ # Component specific to cart
│       │   ├── CartItem/
│       │   │   ├── CartItem.tsx
│       │   │   ├── CartItem.test.tsx
│       │   │   └── index.ts
│       │   ├── CartSummary/
│       │   │   ├── CartSummary.tsx
│       │   │   ├── CartSummary.test.tsx
│       │   │   └── index.ts
│       │   └── index.ts
│       ├── hooks/      # Hooks specific to this feature
│       │   └── useCart.ts
│       ├── types.ts
│       ├── utils.ts
│       └── index.ts
├── hooks/           # Global reusable hooks
│   └── ..
├── layouts/         # Layout components for overall page structure
│   └── MainLayout.tsx
├── pages/           # Top-level pages for routes
│   └── HomePage/
│       ├── HomePage.tsx
│       └── index.ts
├── styles/          # Global styles, themes, and CSS modules
│   ├── ...
├── types/           # Global types for the application
│   └── index.ts
├── utils/           # Utility functions
│   └── ...
├── App.tsx
├── index.tsx
└── main.tsx
```

### Folder Descriptions

*   **`assets/`**: Contains static files such as images, fonts, and icons.
*   **`components/`**: Holds reusable UI elements across the application. Organized into component folders containing Component.tsx, Component.test.tsx and `index.ts` to export the component for easy access.
    *   **`shared/`**: Stores UI components that are specific to this project.
*   **`contexts/`**: Manages global states using React Context API.
*   **`features/`**: Contains directories for specific features such as `desserts` and `cart`. Each feature has its own `components/` and `hooks/`, `types.ts`, `constants.ts` and `index.ts` which exports everything from the feature directory.
*   **`hooks/`**: Stores globally reusable React hooks that can be used across different features
*   **`layouts/`**: Contains layout components which are designed to manage the general structure of the app.
*   **`pages/`**:  Each top-level directory for each page of the application.
*   **`styles/`**: Global styles and themes for the application.
*   **`types/`**: Contains global type declarations used in the project.
*   **`utils/`**: Contains utility functions used by different parts of the project.

## Technologies & Tools

### Languages

*   **TypeScript:** Used for type safety, improved code maintainability, and developer experience.

### Frameworks/Libraries

*   **React:**  Used for building the UI.
*   **[other libraries used]**: [for styling (Tailwind CSS) testing (Jest, React Testing Library)]
*  **Vite**: used as a bundler.

### Testing

*   **Jest:** JavaScript testing framework
*   **React Testing Library:**  For testing React components, focusing on user interactions rather than implementation details.

### Development Tools

*   **Node.js and pnpm:** For package management and running development tools.
*   **VS Code:** Recommended IDE, though any editor can be used
*   **Git:** Version control system for tracking code changes.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone [git@github.com:codetopiacommunity/product-list-with-cart.git]
    cd [product-list-with-cart]
    ```
2.  **Install dependencies:**
    ```bash
    pnpm install  
    ```
3.  **Start the development server:**
    ```bash
    pnpm run dev  
    ```
4.  **Open your browser and navigate to** `http://localhost:5173`

## Contributing

To contribute to this project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature (`git checkout -b feature/my-new-feature`).
3.  Implement your changes.
4.  Test your changes using the provided test suites.
5.  Ensure that code adheres to the established code style by running prettier and ESLint.
6.  Commit your changes (`git commit -m 'Add some feature'`).
7.  Push the branch to your fork (`git push origin feature/my-new-feature`).
8.  Create a new pull request to the `main` branch.
## Best Practices
*  Code should be clear, concise and easy to read.
* All components should be placed in their respective folders and they must export a `index.ts` file.
* Components should be tested using React Testing library and placed in their respective folders as well.
* All hooks should be placed in their respective folders and they must export a `index.ts` file.
* Avoid nesting JSX too deeply, prefer creating components that break down the JSX.
*  All constants must be placed in their respective folders and exported using `index.ts`
* Any function which are used by many components and does not have side effect should be placed in the utils folder.
* Every type should be placed in its respective folder and must be exported using `index.ts`.
* When working with APIs use services and make sure to handle loading states and errors.

## License

[MIT License]