# Product-list-cart - README

## Overview

This application is a product-list-cart built using React and TypeScript. It allows users to browse a selection of desserts, add them to a cart, and view their order summary. The project is structured for scalability, maintainability, and testability, reflecting enterprise-level development practices.

## Technologies & Tools

### Languages

*   **TypeScript:** Used for type safety, improved code maintainability, and developer experience.

### Frameworks/Libraries

*   **React:**  Used for building the UI.
*   **Tailwind**: for styling 

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
