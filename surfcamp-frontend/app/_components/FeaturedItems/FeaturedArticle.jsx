/* eslint-disable @next/next/no-img-element */
import { formatDate } from "@/utils/strapi.utils";
import Link from "next/link";

function FeaturedArticle({ article }) {
  return (
    <Link
      className="featured-items__article"
      href={`/blog/${article.slug}`}
      key={article.slug}
    >
      <div className="featured-items__article-img">
        <img
          src={article.featuredImage}
          alt={`Go read article ${article.headline}`}
          className=""
        />
      </div>
      <div className="featured-items__article-text">
        <h5>{article.headline}</h5>
        <div className="copy-small">{formatDate(article.publishedAt)}</div>
      </div>
    </Link>
  );
}

export default FeaturedArticle;
