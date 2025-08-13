import styles from "./Button.module.scss";

interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, ...props }: buttonProps) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}
