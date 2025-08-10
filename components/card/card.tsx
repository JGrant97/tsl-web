import { ReactNode } from "react";
import styles from "./card.module.css";

export default function Card({ children }: { children: ReactNode }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}