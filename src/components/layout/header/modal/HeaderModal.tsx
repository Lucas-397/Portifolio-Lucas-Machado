import Row from '../../../ui/row/Row';
import styles from './headerModal.module.css'

export default function HeaderModal(){
  const modalLinks = [
    {
      title:'Meus Projetos',
      link: ''
    },
    {
      title:'Sobre Mim',
      link: ''
    }
  ];

  return(
     <div id='menu-mobile' className={styles.menuModal}>
        {modalLinks.map((item, index) => {
          return <Row text={item.title} page={item.link} last={index == modalLinks.length-1}/>
        })}
      </div>
  )
}