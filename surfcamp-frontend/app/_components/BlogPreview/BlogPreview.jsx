import { fetchBlogArticles } from "@/utils/strapi.utils";
import BlogPreviewItem from "./BlogPreviewItem";

async function BlogPreview() {
  const data = await fetchBlogArticles();
  const highlightArticle = data.find((el) => el.isHighlightArticle);
  const recentlyPublishedArticles = data
    .filter((el) => !el.isHighlightArticle)
    .slice(0, 3);

  const articlesToDisplay = [highlightArticle, ...recentlyPublishedArticles];
  return (
    <div className="blog-preview">
      <h2 className="blog-preview__headline">the blog.</h2>
      <div className="blog-preview__container">
        {articlesToDisplay.map((el) => (
          <BlogPreviewItem key={el.id} article={el} />
        ))}
      </div>
    </div>
  );
}

export default BlogPreview;
