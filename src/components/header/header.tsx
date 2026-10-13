import styles from './header.module.css';
import { Link } from 'react-router-dom';


function PageHeader () {

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div>
          <img src="" alt="logo lucas machado" />
        </div>
        <div className={styles.textSection}>
          <Link to="" className={styles.link}>Meus Projetos</Link>
          <Link to="" className={styles.link}>Sobre Mim</Link>
          <a href="google.com" target='__blank' className={styles.link}>Meu curriculo</a>
        </div>
        <div className={styles.iconSection}>
          <i className="bi bi-github"></i>
          <i className="bi bi-linkedin"></i>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;