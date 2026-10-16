import Row from "../../row/Row";
import styles from './headerModal.module.css'

interface HeaderModalProps{
  display: boolean
}

export default function HeaderModal({display}:HeaderModalProps){
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
     <div id='menu-mobile' className={styles.menuModal} style={{display: display? 'block':'none'}}>
        {modalLinks.map((item, index) => {
          return <Row text={item.title} page={item.link} last={index == modalLinks.length-1}/>
        })}
      </div>
  )
}