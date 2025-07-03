"use client";
import styles from "./Center.module.css";

export default function Center({ children }: { children: React.ReactNode }) {
  return <div className={styles.center}>{children}</div>;
}
