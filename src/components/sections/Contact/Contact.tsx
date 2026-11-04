import { useEffect, useState } from "react";
import SectionContainer from "../../ui/container/SectionContainer";
import styles from './contact.module.css';

interface ContactProps{
  color?: string
}

export default function  ContactSection ({color="#000"}:ContactProps) {

  const [emailAdress, setEmailAdress] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [showInputs, setShowInput] = useState(false);
  const [showSecondField, setShowField] = useState(false);

  
  const initForm = () => {
    setShowInput(true);


  }


  const submitEmail = () =>{

  }


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
          <div className={styles.contactContainer} onClick={()=> initForm()}>
            <div className={styles.inputArea}>
            {showInputs?
              <>
                <div id="first-step" className={styles.inputContainer}>
                  <label htmlFor="input">Insira o email:<span> ~$</span></label>
                  <textarea
                    name="input"
                    className={styles.textBox}
                    id="email"
                    value={emailAdress}
                    onChange={(e) => setEmailAdress(e.target.value)}
                    onSubmit={() => submitEmail()}
                    required
                    rows={1}
                  />
                </div>

                {!showSecondField?
                <div id="second-step" className={styles.inputContainer}>
                  <label htmlFor="messageInput">Insira a mensagem:<span> ~$</span></label>
                  <textarea
                    name="messageInput"
                    className={styles.textBox}
                    id="message"
                    value={emailMessage}
                    onChange={(e) => setEmailMessage(e.target.value)}
                    rows={10}
                    required
                  />
                </div>:""}
              </>:<p id="default-text">Gostou do meu trabalho? Que tal me enviar um email</p>
            }
            </div>
            {emailMessage !== ""? 
            <button onClick={() => enviarEmail()} className={styles.button}>Enviar Email</button>
            :""}
          </div>
        </div>
    </SectionContainer>
  );
}