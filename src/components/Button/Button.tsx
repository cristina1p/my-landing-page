import styles from "./Button.module.css";

type ButtonProps = {
  text: string;
  className?: string;
};

export function Button({ text, className = "" }: ButtonProps) {
  return (
    <button className={`${styles["primary-button"]} ${className}`}>
      {text}
    </button>
  );
}
