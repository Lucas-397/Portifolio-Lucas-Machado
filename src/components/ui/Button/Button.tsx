import style from './button.module.css'

interface ButtonProps{
  text: string;
  onclick: () => void;
}

export default function Button({text, onclick}:ButtonProps){
  return(
    <button className={style.button} onClick={() => onclick}>{text}</button>
  )
}