import Link from "next/link";

function ArticleOverview({ article }) {
  const headlines = article.articleContent.filter(
    (el) => el.__component === "blog-article.headline"
  );

  return (
    <div className="article-overview">
      <div className="article-overview__info">
        <h3 className="article-overview__headline">In this blog</h3>
        <h5 className="article-overview__excerpt">{article.excerpt}</h5>
      </div>
      <ul className="article-overview__contents">
        {headlines.map((el, i) => (
          <li key={el.id}>
            <Link href={`#${el.slug}`}>
              {i + 1}. {el.headline}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleOverview;
