import { useState } from "react";
import SectionContainer from "../../ui/container/SectionContainer";
import styles from './contact.module.css';

interface ContactProps{
  color?: string
}

export default function  ContactSection ({color="#000"}:ContactProps) {

  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] =  useState('');

  const enviarEmail = async () => {
  }

  return (
    <SectionContainer color={color}>
      <h2 className={styles.title}>Contato</h2>

        <div className={styles.contactBox}>
          <div className={styles.header}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={styles.contactContainer}>
              <textarea
                className={styles.textBox}
                id="email"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Gostou do meu trabalho? Me envie um email..."
                required
              />
              <button onClick={() => enviarEmail()} className={styles.button}>Enviar Email</button>
          </div>
        </div>
    </SectionContainer>
  );
}