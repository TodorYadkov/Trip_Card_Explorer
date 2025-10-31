# Trip Card Explorer - React Application

## Overview

**Trip Card Explorer** is a React application that allows users to explore trips with detailed information, search locations, and sort trips by rating.</br>
The application is designed with **scalable architecture** in mind, using small, reusable components and centralized state management with **Redux**. It demonstrates modern React patterns like **hooks**, **error boundaries**, and modular styling.

**Live Demo:** https://trip-card-explorer.vercel.app/

---

## Features

- Display a list of trips.
- Search trips by location.
- Sort trips by rating (ascending, descending, or reset to default).
- Handle missing images.
- Manage global loading and error states via Redux.
- Error boundary for graceful error handling.
- Modular, reusable, and easily maintainable components.

---

## Architecture

The project follows a **component-driven architecture** with separation of concerns:

### 1. Small, Reusable Components

The app is built with many small components, each handling a specific task:

- **UI Components**
  - `Button` / `ButtonSort` – Reusable buttons with optional styles and actions.
  - `Input` – Styled input field with optional filled state.
  - `Rating` – Displays a star rating.
  - `Modal` – Flexible modal for messages or error handling.
- **Layout Components**
  - `Header` – Application header with search input and sort button.
  - `Footer` – Application footer with social links and test buttons for errors.
- **Feature Components**
  - `Dashboard` – Displays the list of trips dynamically.
  - `ErrorBoundaryComponent` – Catches runtime errors and displays friendly messages.

### 2. State Management

- **Redux** handles:
  - `dataState` – Stores the trip data.
  - `globalState` – Manages global loading and modal states.
- Custom hooks like `useFetcher` simulate API calls, handle loading, and dispatch global error messages.

### 3. Styling

- **CSS Modules** (`*.module.scss`) are used for scoped, maintainable styles.
- Components are styled individually to avoid conflicts.

### 4. Error Handling

- **Error Boundaries** (`ErrorBoundaryComponent`) catch runtime errors in child components.
- **Modal** is used for showing error messages triggered by Redux actions.

### 5. Scalability

- Small, self-contained components make it easy to:
  - Reuse components across multiple pages.
  - Add new features without affecting existing components.

---

## Best Practices Followed

- Component-driven development for scalability.
- Centralized state management via Redux.
- Error boundaries.
- Modular SCSS with scoped styling.

---

## Getting Started

Follow these steps to run the project locally:

```bash
git clone https://github.com/TodorYadkov/Trip_Card_Explorer.git
cd trip-card-explorer
npm install
npm run dev
```