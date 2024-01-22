import HeroSection from "@/app/_components/HeroSection";
import axios from "axios";
import Link from "next/link";

export const BASE_URL = process.env.STRAPI_URL || "http://127.0.0.1:1337";

export async function fetchDataFromStrapi(route) {
  const url = `${BASE_URL}/api/${route}`;
  try {
    const response = await axios.get(url);
    return response.data.data;
  } catch (err) {
    console.log(err);
    throw new Error(`Could not fetch data from ${url}`);
  }
}

export function createInfoBlockButton(buttonData) {
  if (!buttonData) {
    return null;
  }

  return (
    <Link
      className={`btn btn--medium btn--${buttonData.color}`}
      href={`${buttonData.slug}`}
    >
      {buttonData.text}
    </Link>
  );
}

export async function fetchBlogArticles() {
  const blogData = await fetchDataFromStrapi(`blog-articles?populate=deep`);

  const processedBlogArticles = blogData.map((el) => processBlogArticle(el));

  processedBlogArticles.sort(
    (a, z) => new Date(z.publishedAt) - new Date(a.publishedAt)
  );

  return processedBlogArticles;
}

function processBlogArticle(article) {
  return {
    ...article.attributes,
    id: article.id,
    featuredImage: BASE_URL + article.attributes?.image?.data?.attributes?.url,
  };
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  return date.toLocaleDateString("en-US", options);
}

export function extractImageUrl(imageData) {
  return BASE_URL + imageData.data?.attributes?.url;
}
