import { useNavigate } from "react-router-dom";
import Button from "../../../ui/Button/Button";
import styles from "./quickAccesRow.module.css"

export interface QuickAcessRowType{
  img: string;
  title: string;
  text: string;
  hash: string;
  buttonText?:string
}

interface QuicKAcessRowProps{
  data: QuickAcessRowType;
  altStyle?: boolean
}

export default function QuicKAcessRow ({data, altStyle=false}:QuicKAcessRowProps){
  const navigate = useNavigate();  
  
  return(
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <div className={styles.textContent}>
          <h2>{data.title}</h2>
          <p>{data.text}</p>
        </div>
        <Button onclick={() => navigate(data.hash)} text={data.buttonText} ></Button>
      </div>
      <div>
        {altStyle? 
        <h2>{data.title}</h2>:''
        }
        <img src={data.img} alt="row-img" />
        <div className={altStyle? styles.altImgButton:styles.imgButton}>
          <Button onclick={() => navigate(data.hash)} text={data.buttonText}/>:
        </div>
      </div>
    </div>
  )
}