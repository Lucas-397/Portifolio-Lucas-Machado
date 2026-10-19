import SectionContainer from "../../ui/container/SectionContainer";
import QuickAcessRow, { type QuickAcessRowType } from "./QuickAcessRow.tsx/QuickAcessRow";

interface QuickAcessProps{
  content: QuickAcessRowType[];
  altButtonText?: string
}

export default function QuickAcess({content, altButtonText}:QuickAcessProps){
  
  return(
    <SectionContainer color={"#fff"}>
      {content.map((rowContent)=>{
        return(
          <QuickAcessRow buttonText={altButtonText} data={rowContent}/>
        );
      })}
    </SectionContainer>
  );
}