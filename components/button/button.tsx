import { ButtonHTMLAttributes } from 'react';
import styles from './button.module.css';

export default function Button({ className, children, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${styles.button} ${className}`} {...rest}>
      {children}
    </button>
  );
}