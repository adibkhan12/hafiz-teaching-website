"use client";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contactinfo">
      <div className={styles.section}>
        <div className={styles.logo}>
          <span className="emoji" role="img" aria-label="book">📚</span>
          Hafiz Academy
        </div>
        <div className={styles.contactInfo}>
          <div className={styles.contactRow}>
            <span className="emoji" role="img" aria-label="location">📍</span>
            Online & Local Classes
          </div>
          <div className={styles.contactRow}>
            <span className="emoji" role="img" aria-label="phone">📞</span>
            <a href="tel:123456789">+123-456-789</a>
          </div>
          <div className={styles.contactRow}>
            <span className="emoji" role="img" aria-label="email">✉️</span>
            <a href="mailto:info@hafizacademy.com">info@hafizacademy.com</a>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Quick Links</h4>
        <ul className={styles.quickLinks}>
          <li>
            <span className="emoji" role="img" aria-label="about">ℹ️</span>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <span className="emoji" role="img" aria-label="courses">📖</span>
            <Link href="/courses">Courses</Link>
          </li>
          <li>
            <span className="emoji" role="img" aria-label="blog">📝</span>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <span className="emoji" role="img" aria-label="contact">📬</span>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Follow Us</h4>
        <div className={styles.socialIconsContainer}>
          <a className={styles.socialIconBox} href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-label="Facebook"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
          </a>
          <a className={styles.socialIconBox} href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-label="Instagram"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.13.62a1.13 1.13 0 1 1-2.26 0 1.13 1.13 0 0 1 2.26 0z"/></svg>
          </a>
          <a className={styles.socialIconBox} href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-label="Twitter"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/></svg>
          </a>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Hafiz Academy. All rights reserved.
      </div>
    </footer>
  );
}
