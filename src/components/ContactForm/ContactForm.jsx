import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("Rachit");
  const [email, setEmail] = useState("support@gmail.com");
  const [text, setText] = useState("Do connect with");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  const handleWhatsApp = () => {
    const phoneNumber = "+91 7017460876";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;
    window.location.href = whatsappLink;
  };

  const handlePhoneCall = () => {
    window.location.href = "tel:+7017460876";
  };

  const handleEmailForm = () => {
    const mailtoLink = `mailto:${encodeURIComponent(regarachit008@gmail.com)}?subject=Support%20Request%20from%20${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(text)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="TEXT ME ON WHATSAPP"
            icon={<MdMessage fontSize="24px" />}
            onClick={handleWhatsApp} 
          />
          <Button
            text="VIA CALL"
            icon={<FaPhoneAlt fontSize="24px" />}
            onClick={handlePhoneCall}
          />
        </div>
        {/* Updated Button to open mailto link */}
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
          onClick={handleEmailForm} 
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>

          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/contact.svg" alt="contact image" />
      </div>
    </section>
  );
};

export default ContactForm;
