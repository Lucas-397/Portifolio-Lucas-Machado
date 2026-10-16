import styles from './header.module.css';
import { Link } from 'react-router-dom';


function PageHeader () {

  function expandMenu(){
    const menu = document.getElementById('menu-mobile');
    if(menu){
      menu.style.display = 'block';

      document.addEventListener('click', e =>{
        if(e.target !== menu){
          menu.style.display = 'none';
        }
      });
    }
  }

  const sections = [
    {
      title:'Meus Projetos',
      href: ''
    },
    {
      title:'Sobre Mim',
      href: ''
    }
  ];

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div>
          <img src="" alt="logo lucas machado" />
        </div>
        <div className={styles.textSection}>
          <Link to="" className={styles.link}>Meus Projetos</Link>
          <Link to="" className={styles.link}>Sobre Mim</Link>
          <a href="google.com" target='__blank' className={styles.link}>Meu Curriculo</a>
        </div>
        <div className={styles.iconSection}>
          <a href='https://github.com/Lucas-397'>
            <i className="bi bi-github"></i>  
          </a>
          <a href='https://www.linkedin.com/in/dev-lucas-machado'>
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
        <div onClick={() => expandMenu} className={styles.mobileSections}>
          <i className="bi bi-list"></i>
        </div>
      </div>
      <div id='menu-mobile'>
        
      </div>
    </div>
  );
}

export default PageHeader;