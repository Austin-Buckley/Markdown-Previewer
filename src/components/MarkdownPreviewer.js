import * as React from 'react';

import Box from '@mui/material/Box';
import Editor from './Editor';
import Previewer from './Previewer';
import Results from './Results';
import { defaultMarkdown } from './Styles.js';

export default function MarkdownPreviewer() {
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = React.useState(defaultMarkdown);
  
  const handleDrawerOperation = () => setOpen(!open);
  const handleContentChange = newContent =>  setContent(newContent);

  return (
    <Box className="Wrapper">
      <Previewer 
        open={open} className="Previewer" 
        handleDrawerOperation={handleDrawerOperation} 
      />
      <Editor 
        open={open} className="Editor" 
        content={content} 
        onContentChange={handleContentChange}
        handleDrawerOperation={handleDrawerOperation} 
      />
      <Results open={open} content={content} />
    </Box>
  );
}
