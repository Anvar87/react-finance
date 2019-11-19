import React from 'react'
import Fab from '@material-ui/core/Fab';
import RefreshIcon from '@material-ui/icons/Refresh';
import {makeStyles} from '@material-ui/core/styles';
import './title.scss'


const useStyles = makeStyles(theme => ({
    button: {
        width: '45px',
        height: '45px'
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <div className="title-block">
            <h2 className='title-block__name'>Счет</h2>
            <Fab className={classes.button}>
                <RefreshIcon/>
            </Fab>
        </div>
    )
}