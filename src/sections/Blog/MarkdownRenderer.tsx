import React from 'react';
import { marked } from 'marked';

const MarkdownRenderer = ({ markdown }: { markdown: string }) => {
  const createMarkup: any = () => {
    const html = marked(markdown);
    return { __html: html };
  };

  return (
    <div dangerouslySetInnerHTML={createMarkup()} />
  );
};

export default MarkdownRenderer;
