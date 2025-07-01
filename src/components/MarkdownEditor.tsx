interface MarkdownEditorProps {
  markdown: string;
  onChange: (value: string) => void;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({
  markdown,
  onChange,
}) => {
  return (
    <textarea
      value={markdown}
      onChange={(e) => onChange(e.target.value)}
      className='w-full h-full p-4 bg-gray-100 dark:bg-gray-800 text-black dark:text-white resize-none font-mono outline-none'
    />
  );
};

export default MarkdownEditor;
