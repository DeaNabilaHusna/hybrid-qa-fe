import styles from '../styles/components/Header.module.scss';

export default function Header(){
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div> <img className={styles.logo} src="./Logo_UA_Transparant.png" alt="" /></div>
        <div><h1 className={styles.title}>Ask.UNAIR</h1></div>
      </div>
    </header>
  );
};

