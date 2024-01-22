import Image from "next/image";
import Link from "next/link";

function HeroSection({ imgSrc, theme = "turquoise", headline }) {
  return (
    <section className="hero">
      <div className="hero__background">
        <Image
          className="hero__image"
          src={imgSrc || "/assets/hero-home.png"}
          alt=""
          fill={true}
        />
      </div>
      <div className={`hero__headline hero__headline--${theme}`}>
        {headline}
      </div>
      <button className={`btn btn--medium btn--${theme}`}>
        <Link href="/events">BOOK NOW</Link>
      </button>
      <Image
        src="/assets/logo.svg"
        className={`hero__logo hero__logo--${theme}`}
        width={120}
        height={185}
        alt=""
      />
    </section>
  );
}

export default HeroSection;
