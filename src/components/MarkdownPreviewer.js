import * as React from 'react';

import Box from '@mui/material/Box';
import Editor from './Editor';
import Previewer from './Previewer';
import Results from './Results';

export default function MarkdownPreviewer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOperation = () => {
    open ? setOpen(false) : setOpen(true);
  }

  return (
    <Box className="Wrapper">
      <Previewer open={open} handleDrawerOperation={handleDrawerOperation} />
      <Editor open={open} handleDrawerOperation={handleDrawerOperation} />
      <Results open={open} />
    </Box>
  );
}
