import Image from "next/image";
import Link from "next/link";

function Footer() {
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
    {
      slug: "/events",
      display: "the events.",
    },
  ];

  const policies = [
    {
      slug: "",
      display: "Imprint",
    },
    {
      slug: "",
      display: "Terms and Conditions",
    },
    {
      slug: "",
      display: "Data Protection",
    },
  ];

  return (
    <footer className="footer">
      <nav className="footer__nav">
        <Image
          className="footer__logo"
          src="/assets/logo.svg"
          alt=""
          width={50}
          height={80}
        />
        <ul className="footer__links">
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
      </nav>
      <div className="footer__policies">
        <ul className="footer__policies-nav">
          {policies.map((el) => {
            return (
              <li key={el.display}>
                <Link href={el.slug}>{el.display}</Link>
              </li>
            );
          })}
        </ul>
        <p className="copy">© Sam’s Surfcamp - all rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
