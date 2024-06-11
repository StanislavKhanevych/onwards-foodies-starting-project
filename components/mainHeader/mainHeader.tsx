import Link from "next/link";
import Image from "next/image";
import MainHeaderBackground from "../mainHeaderBackground/mainHeaderBackground";
import logoImg from "@/assets/logo.png";
import classes from "./mainHeader.module.css";
import NavLink from "../navLink/navLink";

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
              <NavLink href="/meals">Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
