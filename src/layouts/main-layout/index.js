import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import clsx from 'clsx';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
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


const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false)
  const classes = useStyles();
  const handleOpen = (value) => {
    setIsOpen(value)
  }

  return (    
    <>
     <Navbar handleOpen={handleOpen} isOpen={isOpen}></Navbar>
     <Sidebar handleOpen={handleOpen} isOpen={isOpen}></Sidebar>
     <main
        className={clsx(classes.content, {
          [classes.contentShift]: isOpen,
        })}
      >          
      </main>
    </>
   
  )
}

export default MainLayout