import * as React from 'react';

import Box from '@mui/material/Box';
import Editor from './Editor';
import Previewer from './Previewer';
import Results from './Results';

const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function helloWorld() {
  console.log('Hello, World!');
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

| Wild Header | Crazy Header | Another Header? |
|------------ | ------------- | ------------- |
| Your content can | be here, and it | can be here.... |
| And here. | Okay. | I think we get it. |

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://shorturl.at/6GVVh)
`;
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
