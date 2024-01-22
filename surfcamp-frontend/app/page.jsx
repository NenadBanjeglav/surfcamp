/* eslint-disable react/no-unescaped-entities */

import HeroSection from "./_components/HeroSection";
import {
  BASE_URL,
  createInfoBlockButton,
  fetchDataFromStrapi,
} from "@/utils/strapi.utils";
import InfoBlock from "./_components/InfoBlock";

export default async function Home() {
  const data = await fetchDataFromStrapi("infoblocks-landing?populate=deep");
  const infoBlockRaw = data.attributes.info_blocks.data;

  const infoBlockData = infoBlockRaw.map((el) => ({
    ...el.attributes,
    imgSrc: BASE_URL + el.attributes?.image?.data?.attributes?.url,
    id: el.id,
    button: createInfoBlockButton(el.attributes.button),
  }));

  const heroHeadline = (
    <>
      <h1>
        barrel.
        <br />
        your.
        <br />
        happiness.
      </h1>
    </>
  );

  return (
    <main>
      <HeroSection headline={heroHeadline} />
      {infoBlockData.map((el) => (
        <InfoBlock key={el.id} data={el} />
      ))}
    </main>
  );
}

export const revalidate = 300;
