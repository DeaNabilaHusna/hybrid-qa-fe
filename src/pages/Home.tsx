import styles from "../styles/pages/home.module.scss";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <img
        className={styles.logo}
        src="./Logo_UA_Transparant.png"
        alt="Logo unair"
      />
      <div className={styles.text}>
        <h1 className={styles.title}>Selamat Datang di</h1>
        <h1 className={styles.title}>Ask.UNAIR 👋</h1>
        <p className={styles.tagline}>Layanan tanya jawab cerdas untuk seluruh civitas UNAIR.</p>
      </div>
      <div>
        <Button to="/Chat">Mulai Bertanya</Button>
      </div>
    </div>
  );
}
