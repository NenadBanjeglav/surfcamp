import ArticleComponent from "@/app/_components/Blog/ArticleComponent";
import ArticleIntro from "@/app/_components/Blog/ArticleIntro";
import ArticleOverview from "@/app/_components/Blog/ArticleOverview";
import { fetchBlogArticles, fetchDataFromStrapi } from "@/utils/strapi.utils";

export default async function Page({ params }) {
  const { article: slug } = params;

  const articles = await fetchBlogArticles();
  const article = articles.find((el) => el.slug === slug);
  return (
    <main>
      <ArticleIntro article={article} />
      <section className="article-section">
        <ArticleOverview article={article} />
        {article.articleContent.map((el) => (
          <ArticleComponent key={el.id} component={el} />
        ))}
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  const articles = await fetchDataFromStrapi("blog-articles");
  return articles.map((el) => ({
    article: el.attributes.slug,
  }));
}
