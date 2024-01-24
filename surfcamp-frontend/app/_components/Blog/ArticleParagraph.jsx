import ReactMarkdown from "react-markdown";

function ArticleParagraph({ paragraph }) {
  return (
    <ReactMarkdown className="copy article-paragraph">
      {paragraph.paragraph}
    </ReactMarkdown>
  );
}

export default ArticleParagraph;
