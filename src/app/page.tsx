"use client";
import Center from "../components/Center";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.section}>
      <Center>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            Welcome to <span>Hafiz Academy</span>
          </h1>
          <p className={styles.subtitle}>
            Unlock the beauty of the Quran and Islamic knowledge with our expert-led courses, engaging blog, and vibrant community.
          </p>
          <div className={styles.buttonRow}>
            <a href="/courses" className={styles.button}>Explore Courses</a>
            <a href="/blog" className={`${styles.button} ${styles.green}`}>Read Blog</a>
          </div>
        </div>
        <div className={styles.videoWrapper}>
          <div className={styles.videoFrame}>
            <iframe width="100%" height="215" src="https://www.youtube.com/embed/6R6g1UeF6jE" title="Sample Course Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
        <div className={styles.socialSection}>
          <h2 className={styles.socialTitle}>Connect with us</h2>
          <div className={styles.socialLinks}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} style={{ color: '#4267B2' }}>Facebook</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} style={{ color: '#FF0000' }}>YouTube</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} style={{ color: '#1DA1F2' }}>Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} style={{ color: '#C13584' }}>Instagram</a>
          </div>
        </div>
      </Center>
    </section>
  );
}
