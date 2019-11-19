import React,{useState} from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../../components/navbar/index';
import Sidebar from '../../components/sidebar';
import Score from '../../components/score';
import Record from '../../components/record';
import {Route} from 'react-router-dom'




const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));


const MainLayout = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
  const handleOpen = () => {
    setIsOpen(!isOpen)
  };

  console.log(props);
  return (
      <>
        <Navbar open={handleOpen} />
        <Sidebar handleOpen={handleOpen} isOpen={isOpen}/>
        <main
            className={clsx (classes.content, {
              [classes.contentShift]: isOpen,
            })}
        >
          <div style={{marginLeft: '240px'}}>
            <Route exact path='/' component={Score}/>
            <Route path='/record' component={Record}/>
          </div>
        </main>
      </>
  );
};

export default MainLayout