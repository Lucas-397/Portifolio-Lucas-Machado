import QuickAcessRow, { type QuickAcessRowType } from "./QuickAcessRow.tsx/QuickAcessRow";
import styles from  './QuickAcessRow.tsx/quickAccesRow.module.css';

interface QuickAcessProps{
  content: QuickAcessRowType[];
  altstyle?: boolean
}

export default function QuickAcess({content, altstyle=false}:QuickAcessProps){
  
  return(
      <div className={styles.quickAcess}>
        {content.map((rowContent, index)=>{
          return(
            <QuickAcessRow key={index} altStyle={altstyle} data={rowContent}/>
          );
        })}
      </div>
  );
}