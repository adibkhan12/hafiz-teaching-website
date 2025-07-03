import styles from "./courses.module.css";

export default function Courses() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Our Courses</h1>
      <p className={styles.subtitle}>
        Explore our Quran memorization, Tajweed, and Islamic studies courses. Each course is designed to help you grow in knowledge and spirituality.
      </p>
      <div className={styles.cardRow}>
        <div className={styles.card} style={{ animationDelay: "0.1s" }}>
          <h2 className={styles.cardTitle}>Quran Memorization</h2>
          <p className={styles.cardDesc}>Step-by-step guidance to become a Hafiz with expert teachers.</p>
          <a className={styles.cardLink} href="#">View Details</a>
        </div>
        <div className={styles.card} style={{ animationDelay: "0.2s" }}>
          <h2 className={styles.cardTitle}>Tajweed Mastery</h2>
          <p className={styles.cardDesc}>Perfect your recitation with our comprehensive Tajweed course.</p>
          <a className={styles.cardLink} href="#">View Details</a>
        </div>
        <div className={styles.card} style={{ animationDelay: "0.3s" }}>
          <h2 className={styles.cardTitle}>Islamic Studies</h2>
          <p className={styles.cardDesc}>Deepen your understanding of Islam with engaging lessons.</p>
          <a className={styles.cardLink} href="#">View Details</a>
        </div>
      </div>
    </section>
  );
}
