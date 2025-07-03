import styles from "./contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.desc}>
        Have questions or want to enroll? Reach out to us below!
      </p>
      <form className={styles.form}>
        <input className={styles.input} type="text" placeholder="Your Name" required />
        <input className={styles.input} type="email" placeholder="Your Email" required />
        <textarea className={styles.textarea} placeholder="Your Message" required rows={5} />
        <button className={styles.button} type="submit">Send Message</button>
      </form>
    </section>
  );
}
