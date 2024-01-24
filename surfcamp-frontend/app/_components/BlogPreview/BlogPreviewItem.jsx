import { formatDate } from "@/utils/strapi.utils";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
function BlogPreviewItem({ article }) {
  const { headline: title, featuredImage, publishedAt, slug } = article;
  return (
    <Link href={`/blog/${slug}`} className="blog-preview__item">
      <div className="blog-preview__image">
        <img src={featuredImage} alt="" />
      </div>
      <h5 className="blog-preview__title">{title}</h5>
      <p className="copy-small">{formatDate(publishedAt)}</p>
    </Link>
  );
}

export default BlogPreviewItem;
