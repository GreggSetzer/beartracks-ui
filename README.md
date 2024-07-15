# Beartracks UI

Beartracks UI is a design library for a fictional web application showcasing the [United States 
National Parks](https://nps.gov/index.htm). Built with React and Tailwind CSS, the goal os this library 
is to show how to create reusable UI components that can be easily integrated into any React-based project. 

This project was inspired by the rich data provided by the NPS.gov API, which offers extensive information 
about the United States National Parks. This project aims to create an engaging and informative web 
application that showcases the national parks, making it easier for users to explore and learn about 
these places. 

View the **[Swagger API docs](https://www.nps.gov/subjects/developer/api-documentation.htm)** here.

## Project Overview

The Beartracks UI project serves as an example of how large organizations can maintain brand consistency 
across multiple applications and teams. By leveraging a centralized design library, organizations can 
ensure that their user interfaces adhere to established design guidelines, promoting a cohesive brand 
identity. This approach facilitates the creation of standardized, reusable components that can be 
utilized across various projects, improving efficiency and reducing duplication of effort.

### Tools and Technologies

- **[React](https://react.dev/)**: A JavaScript library for building user interfaces, ensuring efficient updates and rendering of components.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development, allowing for a highly customizable and responsive design.
- **[TypeScript](https://www.typescriptlang.org/)**: A statically typed superset of JavaScript, providing type safety and better development tooling.
- **[Rollup](https://rollupjs.org/)**: A module bundler optimized for building libraries, ensuring that the output is efficient and optimized for different module formats (CommonJS and ESModules).
- **[Jest](https://jestjs.io/)**: A delightful JavaScript testing framework with a focus on simplicity, used here for unit testing the components.
- **[Testing Library](https://testing-library.com/docs/react-testing-library/intro/)**: A set of utilities for testing React components, promoting best practices by testing the components from the user's perspective.
- **[ESLint](https://eslint.org/)**: A tool for identifying and fixing problems in JavaScript code, integrated with TypeScript support to maintain code quality.
- **[Prettier](https://prettier.io/)**: An opinionated code formatter, ensuring a consistent code style across the project.
- **[Husky](https://typicode.github.io/husky/) & 
 [Lint-staged](https://github.com/lint-staged/lint-staged)**: Tools for managing Git hooks and running linting and formatting tasks on staged files before committing, ensuring code quality is maintained throughout the development process.

### Project Structure

The project is organized as follows:

- **src/components**: Contains the React component files (e.g., `Button.tsx`, `ImageCard.tsx`).
- **src/styles**: Includes the Tailwind CSS configuration (`tailwind.css`).
- **tests/components**: Contains the test files for each component (e.g., `Button.test.tsx`, `Input.test.tsx`).
- **dist**: The output directory for the built files, generated by Rollup.
- **.husky**: Configuration files for Husky to manage Git hooks.
- **.github**: GitHub Action workflows for building, testing and deploying packages to GitHub Packages.
- **coverage**: Directory for code coverage reports generated by Jest.
- **node_modules**: Directory containing project dependencies.

### Development Scripts

- **build**: Uses Rollup to bundle the components for distribution.
- **lint**: Runs ESLint to check for code issues.
- **prepare**: Builds the project and installs Husky hooks.
- **test**: Runs unit tests using Jest.
- **test:coverage**: Runs unit tests and generates a code coverage report.

### Key Patterns

- **Component-Based Architecture**: Each UI element is encapsulated as a reusable component, promoting modularity and ease of maintenance.
- **Utility-First CSS**: Tailwind CSS is used for styling, allowing for rapid prototyping and consistent design.
- **Type Safety**: TypeScript ensures that the components are strongly typed, reducing the likelihood of runtime errors and improving developer productivity.

## GitHub Actions

The Beartracks UI project utilizes GitHub Actions to automate the build, test, and publish process. The provided workflow is triggered on every push to the `main` branch.
This includes 

### Workflow Explanation

Workflow Steps
1. build-and-test Job:
    - **Setup Node.js:** Configures the Node.js environment.
    - **Checkout code:** Checks out the repository code.
    - **Install dependencies:** Installs the necessary dependencies.
    - **Build project:** Runs linting and builds the project.
    - **Run unit tests:** Executes unit tests using Jest.
    - **Save build output:** Uploads the build artifacts for use in the next job.

2. bump-version-and-publish Job:
    - **Checkout code:** Checks out the repository code again.
    - **Download build output:** Downloads the build artifacts.
    - **Specify the node version:** Configures the Node.js environment.
    - **Configure Git Credentials:** Sets up Git credentials for version bumping.
    - **Install dependencies:** Installs the necessary dependencies.
    - **Ensure a clean working directory:** Ensures no uncommitted changes.
    - **Pull the latest:** Pulls the latest changes from the repository.
    - **Bump version:** Bumps the project version.
    - **Commit version bump:** Commits and pushes the version bump.
    - **Add global .npmrc file:** Adds the .npmrc file for authentication.
    - **Publish to GitHub packages:** Publishes the package to GitHub Packages.

This workflow automatically builds, tests and deploys the project to GitHub packages. It
also manages the package version by bumping the package.json version number.