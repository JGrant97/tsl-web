import LiveSession from "@/components/liveSession";
import styles from "./page.module.css";

export default async function Home() {


  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <LiveSession/>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
