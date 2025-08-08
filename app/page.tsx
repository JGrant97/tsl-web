import styles from "./page.module.css";

export default async function Home() {

  console.log(process.env.API_URL)
  const res = await fetch(`${process.env.API_URL}/weatherforecast`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  console.log(res.ok)

  console.log(await res.json())

  return (
    <div className={styles.page}>
      <main className={styles.main}>
      </main>
      <footer className={styles.footer}>

      </footer>
    </div>
  );
}
