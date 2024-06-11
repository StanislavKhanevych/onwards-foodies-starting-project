"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./navLink.module.css";
export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <>
      <Link
        href={href}
        className={pathname.startsWith(href) ? classes.active : undefined}
      >
        {children}
      </Link>
    </>
  );
}
