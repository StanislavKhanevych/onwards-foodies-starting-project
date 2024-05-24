import Link from "next/link";
import Image from "next/image";
import MainHeaderBackground from "../mainHeaderBackground/mainHeaderBackground";
import logoImg from "@/assets/logo.png";
import classes from "./mainHeader.module.css";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" />
          Next Level Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Brows meals </Link>
            </li>
            <li>
              <Link href="/commutity">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
