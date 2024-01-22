/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import HighlightArticle from "../_components/Blog/HighlightArticle";
import SubscripeToNewsletter from "../_components/Blog/SubscripeToNewsletter";
import FeaturedItems from "../_components/FeaturedItems/FeaturedItems";
import { fetchBlogArticles, fetchDataFromStrapi } from "@/utils/strapi.utils";

export default async function Page() {
  const data = await fetchBlogArticles();
  const highlightArticleData = data.find((el) => el.isHighlightArticle);
  const featuredArticlesData = data.filter((el) => !el.isHighlightArticle);
  console.log(data);
  return (
    <main className="blog-page">
      <HighlightArticle data={highlightArticleData} />
      <SubscripeToNewsletter />
      <FeaturedItems items={featuredArticlesData} />
    </main>
  );
}

export const revalidate = 300;
