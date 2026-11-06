import { useEffect, useRef, useState } from "react";
import SectionContainer from "../../ui/container/SectionContainer";
import styles from './contact.module.css';

interface ContactProps{
  color?: string
}


export default function  ContactSection ({color="#000"}:ContactProps) {
  const [emailAdress, setEmailAdress] = useState('');
  const adressInputRef = useRef<HTMLTextAreaElement>(null);
  
  const [emailMessage, setEmailMessage] = useState('');
  const messageInputRef= useRef<HTMLTextAreaElement>(null);
  
  const [showInputs, setShowInput] = useState(false);
  const [showSecondField, setShowField] = useState(false);

  const initForm = () => {
    setShowInput(true);
    controSearchBar();
  }

  const controSearchBar = () => {
    const emailInput = document.getElementById('email');
    
    emailInput?.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        event.preventDefault(); // Impede a quebra de linha padrão do textarea
        setShowField(true);
        return;
      }
    });
  }

  const validateMail = () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(emailAdress);
  };

  useEffect(()=> {
    function controlInputFocus(){
      if(showInputs){
        if(showSecondField && validateMail()){
          messageInputRef.current!.focus();
          return
        }
        adressInputRef.current!.focus();
      }
    }

    controlInputFocus();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[showInputs, showSecondField])


  useEffect(()=>{
    if(showInputs){
      controSearchBar();
    }
  },[showInputs])
  
  const [status, setStatus] = useState('');

  const handleSubmit = async () => {
    setStatus('Enviando...');
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
            <div className={styles.inputArea} onClick={()=> initForm()}>
            {showInputs?
              <>
                <div id="first-step" className={styles.inputContainer}>
                  <label htmlFor="input">Insira o email:<span> ~$</span></label>
                  <textarea
                    ref={adressInputRef}
                    id="email"
                    name="input"
                    className={styles.textBox}
                    value={emailAdress}
                    onChange={(e) => setEmailAdress(e.target.value.toLowerCase().trim())}
                    required
                    rows={1}
                  />
                </div>

                {
                showSecondField?  
                  validateMail()?
                    <div id="second-step" className={styles.inputContainer}>
                      <label htmlFor="messageInput">Insira a mensagem:<span> ~$</span></label>
                      <textarea
                        ref={messageInputRef}
                        id="message"
                        name="messageInput"
                        className={styles.textBox}
                        value={emailMessage}
                        onChange={(e) => setEmailMessage(e.target.value)}
                        rows={10}
                        required
                      />
                    </div>
                    :"deu ruim"
                :""
                }
              </>:<p id="default-text">Gostou do meu trabalho? Que tal me enviar um email</p>
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