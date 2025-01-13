import styles from "./Button.module.css";

function Button({ children, onClick, type, disabled }) {
  return (
    <button
      className={`${styles.btn} ${styles[type]} ${disabled && styles.disabled}`}
      onClick={onClick}
      disabled={disabled}
    >
      {disabled ? "🚫" : children}
    </button>
  );
}

export default Button;
