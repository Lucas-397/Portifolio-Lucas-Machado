import SectionContainer from "../../../components/ui/container/SectionContainer";
import styles from "./HomeHero.module.css"

export default function HomeHero(){
  return(
    <SectionContainer>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
            <img alt="teste" src="/src/Assets/Img/tv.png" />
        </div>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>Eu sou <span>Lucas Machado</span> e este é o meu portifolio</h1>
            <p>Bem vindo ao meu portifólio, sou um desenvolvedor especializado no <span>front-end</span> com expertise no ecossitema <span>React</span> e aqui você poderá descobrir mais sobre mim e explorar meus melhores projetos </p>
        </div>
      </div>
    </SectionContainer>
  );
}