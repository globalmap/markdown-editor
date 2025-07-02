import { useState, useEffect } from "react";
import MarkdownEditor from "./components/MarkdownEditor";
import Preview from "./components/Preview";
import { marked } from "marked";
import hljs from "highlight.js";

const DEFAULT_MARKDOWN = `# Привіт 👋

Це простий **Markdown** редактор з live preview.

- Пиши Markdown ліворуч
- Дивись результат праворуч
`;

function App() {
  const renderer = new marked.Renderer();

  renderer.code = ({ text, lang }) => {
    const language = lang && hljs.getLanguage(lang) ? lang : "plaintext";

    const highlighted = hljs.highlight(text, {
      language: language,
    }).value;

    return `<pre><code class="hljs language-${language}">${highlighted}</code></pre>`;
  };

  marked.setOptions({
    renderer,
  });

  const [markdown, setMarkdown] = useState<string>(() => {
    return localStorage.getItem("markdown") ?? DEFAULT_MARKDOWN;
  });

  const [html, setHtml] = useState("");

  useEffect(() => {
    const render = async () => {
      const html = await marked.parse(markdown);
      setHtml(html);
      localStorage.setItem("markdown", markdown);
    };
    render();
  }, [markdown]);

  return (
    <div className='flex h-screen'>
      <div className='w-1/2 border-r border-gray-300 dark:border-gray-700'>
        <MarkdownEditor markdown={markdown} onChange={setMarkdown} />
      </div>
      <div className='w-1/2 bg-white dark:bg-black text-black dark:text-white overflow-auto'>
        <Preview markdownHtml={html} />
      </div>
    </div>
  );
}

export default App;
