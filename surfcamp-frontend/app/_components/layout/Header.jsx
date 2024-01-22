"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const path = usePathname();
  const navItems = [
    {
      slug: "/",
      display: "the camp.",
    },
    {
      slug: "/experience",
      display: "the experience.",
    },
    {
      slug: "/blog",
      display: "the blog.",
    },
  ];

  return (
    <header
      className={`header ${path === "/experience" ? "header--light" : ""}`}
    >
      <Image
        className="header__logo"
        src="/assets/logo.svg"
        alt=""
        width={50}
        height={80}
      />
      <ul className="header__nav">
        {navItems.map((el) => {
          return (
            <li key={el.slug}>
              <Link href={el.slug}>
                <h5>{el.display}</h5>
              </Link>
            </li>
          );
        })}
      </ul>
      <Link href="/events">
        <button className="btn btn--black btn--small">BOOK NOW</button>
      </Link>
    </header>
  );
}

export default Header;
