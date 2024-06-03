import 'prismjs/themes/prism.css'; // Import Prism.css for styling

import * as React from 'react';

import {
  DrawerHeader,
  Previewer,
  mockMarkdown,
  previewStyle
} from './Styles';

import Prism from 'prismjs';
import TextField from '@mui/material/TextField';
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import { useEffect } from 'react';

// Configure marked to enable line breaks
marked.setOptions({
  breaks: true,
});

export default function Results(props) {
  const previewRef = React.useRef();

  const getMarkdownText = () => {
    const rawMarkup = marked.parse(props.content);
    return { __html: rawMarkup };
  }

  useEffect(() => {
    if (previewRef.current) {
      previewRef.current.querySelectorAll('pre code').forEach((codeBlock) => {
        codeBlock.classList.add(`language-javascript`);
        // Highlight the code block using Prism.js
        Prism.highlightElement(codeBlock);
      });
    }
  }, [props.content]);

  return (
    <Previewer open={props.open}>
      <DrawerHeader />
      <div id="preview"
        className="preview" 
        style={previewStyle}
        ref={previewRef}
        dangerouslySetInnerHTML={getMarkdownText()}
      />
      
    </Previewer>
  );
}