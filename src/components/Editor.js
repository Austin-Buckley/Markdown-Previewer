import * as React from 'react';

import {
  AppBar,
  DrawerHeader,
  appBarStyle,
  drawerStyle,
  editorStyle,
} from './Styles'

import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { faClose } from '@fortawesome/free-solid-svg-icons';

export default function Editor(props) {
  const handleTextChange = (event) => {
    props.onContentChange(event.target.value);
  }
  
  return (
    <Drawer sx={drawerStyle} open={props.open}
      variant="persistent" anchor="left" 
      className='Drawer'
    >
      <DrawerHeader>
      <AppBar sx={appBarStyle} position="absolute">
        <Toolbar className="EditorHeader">
          <Button sx={{ transition: 'color 0.3s ease-in-out, transform 0.3s ease-in-out' }}
            onClick={props.handleDrawerOperation} color="inherit" 
            className="editor-button" aria-label="open drawer" edge="start" size="small"
          >
            <FontAwesomeIcon className="editor-icon"  icon={faClose} size="2x" /> Close Editor
          </Button>
          <Typography variant="h5" noWrap component="div">
            Editor
          </Typography>
        </Toolbar>
      </AppBar>
      </DrawerHeader>
      <TextField
        className="Markdown" id="editor"
        multiline fullWidth variant="outlined"
        sx={{ ...editorStyle, overflowX: 'hidden' }} color="warning"
        value={props.content}
        onChange={handleTextChange}
        onKeyUp={handleTextChange}
        
        />
    </Drawer>
  );
};