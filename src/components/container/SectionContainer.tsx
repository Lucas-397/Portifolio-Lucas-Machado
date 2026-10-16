import type { ReactNode } from "react";
import styles from './sectionContainer.module.css'

interface sectionContainerProps{
  children: ReactNode;
  color: string;
  bgImg?: string; //caminho para a imagem
}

export default function SectionContainer({children, color, bgImg}: sectionContainerProps) {
  return(
    <div className={styles.container} style={bgImg? {backgroundImage:bgImg, backgroundColor:color}:{backgroundColor:color}}>
      {children}
    </div>
  );
};