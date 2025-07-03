import styles from "./about.module.css";

export default function About() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>About Hafiz Academy</h1>
      <p className={styles.desc}>
        Hafiz Academy is dedicated to helping students of all ages memorize the
        Quran, master Tajweed, and deepen their understanding of Islam. Our
        experienced teachers and innovative courses make learning accessible and
        engaging for everyone.
      </p>
      <ul className={styles.list}>
        <li className={styles.listItem}>Expert Hafiz instructors</li>
        <li className={styles.listItem}>Flexible online courses</li>
        <li className={styles.listItem}>Supportive learning community</li>
        <li className={styles.listItem}>Resources for parents and students</li>
      </ul>
    </section>
  );
}
