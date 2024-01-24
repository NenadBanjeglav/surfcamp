/* eslint-disable @next/next/no-img-element */
import { extractImageUrl } from "@/utils/strapi.utils";

function LandscapreImage({ imageData }) {
  const { imageCaption, image } = imageData;
  return (
    <div className="article-image">
      <img src={extractImageUrl(image)} alt="" />
      {imageCaption && (
        <p className="copy article-image copy-small">{imageCaption}</p>
      )}
    </div>
  );
}

export default LandscapreImage;
