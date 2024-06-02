import * as React from 'react';

import {
  AppBar,
  DrawerHeader,
  appBarStyle,
  drawerStyle,
  editorStyle,
  mockMarkdown
} from './Styles'

import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { faClose } from '@fortawesome/free-solid-svg-icons';

export default function Editor(props) {

  return (
    <Drawer sx={drawerStyle} open={props.open}
      variant="persistent" anchor="left" 
    >
      <DrawerHeader>
      <AppBar sx={appBarStyle} position="fixed">
        <Toolbar className="EditorHeader">
          <Button sx={{ transition: 'all 0.3s ease-in-out' }}
            onClick={props.handleDrawerOperation} color="inherit" 
            className="editor-button" aria-label="open drawer" edge="start" size="small"
          >
            <FontAwesomeIcon className="editor-icon"  icon={faClose} size="2x" /> Close Editor
          </Button>
          <Typography variant="h5" noWrap component="div">
            Editor
          </Typography>
          <div className="EditorSpacer"></div>
        </Toolbar>
      </AppBar>
      </DrawerHeader>
      <TextField
        className="Markdown" 
        multiline fullWidth variant="outlined" 
        sx={editorStyle} color ="warning" 
        defaultValue={mockMarkdown}
      />
    </Drawer>
  );
};