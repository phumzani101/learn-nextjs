import Link from "next/link";
import React from "react";
import logoImg from "@/assets/logo.png";
import Image from "next/image";

const MainHeader = () => {
  return (
    <header>
      <Link href="/">
        <Image src={logoImg} alt="logo" /> Meals
      </Link>

      <nav>
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
