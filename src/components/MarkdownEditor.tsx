interface MarkdownEditorProps {
  markdown: string;
  onChange: (value: string) => void;
  lang: "uk" | "en";
}

const placeholders = {
  uk: "Почніть писати Markdown тут...",
  en: "Start writing Markdown here...",
};

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({
  markdown,
  onChange,
  lang,
}) => {
  return (
    <div className='h-full w-full'>
      <textarea
        value={markdown}
        onChange={(e) => onChange(e.target.value)}
        className='
          w-full h-full
          bg-zinc-900 text-white
          font-mono text-sm
          p-4 rounded-md
          resize-none outline-none
          placeholder-gray-500
          focus:ring-2 focus:ring-blue-500
          selection:bg-blue-600 selection:text-white
          scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent
        '
        spellCheck={false}
        placeholder={placeholders[lang]}
      />
    </div>
  );
};

export default MarkdownEditor;
