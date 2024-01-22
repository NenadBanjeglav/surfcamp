/* eslint-disable @next/next/no-img-element */
import ReactMarkdown from "react-markdown";

function InfoBlock({ data }) {
  const { headline, text, showImageRight, imgSrc, button } = data;

  console.log(data.button);
  return (
    <section className={`info ${showImageRight ? "info--reversed" : ""}`}>
      <img
        className="info__image"
        src={imgSrc || "/assets/info-blocks/experience.png"}
        alt=""
      />
      <div className="info__text">
        <h2 className="info__headline">{headline}</h2>
        <ReactMarkdown className="copy">{text}</ReactMarkdown>
        {button}
      </div>
    </section>
  );
}

export default InfoBlock;
