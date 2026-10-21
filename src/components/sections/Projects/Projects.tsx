/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import QuickAcess from "../../layout/QuickAcess/QuicKAcess";
import type { QuickAcessRowType } from "../../layout/QuickAcess/QuickAcessRow.tsx/QuickAcessRow";
import SectionContainer from "../../ui/container/SectionContainer";
import styles from './projects.module.css'

interface ProjectsSectionProps{
  currentProjectId?: string;//colocar aqui o id do projeto aberto para estilização especifica
}

export default function ProjectsSection ({currentProjectId=""}:ProjectsSectionProps){
  const [data, setData] = useState<QuickAcessRowType[]>([]);

  try{
    useEffect(() => {
      const getData = async () => {
        let projectsData:any;
        const response = await fetch("/src/Assets/data/projects.json");
        if(response.ok){
          projectsData = await response.json();
          
          const formatedData:QuickAcessRowType[] = projectsData.Projetos.filter((projeto:any) => projeto.id !== currentProjectId)
          .map((projeto:any) => (
              {
                img: `${projeto.img}`,
                title: `${projeto.title}`,
                text: `${projeto.description}`,
                hash: `#projects=${projeto.id}`
              }
        ));
          setData(formatedData);
        }
    };
    getData();
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  }catch(error){
    console.log(error)
  }

  return (
    <SectionContainer color="#fff">
      <div>
        <h1 className={styles.textContainer}>{currentProjectId? "Mais Projetos":"Meus Projetos"}</h1>
        <p className={styles.text}>Nesta sessão você pode conferir tudo sobre meus melhores projetos. Basta clicar no botão e começar sua viagem.</p>
      </div>
      {data? 
        <QuickAcess altstyle content={data} />:''
      }
    </SectionContainer>
  );
}