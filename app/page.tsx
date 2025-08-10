import LiveSession from "@/components/session/liveSession";
import styles from "./page.module.css";
import Card from "@/components/card/card";

export default async function Home() {


  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Card>
          <LiveSession/>
        </Card>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
