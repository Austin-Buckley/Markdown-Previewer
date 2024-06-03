import * as React from 'react';

import {
  AppBar,
  DrawerHeader,
  appBarStyle,
  drawerStyle,
  editorStyle,
} from './Styles'

import Button from '@mui/material/Button';
import { Divider } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

export default function Editor(props) {
  const handleTextChange = (event) => {
    props.onContentChange(event.target.value);
  }
  const getMarkdownText = () => {
    const rawMarkup = marked.parse(props.content);
    return { __html: rawMarkup };
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
      {/* <Divider flexItem variant="middle" sx={{backgroundColor: "slategrey", width: "50%",}} >Markdown</Divider> */}
      <TextField
        className="Markdown" id="editor"
        multiline fullWidth variant="outlined"
        sx={{ ...editorStyle, overflowX: 'hidden' }} color="warning"
        value={props.content}
        onChange={handleTextChange}
        onKeyUp={handleTextChange}
        
        />
      {/* Causes a resizing error */}
      {/* <Divider sx={{backgroundColor: "slategrey"}} flexItem variant="middle" >HTML</Divider> */}
      {/* <TextField
        className="Markdown"
        multiline
        fullWidth
        variant="outlined"
        sx={editorStyle}
        color="warning"
        value={marked.parse(props.content)}
        onChange={handleTextChange}
        onKeyUp={handleTextChange}
      /> */}
    </Drawer>
  );
};