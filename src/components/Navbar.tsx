import Link from "next/link";

const Navbar = () => (
  <nav style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    background: "#1a202c",
    color: "#fff"
  }}>
    <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
      Hafiz Academy
    </div>
    <div style={{ display: "flex", gap: "1.5rem" }}>
      <Link href="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
      <Link href="/courses" style={{ color: "#fff", textDecoration: "none" }}>Courses</Link>
      <Link href="/blog" style={{ color: "#fff", textDecoration: "none" }}>Blog</Link>
      <Link href="/about" style={{ color: "#fff", textDecoration: "none" }}>About</Link>
      <Link href="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</Link>
    </div>
  </nav>
);

export default Navbar;
