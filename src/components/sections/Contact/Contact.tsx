import { useEffect, useRef, useState } from "react";
import SectionContainer from "../../ui/container/SectionContainer";
import styles from './contact.module.css';
import ErrorMsg from "../../ui/ErrorMsg/ErrorMsg";

interface ContactProps{
  color?: string
}


export default function  ContactSection ({color="#000"}:ContactProps) {
  const [emailAdress, setEmailAdress] = useState('');
  const adressInputRef = useRef<HTMLTextAreaElement>(null);
  
  const [emailMessage, setEmailMessage] = useState('');
  const messageInputRef= useRef<HTMLTextAreaElement>(null);
  
  const [status, setStatus] = useState('');

  const handleSubmit = async () => {
    console.log('Enviando...');
    try {
      // Substitua SEU_FORM_ID pelo ID gerado no painel do Formspree
      const response = await fetch('https://formspree.io/f/mbggwyee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ emailAdress, emailMessage })
      });

      if (response.ok) {
        setStatus('Mensagem enviada com sucesso!');

      } else {
        setStatus('Erro ao enviar a mensagem. Tente novamente.');
      }
    } catch (error) {
      console.log(error);
      setStatus('Erro de conexão.');
    }
  };

  const emailInput = document.getElementById('email');
  emailInput?.addEventListener('keydown', event => {
      validateMail();
      if(event.key === "enter") event.preventDefault();
      return;
  });

  function controlEmailSent(){
    document.getElementById('message')?.addEventListener('keydown', (e)=>{
      if(!e.shiftKey){
        if(e.key === "Enter"){
          e.preventDefault();
          handleSubmit();
        }
      }
    });
  }

  const [isEmailValid, setIsEmailValid] = useState(false);

  const validateMail = () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsEmailValid(regex.test(emailAdress));
  };

  useEffect(()=> {
    function controlInputFocus(){
        if(isEmailValid){ 
          messageInputRef.current?.focus();
          controlEmailSent();
          return
        }
        adressInputRef.current!.focus();
      }
      
    controlInputFocus();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isEmailValid])

  return (
    <SectionContainer color={color}>
      <div className={styles.title}>
        <h2>Contato</h2>
        <p id="default-text">Gostou do meu trabalho? Que tal me enviar um email</p>

      </div>
        <div className={styles.contactBox}>
          <div className={styles.header}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={styles.contactContainer}>
            <div className={styles.inputArea}>
                <div id="first-step" className={styles.inputContainer}>
                  <label htmlFor="input">Seu email:<span>~$</span></label>
                  <textarea
                    ref={adressInputRef}
                    id="email"
                    name="input"
                    className={styles.textBox}
                    value={emailAdress}
                    onChange={(e) => setEmailAdress(e.target.value.toLowerCase().trim())}
                    required
                    rows={2 }
                  />
                </div>

                {isEmailValid?
                    <div id="second-step" className={styles.inputContainer}>
                      <label htmlFor="messageInput">Sua mensagem:<span>~$</span></label>
                      <textarea
                        ref={messageInputRef}
                        id="message"
                        name="messageInput"
                        className={styles.textBox}
                        value={emailMessage}
                        onChange={(e) => setEmailMessage(e.target.value)}
                        rows={9}
                        required
                      />
                    </div>
                    :<ErrorMsg message={"Email Invalido"}/>
                }
            </div>
            {emailMessage !== ""? 
            <button onClick={() => handleSubmit()} className={styles.button}>Enviar Email</button>
            :""}
          </div>
        </div>
    </SectionContainer>
  );
}