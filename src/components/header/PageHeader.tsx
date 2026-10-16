import { useState } from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import HeaderModal from './modal/HeaderModal';


function PageHeader () {

  const [mobileMenuShow, setMobileMenuShow] = useState(false);

  function toggleMenu(){
    setMobileMenuShow(prev => !prev);//toggler de menu
    console.log(mobileMenuShow);

    document.addEventListener('click', () =>{//fecha o menu caso clique fora do mesmo 
      const menu = document.getElementById('menu-mobile');
      if(menu){
        setMobileMenuShow(false);//toggler de menu
      }
    }, {once:true})
  }

  return (
    <>
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
        <div 
            onClick={(event) => {
              event.stopPropagation() 
              toggleMenu();
            }} 
            className={styles.mobileSections}
          >
          <i className="bi bi-list"></i>
        </div>
      </div>
    </div>
    {mobileMenuShow && (
      <HeaderModal />
    )}
    </>
  );
}

export default PageHeader;