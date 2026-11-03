import { useNavigate } from "react-router-dom";
import Button from "../../../ui/Button/Button";
import styles from "./quickAccesRow.module.css"

export interface QuickAcessRowType{
  img: string;
  title: string;
  text: string;
  hash: string;
}

interface QuicKAcessRowProps{
  data: QuickAcessRowType;
  altStyle?: boolean
  buttonText?: string
}

export default function QuicKAcessRow ({data, buttonText, altStyle=false}:QuicKAcessRowProps){
  const navigate = useNavigate();  
  
  return(
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <div className={styles.textContent}>
          <h2>{data.title}</h2>
          <p>{data.text}</p>
        </div>
        <Button onclick={() => navigate(data.hash)} text={buttonText} ></Button>
      </div>
      <div onClick={() => navigate(data.hash)} className={styles.imgContainer}>
        {altStyle? 
        <h2 className={styles.mobile}>{data.title}</h2>:''
        }
        <div className={styles.imgWrap} onClick={() => navigate(data.hash)} >
          <img src={data.img} alt="row-img" />
          <div id="altButton" className={altStyle? styles.altImgButton:styles.imgButton}>
            <Button onclick={() => navigate(data.hash)} text={buttonText}/>
          </div>
        </div>
      </div>
    </div>
  )
}