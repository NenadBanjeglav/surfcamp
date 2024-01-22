"use client";

import { useState } from "react";
import FeaturedArticle from "./FeaturedArticle";

function FeaturedItems({ headline, items }) {
  const [itemNumber, setItemNumber] = useState(3);

  const onShowMore = () => {
    if (itemNumber + 3 > items.lenght) {
      return setItemNumber(items.lenght);
    } else {
      return setItemNumber(itemNumber + 3);
    }
  };
  return (
    <section className="featured-items">
      <h3 className="featured-items__headline">
        {headline || "Our featured articles"}
      </h3>
      <div className="featured-items__container">
        {items.slice(0, itemNumber).map((el) => {
          return <FeaturedArticle key={el.slug} article={el} />;
        })}
      </div>
      {itemNumber < items.length && (
        <button onClick={onShowMore} className="btn btn--medium btn--turquoise">
          See more
        </button>
      )}
    </section>
  );
}

export default FeaturedItems;
