import tires from './../images/tires.jpg'
import styles from './styles/main.module.css';

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>Шины збс</div>
      <img className={styles.main_background} src={tires} alt="tires" />
    </main>
  )
}

export default Main