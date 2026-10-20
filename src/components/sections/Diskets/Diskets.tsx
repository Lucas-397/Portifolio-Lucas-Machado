import QuickAcess from "../../layout/QuickAcess/QuicKAcess";
import type { QuickAcessRowType } from "../../layout/QuickAcess/QuickAcessRow.tsx/QuickAcessRow";

export default function Diskets(){
  const content:QuickAcessRowType[] = [
    {
      img:"/src/Assets/Img/diskete-projects.png",    
      title:"Meus Projetos",
      text:"Navegue e descubra tudo sobre meus melhores projetos, das suas funcionalidades ao seu processo de desenvolvimento.",
      hash:""
    },
    {
      img:"/src/Assets/Img/disket-about-me.png",    
      title:"Sobre mim",
      text:"Descubra a minha historia, meus gostos e minha carreira profissional na TI.",
      hash:""
    }
  ]

  return <QuickAcess content={content}/>;
}