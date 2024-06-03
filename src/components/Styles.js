import { Margin } from '@mui/icons-material';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';

const drawerWidth = '50vw';
const decorativeBorder = '5px solid slategrey';
const textBackgroundColor = 'lightsteelblue';
const textContainerPadding = '1rem';

export const mockMarkdown = `Welcome to my React Markdown Previewer!
This is a sub-heading...
And here's some other cool stuff:
Heres some co
Block Quo too.
Use just 1s if you want!
And last but not least, let's not forget embedded images:Welcome to my React Markdown Previewer!
This is a sub-h
You can also make text bold... whoa!
Or italic.
Or... wait for it... both!
And feel free to go crazy crossing stuff out.
There's also links, and
Block Quotes!
And if you want to get really crazy, even tables:
Wild Header	Crazy Header	Another Header?
Your content can	be here, and it	can be here....
And here.	Okay.	I think we get it.
And of course there are lists.
Some are bulleted.
With different indentation levels.
That look like this.
And there are numbered lists too.
Use just 1s if you want!
And last but not least, let's not forget embedded images:`;


export const drawerStyle = {
  width: drawerWidth,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
}

export const previewStyle = {
  borderLeft: decorativeBorder,
  backgroundColor: textBackgroundColor,
  height: "100vh",
  padding: textContainerPadding,
  overflowY: "auto",
}

export const editorStyle = {
  borderRight: decorativeBorder,
  backgroundColor: textBackgroundColor,
  height: "100vh",
  padding: textContainerPadding,
  overflowY: "auto",
  wordWrap: "break-word",
}

export const appBarStyle = {
  backgroundColor: 'darkcyan', 
  height: '4rem',
  width: "100%", 
  left: 0, 
}

export const appBarBGStyle = {
  backgroundColor: "darkorange", 
  position: "fixed",
  width: "100vw", 
  height: "4rem", 
}

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: 300,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth})`,
    marginLeft: `${drawerWidth}`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: 300,
    }),
  }),
}));

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 0),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export const Previewer = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: 500,
    }),
    marginLeft: `-${drawerWidth}`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: 300,
      }),
      marginLeft: 0,
      display: 'grid',
    }),
  }),
);
