import { useState, useEffect } from "react";
import MarkdownEditor from "./components/MarkdownEditor";
import Preview from "./components/Preview";
import { marked } from "marked";
import hljs from "highlight.js";

import "./styles/github-markdown.css";
import "highlight.js/styles/github.css";

const DEFAULT_MARKDOWN = `# Заголовки

## H1
### H2
... (твій шаблон)
`;

const renderer = new marked.Renderer();
renderer.code = ({ text, lang }) => {
  const language = lang && hljs.getLanguage(lang) ? lang : "plaintext";
  const highlighted = hljs.highlight(text, { language }).value;
  return `<pre><code class="hljs language-${language}">${highlighted}</code></pre>`;
};
marked.setOptions({ renderer });

function App() {
  const [markdown, setMarkdown] = useState(
    () => localStorage.getItem("markdown") ?? DEFAULT_MARKDOWN,
  );
  const [html, setHtml] = useState("");

  useEffect(() => {
    //@ts-ignore
    setHtml(marked.parse(markdown));
    localStorage.setItem("markdown", markdown);
  }, [markdown]);

  const handleClear = () => setMarkdown("");

  return (
    <div className='h-screen flex flex-col bg-zinc-100 dark:bg-zinc-900 text-black dark:text-white'>
      {/* Toolbar */}
      <header className='flex items-center justify-between px-6 py-3 border-b border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-zinc-800/70 backdrop-blur-md shadow-sm'>
        <h1 className='text-lg font-semibold'>📝 Markdown Editor</h1>
        <div className='space-x-4'>
          <button
            onClick={handleClear}
            className='px-3 py-1 rounded bg-red-500 hover:bg-red-600 text-white text-sm shadow'>
            Очистити
          </button>
          {/* Можеш додати: Завантажити, Перемикач теми */}
        </div>
      </header>

      {/* Editor & Preview */}
      <div className='flex flex-1 overflow-hidden'>
        <div className='w-1/2 p-4 border-r border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-900'>
          <MarkdownEditor markdown={markdown} onChange={setMarkdown} />
        </div>
        <div className='w-1/2 p-4 bg-gray-50 dark:bg-zinc-950 overflow-auto'>
          <Preview markdownHtml={html} />
        </div>
      </div>
    </div>
  );
}

export default App;
