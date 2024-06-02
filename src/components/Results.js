import * as React from 'react';

import {
  DrawerHeader,
  Previewer,
  mockMarkdown,
  previewStyle
} from './Styles';

import TextField from '@mui/material/TextField';

export default function Results({open}) {
  return (
    <Previewer className="Results" open={open}>
      <DrawerHeader />
        <TextField
          className="markdown-preview" 
          fullWidth multiline variant="outlined" 
          color="secondary" sx={previewStyle} 
          defaultValue={mockMarkdown} disabled
        />
    </Previewer>
  );
};