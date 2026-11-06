import styles from './errorMsg.module.css';

interface ErrorMsgProps{
  message: string
}

export default function ErrorMsg ({message}:ErrorMsgProps) {
  return(
    <p className={styles.text}>{message}</p>
  );
}