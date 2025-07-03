"use client";
import styles from "./blog.module.css";

export default function Blog() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Educational Blog</h1>
      <p className={styles.subtitle}>
        Read our latest articles on Quranic studies, memorization tips, and Islamic lifestyle.
      </p>
      <div className={styles.blogList}>
        <div className={styles.blogCard} style={{ animationDelay: "0.1s" }}>
          <h2 className={styles.blogTitle}>How to Start Memorizing the Quran</h2>
          <p className={styles.blogDesc}>Discover practical steps and motivation for your Hifz journey.</p>
          <a className={styles.blogLink} href="#">Read More</a>
        </div>
        <div className={styles.blogCard} style={{ animationDelay: "0.2s" }}>
          <h2 className={styles.blogTitle}>Benefits of Learning Tajweed</h2>
          <p className={styles.blogDesc}>Understand why Tajweed is essential for every Muslim.</p>
          <a className={styles.blogLink} href="#">Read More</a>
        </div>
      </div>
    </section>
  );
}
