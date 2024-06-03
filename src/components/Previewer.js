import {
  AppBar,
  appBarBGStyle
} from './Styles'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export default function Previewer(props) {
  return (
    <>
      <CssBaseline />
      <Box sx={appBarBGStyle} />
      <AppBar sx={{backgroundColor: 'darkcyan'}} open={props.open}
        className="app-bar" position="fixed"
        > 
        <Toolbar className="PreviewHeader">
          <Button 
            sx={{ transition: 'color 0.3s ease-in-out, transform 0.3s ease-in-out',
              ...(props.open && { color: 'darkcyan' }) 
            }}
            onClick={props.handleDrawerOperation} color="inherit" size="small"
            className="editor-button" aria-label="open drawer" edge="start" 
            >
            <FontAwesomeIcon className="editor-icon" icon={faCode} size="2x" display="none"/> 
            {(props.open ? `` : 'Open Editor')}
          </Button>
          <Typography className="PreviewTitle" variant="h5" noWrap component="div">
            Previewer
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}