import "../src/styles/index.scss";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";

import { store } from "./store";

import App from "./App.jsx";
import { ErrorBoundaryComponent } from "./pages";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorBoundaryComponent}
      onReset={() => {
        console.warn("Error boundary reset!");
      }}
    >
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </ErrorBoundary>
  </StrictMode>,
);