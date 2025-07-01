import DOMPurify from "dompurify";

interface PreviewProps {
  markdownHtml: string;
}

const Preview: React.FC<PreviewProps> = ({ markdownHtml }) => {
  const cleanHtml = DOMPurify.sanitize(markdownHtml);

  return (
    <div
      className='prose dark:prose-invert max-w-none p-4 overflow-auto h-full'
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
    />
  );
};

export default Preview;
