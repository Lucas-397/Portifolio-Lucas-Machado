import { useState } from "react";
import SectionContainer from "../../ui/container/SectionContainer";
import styles from './contact.module.css';

interface ContactProps{
  color?: string
}

export default function  ContactSection ({color="#000"}:ContactProps) {

  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] =  useState();

  const enviarEmail = async (e) => {
    e.preventDefault();
  }

  return (
    <SectionContainer color={color}>
      <h2 className={styles.title}>Contato</h2>
      
      <div className={styles.contactContainer}>
        <div>
        </div>
          <form onSubmit={(e)=> enviarEmail(e)}>
            <textarea
              className={styles.textBox}
              id="email"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Gostou do meu trabalho? Me envie um email..."
              required
            />
            {status && <p>{status}</p>}
            {inputValue !== ''?
              <button type="submit" style={{ marginTop: '10px' }}>
                Enviar Email
              </button>:''
            }
          </form>
        </div>
    </SectionContainer>
  );
}