/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import QuickAcess from "../../layout/QuickAcess/QuicKAcess";
import type { QuickAcessRowType } from "../../layout/QuickAcess/QuickAcessRow.tsx/QuickAcessRow";

export default function ProjectsSection (){
  const [data, setData] = useState<QuickAcessRowType[]>([]);

  try{
    useEffect(() => {
      const getData = async () => {
        let projectsData:any;
        const response = await fetch("/src/Assets/data/projects.json");
        if(response.ok){
          projectsData = await response.json();
          
          const formatedData:QuickAcessRowType[] = projectsData.Projetos.map((projeto:any) =>(
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
    <>
    {data? 
      <QuickAcess altstyle content={data} />:''
    }
    </>
  );
}