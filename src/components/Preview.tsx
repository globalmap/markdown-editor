// src/components/Preview.tsx
import { useEffect } from "react";
import DOMPurify from "dompurify";
import hljs from "highlight.js";
import "highlight.js/styles/github.css"; // або 'github-dark.css'
import "../styles/github-markdown.css"; // додаємо GitHub-style css

interface PreviewProps {
  markdownHtml: string;
}

const Preview: React.FC<PreviewProps> = ({ markdownHtml }) => {
  const cleanHtml = DOMPurify.sanitize(markdownHtml);

  useEffect(() => {
    document.querySelectorAll("pre code").forEach((el) => {
      hljs.highlightElement(el as HTMLElement);
    });
  }, [markdownHtml]);

  return (
    <div className='h-full w-full overflow-auto bg-[#ffffff] dark:bg-[#0d1117] p-8'>
      <article
        className='markdown-body max-w-none'
        dangerouslySetInnerHTML={{ __html: cleanHtml }}
      />
    </div>
  );
};

export default Preview;
