import SectionContainer from "../../ui/container/SectionContainer";
import QuickAcessRow, { type QuickAcessRowType } from "./QuickAcessRow.tsx/QuickAcessRow";
import styles from  './QuickAcessRow.tsx/quickAccesRow.module.css';

interface QuickAcessProps{
  content: QuickAcessRowType[];
  color?: string;
  bgImg?: string
  altstyle?: boolean
}

export default function QuickAcess({content,  color, bgImg, altstyle=false}:QuickAcessProps){
  
  return(
    <SectionContainer bgImg={bgImg? bgImg:""} color={color? color:"#fff"}>
      <div className={styles.quickAcess}>
        {content.map((rowContent)=>{
          return(
            <QuickAcessRow altStyle={altstyle} data={rowContent}/>
          );
        })}
      </div>
    </SectionContainer>
  );
}