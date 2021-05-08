import styles from './Login.module.css';

export function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.headerpanel}>
          <span>D3<sub>charts</sub></span>
      </div>
      <div className={styles.loginbody}>
          Here Login body will come
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Login"
        >
            Login
        </button>
      </div>    
    </div>
  );
}
