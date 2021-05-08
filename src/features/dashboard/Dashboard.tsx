import styles from './Dashboard.module.css';
import logo from '../../stories/assets/svg/logo.svg';
import { Mainpanel } from '../mainpanel/Mainpanel';
import Icon from "../../utilities/icon";

export function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.headerpanel}>
        <img src={logo} className={styles.logo} alt="Logo" />
        <div className={styles.headerTopRightContainer}>
            <span>Home</span>
            <Icon icon="Notification" size={20}/>
            <span>Sathish</span>
            <Icon icon="Menu" size={20}/>
        </div>
      </div>
      <div className={styles.contentPanel}>
          <div className={styles.leftPanel}>
              left panel
          </div>
          <div className={styles.mainPanel}>
              <Mainpanel></Mainpanel>
          </div>
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
