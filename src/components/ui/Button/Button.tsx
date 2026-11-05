import style from './button.module.css'

interface ButtonProps{
  onclick: () => void;
  text?: string;
}

export default function Button({text='Visualizar', onclick}:ButtonProps){
  return(
    <button className={style.button} onClick={() => onclick}>{text}</button>
  )
}