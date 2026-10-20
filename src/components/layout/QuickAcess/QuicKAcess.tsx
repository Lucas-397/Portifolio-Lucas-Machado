import SectionContainer from "../../ui/container/SectionContainer";
import QuickAcessRow, { type QuickAcessRowType } from "./QuickAcessRow.tsx/QuickAcessRow";
import styles from  './QuickAcessRow.tsx/quickAccesRow.module.css';

interface QuickAcessProps{
  content: QuickAcessRowType[];
  altButtonText?: string
}

export default function QuickAcess({content, altButtonText}:QuickAcessProps){
  
  return(
    <SectionContainer color={"#fff"}>
      <div className={styles.quickAcess}>
        {content.map((rowContent)=>{
          return(
            <QuickAcessRow buttonText={altButtonText} data={rowContent}/>
          );
        })}
      </div>
    </SectionContainer>
  );
}