import styles from "./ErrorBoundaryComponent.module.scss";

/**
 * ErrorBoundaryComponent
 * This component is rendered by an error boundary to display a friendly error message.
 * @returns {JSX.Element} The rendered ErrorBoundaryComponent.
 */
const ErrorBoundaryComponent = ({ resetErrorBoundary }) => {
  return (
    <div className={`col ${styles.error_boundary_container}`}>
      <h1 className={`col ${styles.error_boundary_message}`}>Something went wrong
        <span>An unexpected error occurred.</span>
        <span onClick={resetErrorBoundary}>Please try again</span>
      </h1>
    </div>
  );
};

export default ErrorBoundaryComponent;