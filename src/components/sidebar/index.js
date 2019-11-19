import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom'

//Import Icon
import TimelineIcon from '@material-ui/icons/Timeline';
import EventIcon from '@material-ui/icons/Event';
import ScoreIcon from '@material-ui/icons/Score';
import CategoryIcon from '@material-ui/icons/Category';
import CreateIcon from '@material-ui/icons/Create';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    top: '83px',
    width: drawerWidth,
    position: 'absolute'
  },
  link: {
    textDecoration: 'none',
    color: '#000000de'
  }
}));

export default function PersistentDrawerLeft({isOpen}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />    
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={isOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
          {ListCategory.map((item) => (
            <Link to={item.path} className={classes.link} key={item.title}>
              <ListItem button >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            </Link>           
          ))}
        </List>            
      </Drawer>
    </div>
  );
}


const ListCategory = [
  { title: 'Счет', path: '/', icon: <ScoreIcon/> },
  { title: 'История', path: '/history', icon: <TimelineIcon/> },
  { title: 'Планирование', path: '/planning', icon: <EventIcon/> },
  { title: 'Новая запись', path: '/record', icon: <CreateIcon/> },
  { title: 'Категории', path: '/Categories', icon: <CategoryIcon/> }
];