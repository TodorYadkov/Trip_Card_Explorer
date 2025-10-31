import styles from "./Input.module.scss";

/**
 * Input Component
 * Input component for accepting user input.
 * @param {Object} props - The component props.
 * @param {boolean} [props.isFilled=false] - Adds filled styling when true.
 * @param {any} [props.*] - Additional input props passed through.
 * @returns {JSX.Element} The rendered Input component.
 * 
 *  @example
 * // Importing Input component:
 * import Input from "./Input";
 * 
 * // Usage of Input component:
 * <Input
 *   placeholder="Search location"
 * />
 */
const Input = ({ isFilled = false, ...props }) => {
    return (
        <input className={`${styles.input_element} ${isFilled ? styles.filled : ""}`} {...props} />
    );
};

export default Input;
