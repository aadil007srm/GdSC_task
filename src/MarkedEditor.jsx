import React, { useState } from 'react';
import {marked} from 'marked';

const MarkedEditor = () => {
  const [markdown, setMarkdown] = useState('');

  const handleMarkdownChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="markdown-container">
      <div className="toolbar">
        <button onClick={() => setMarkdown('# ' + markdown)}>Heading</button>
        <button onClick={() => setMarkdown('**' + markdown + '**')}>Bold</button>
        <button onClick={() => setMarkdown('*' + markdown + '*')}>Italic</button>
        <button onClick={() => setMarkdown('[' + markdown + '](' + markdown + ')')}>Link</button>
        <button onClick={() => setMarkdown('![alt text](' + markdown + ')')}>Image</button>
        <button onClick={() => setMarkdown('`' + markdown + '`')}>Code Block</button>
      </div>
      <div className="markdown-editor">
        <textarea
          className="markdown-input"
          value={markdown}
          onChange={handleMarkdownChange}
          placeholder="Type your Markdown text here..."
        />
        <div
          className="markdown-output"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    </div>
  );
};

export default MarkedEditor;
