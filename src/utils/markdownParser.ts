import type { ThemeColors } from "../types";

export const parseMarkdown = (text: string, theme: ThemeColors): string => {
  const replacements = [
    { 
      pattern: /```(\w+)?\n([\s\S]*?)```/g, 
      replacement: `<pre class="${theme.codeBlock} p-4 rounded-lg overflow-x-auto"><code>$2</code></pre>` 
    },
    { 
      pattern: /`([^`]+)`/g, 
      replacement: `<code class="${theme.inlineCode} px-2 py-1 rounded text-sm">$1</code>` 
    },
    { 
      pattern: /^### (.*$)/gim, 
      replacement: `<h3 class="text-xl font-bold mt-4 mb-2 ${theme.text}">$1</h3>` 
    },
    { 
      pattern: /^## (.*$)/gim, 
      replacement: `<h2 class="text-2xl font-bold mt-6 mb-3 ${theme.text}">$1</h2>` 
    },
    { 
      pattern: /^# (.*$)/gim, 
      replacement: `<h1 class="text-3xl font-bold mt-8 mb-4 ${theme.text}">$1</h1>` 
    },
    { 
      pattern: /\*\*(.+?)\*\*/g, 
      replacement: '<strong class="font-bold">$1</strong>' 
    },
    { 
      pattern: /\*(.+?)\*/g, 
      replacement: '<em class="italic">$1</em>' 
    },
    { 
      pattern: /\[([^\]]+)\]\(([^)]+)\)/g, 
      replacement: `<a href="$2" class="${theme.link} hover:underline" target="_blank" rel="noopener">$1</a>` 
    },
    { 
      pattern: /^> (.+)/gim, 
      replacement: `<blockquote class="border-l-4 ${theme.quote} pl-4 italic my-2">$1</blockquote>` 
    },
    { 
      pattern: /^\- (.+)/gim, 
      replacement: '<li class="ml-4">$1</li>' 
    },
  ];

  let html = text;
  replacements.forEach(({ pattern, replacement }) => {
    html = html.replace(pattern, replacement);
  });

  html = html.replace(/(<li class="ml-4">.*<\/li>)/s, '<ul class="list-disc ml-6 my-2">$1</ul>');
  html = html.replace(/\n\n/g, '</p><p class="mb-4">');
  html = `<p class="mb-4">${html}</p>`;

  return html;
};