import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactStyles.module.css";

function Contact() {
  const formRef = useRef(null);
  const messageRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wkn6pjr", // serviceID
        "template_ksd33xe", // templateID
        formRef.current, // form
        "hCs2zaisqosRkdian", // public key
      )
      .then(
        () => {
          messageRef.current.textContent = "Mensagem enviada com sucesso ✅";

          setTimeout(() => {
            messageRef.current.textContent = "";
          }, 5000);

          e.target.reset();
        },
        () => {
          messageRef.current.textContent = "Erro ao enviar mensagem ❌";
        },
      );
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>

      <form ref={formRef} onSubmit={sendEmail}>
        <div className="formGroup">
          <input type="text" name="name" placeholder="Name" required />
        </div>

        <div className="formGroup">
          <input type="email" name="email" placeholder="Email" required />
        </div>

        <div className="formGroup">
          <textarea name="message" placeholder="Message" required />
        </div>

        <p ref={messageRef} id="contact-message"></p>

        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
