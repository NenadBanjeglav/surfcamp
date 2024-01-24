import ArticleComponent from "@/app/_components/Blog/ArticleComponent";
import ArticleIntro from "@/app/_components/Blog/ArticleIntro";
import ArticleOverview from "@/app/_components/Blog/ArticleOverview";
import FeaturedArticle from "@/app/_components/FeaturedItems/FeaturedArticle";
import FeaturedItems from "@/app/_components/FeaturedItems/FeaturedItems";
import { fetchBlogArticles, fetchDataFromStrapi } from "@/utils/strapi.utils";

export default async function Page({ params }) {
  const { article: slug } = params;

  const articles = await fetchBlogArticles();
  const article = articles.find((el) => el.slug === slug);

  const moreArticles = articles.filter((el) => el.slug !== slug);
  return (
    <main>
      <ArticleIntro article={article} />
      <section className="article-section">
        <ArticleOverview article={article} />
        {article.articleContent.map((el) => (
          <ArticleComponent key={el.id} component={el} />
        ))}
        <FeaturedItems
          items={moreArticles}
          headline={"Explore our other articles"}
        />
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
