import Link from "next/link";
import React from "react";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import styles from "./header.module.css";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image src={logoImg} alt="logo" /> Meals
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/meals">Meals</Link>
          </li>
          <li>
            <Link href="/meals/share">Share</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
