import React from 'react'

import {makeStyles} from '@material-ui/core/styles';
import './card.scss'

import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    cardFirst: {
        width: '35%',
        padding: '20px 15px',
        backgroundColor: '#9c27b0',
        [theme.breakpoints.down(769)]: {
            width: '100%',
            marginBottom: '20px'
        }
    },
    cardSecond: {
        width: '60%',
        padding: '20px 15px',
        backgroundColor: '#2196f3',
        [theme.breakpoints.down(769)]: {
            width: '100%'
        }
    },
}));

function createData(currency, course, date) {
    return {currency, course, date};
}

const rows = [
    createData('RUB', 100, '15 ноября 2019'),
    createData('USD', 100, '15 ноября 2019'),
    createData('EUR', 100, '15 ноября 2019'),
];

const courseNum = [{num: 101, id: 1}, {num: 101, id: 2}, {num: 101, id: 3}];

export default () => {
    const classes = useStyles();
    return (
        <div className='card'>
            <Paper className={classes.cardFirst}>
               <h2 className='card__title'>Счет в валюте</h2>
                {courseNum.map(item => (
                    <p className='card__item' key={item.id}>{item.num}</p>
                ))}
            </Paper>
            <Paper className={classes.cardSecond}>
                <h2 className='card__title'>
                    Курс валют
                </h2>
                <table>
                    <thead>
                        <tr>
                            <th>Валюта</th>
                            <th>Курс</th>
                            <th>Дата</th>
                        </tr>
                    </thead>
                    <tbody>
                    {rows.map(row => (
                        <tr key={row.currency}>
                            <td align="left" className={classes.text}>{row.currency}</td>
                            <td align="left" className={classes.text}>{row.course}</td>
                            <td align="left" className={classes.text}>{row.date}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </Paper>
        </div>

    )
}