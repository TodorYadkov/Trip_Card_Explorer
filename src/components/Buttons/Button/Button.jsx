import styles from "./Button.module.scss";

/**
 * Button Component
 * Renders a styled button that displays either children or a text label, with optional red styling.
 * @param {Object} props - The component props.
 * @param {string} text - The button label if children are not provided.
 * @param {React.ReactNode} children - Custom content inside the button.
 * @param {boolean} red - Applies red styling when true.
 * @param {any} props.* - Additional button props passed through.
 * @returns {JSX.Element} The rendered Button component.
 * 
 * @example
 * // Importing Button component:
 * import Button from "./Button";
 *
 * // Usage of Button component:
 * <Button
 *   text="Click Me"
 *   onClick={() => console.log("Button clicked!")}
 *   red={true}
 * />
 */
const Button = ({ children, text, red, ...props }) => {

  return (
    <button
      className={`${styles.button} ${red ? styles.red_button : ""}`}
      {...props}
    >
      {children || text}
    </button>
  );
};

export default Button;
