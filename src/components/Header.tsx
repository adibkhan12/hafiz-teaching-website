"use client";
import Link from "next/link";
import Center from "./Center";
import { useState } from "react";
import styles from "./Header.module.css";

const navItems = [
	{ href: "/", label: "Home" },
	{ href: "/courses", label: "Courses" },
	{ href: "/blog", label: "Blog" },
	{ href: "/about", label: "About" },
	{ href: "/contact", label: "Contact" },
];

export default function Header() {
	const [mobileNavActive, setMobileNavActive] = useState(false);
	return (
		<header className={styles.header}>
			<Center>
				<div className={styles.wrapper}>
					<div
						className={styles.logoBox}
						style={{
							opacity: mobileNavActive ? 0 : 1,
							pointerEvents: mobileNavActive ? "none" : "auto",
						}}
					>
						<Link href="/">Hafiz Academy</Link>
					</div>
					<button
						aria-label={mobileNavActive ? "Close menu" : "Open menu"}
						className={
							mobileNavActive
								? `${styles.hamburger} ${styles.open}`
								: styles.hamburger
						}
						onClick={() => setMobileNavActive((prev) => !prev)}
					>
						<span />
						<span />
						<span />
					</button>
					<nav
						className={
							mobileNavActive
								? `${styles.nav} ${styles.active}`
								: styles.nav
						}
					>
						{navItems.map(({ href, label }) => (
							<Link
								key={href}
								href={href}
								className={styles.navLink}
								onClick={() => setMobileNavActive(false)}
							>
								{label}
							</Link>
						))}
					</nav>
				</div>
			</Center>
		</header>
	);
}
