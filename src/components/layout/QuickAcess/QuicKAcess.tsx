import SectionContainer from "../../ui/container/SectionContainer";
import QuickAcessRow, { type QuickAcessRowType } from "./QuickAcessRow.tsx/QuickAcessRow";

interface QuickAcessProps{
  content: QuickAcessRowType[];
}

export default function QuickAcess({content}:QuickAcessProps){
  
  return(
    <SectionContainer color={"#fff"}>
      {content.map((rowContent)=>{
        return(
          <QuickAcessRow data={rowContent}/>
        );
      })}
    </SectionContainer>
  );
}