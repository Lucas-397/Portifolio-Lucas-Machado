import { useEffect, useRef, type ReactNode } from "react";
import styles from './sectionContainer.module.css'

interface sectionContainerProps{
  children: ReactNode;
  color?: string;
  bgImg?: string; //caminho para a imagem
}

export default function SectionContainer({children, color, bgImg=""}: sectionContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  console.log(bgImg)
  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        
        // 3. Se a seção entrar na tela...
        if (entry.isIntersecting) {
          element.classList.add(styles.visible); // Adiciona a classe do CSS module
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15 // Dispara a animação quando 15% do componente aparecer na tela
      }
    );

    // Inicia a observação
    observer.observe(element);

    // 4. Limpa o observador caso o componente seja destruído (evita vazamento de memória)
    return () => {
      observer.disconnect();
    };
  }, []);

  return(
    <div ref={containerRef} className={styles.container} style={{backgroundImage:`url(${bgImg})`, backgroundColor:color}}>
      {children}
    </div>
  );
};