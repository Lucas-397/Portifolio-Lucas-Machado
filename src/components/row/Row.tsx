import styles  from "./row.module.css"

interface RowProps{
  text: string,
  page: string
  last?: boolean
}

export default function Row({text, page, last=false}:RowProps){
  return(
    <div 
      className={styles.container} 
      style={last?{borderBottom: '0px', borderRadius:'8px'}:{}}
      onClick={()=> window.location.hash = `#${page}`}
    >
      <p>{text}</p>
    </div>
  )
}