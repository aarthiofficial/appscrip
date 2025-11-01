import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo Section */}
        <Link href="/" className={styles.logoArea}>
          <Image
            src="/images/logo.png"
            alt="Brand Logo"
            width={140}
            height={40}
            priority
          />
        </Link>

        {/* Navigation Menu */}
        <nav className={styles.nav}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Search Bar */}
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search for products..."
            aria-label="Search products"
          />
        </div>
      </div>
    </header>
  );
}
