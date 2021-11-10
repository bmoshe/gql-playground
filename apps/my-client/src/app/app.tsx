import styles from './app.module.scss';
import PersonBox from "./person-box/person-box";

export function App() {
  return (
    <div className={styles.app}>
      <PersonBox id={"1234"} />
    </div>
  );
}

export default App;
