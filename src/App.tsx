import { useState, useEffect } from "react";
import MarkdownEditor from "./components/MarkdownEditor";
import Preview from "./components/Preview";
import { marked } from "marked";
import hljs from "highlight.js";

import "./styles/github-markdown.css";
import "highlight.js/styles/github-dark-dimmed.css";
import { translations } from "./i18n";

const renderer = new marked.Renderer();
renderer.code = ({ text, lang }) => {
  const language = lang && hljs.getLanguage(lang) ? lang : "plaintext";
  const highlighted = hljs.highlight(text, { language }).value;
  return `<pre><code class="hljs language-${language}">${highlighted}</code></pre>`;
};
marked.setOptions({ renderer });

export default function App() {
  const [html, setHtml] = useState("");
  const [lang, setLang] = useState<"uk" | "en">("uk");
  const t = translations[lang];

  const [markdown, setMarkdown] = useState(
    () => localStorage.getItem("markdown") ?? translations[defaultMarkdown],
  );

  useEffect(() => {
    setHtml(marked.parse(markdown));
    localStorage.setItem("markdown", markdown);
  }, [markdown]);

  const handleClear = () => setMarkdown("");

  return (
    <div className='h-screen flex flex-col bg-zinc-900 text-white'>
      {/* Toolbar */}
      <header className='flex items-center justify-between px-6 py-3 border-b border-gray-700 bg-zinc-800/70 backdrop-blur-md shadow-sm'>
        <h1 className='text-lg font-semibold'>📝 {t.title}</h1>
        <div className='flex items-center space-x-4'>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as "uk" | "en")}
            className='bg-zinc-800 text-white text-sm rounded px-2 py-1 border border-gray-600'>
            <option value='uk'>🇺🇦 Українська</option>
            <option value='en'>🇬🇧 English</option>
          </select>
          <button
            onClick={handleClear}
            className='px-3 py-1 rounded bg-red-500 hover:bg-red-600 text-white text-sm shadow'>
            {t.clear}
          </button>
        </div>
      </header>

      {/* Editor & Preview */}
      <div className='flex flex-1 overflow-hidden'>
        <div className='w-1/2 p-4 border-r border-gray-700 bg-zinc-900'>
          <MarkdownEditor markdown={markdown} onChange={setMarkdown} lang={lang} />
        </div>
        <div className='w-1/2 p-4 overflow-auto bg-[#0d1117]'>
          <Preview markdownHtml={html} />
        </div>
      </div>
    </div>
  );
}
