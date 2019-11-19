import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: 120,
        margin: '8px 0'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));



export default () => {
    const classes = useStyles();
    const [category, setCategory] = React.useState('');
    const handleChange = event => {
        setCategory(event.target.value);
    };

    return(
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-readonly-label">Name</InputLabel>
            <Select
                labelId="demo-simple-select-readonly-label"
                id="demo-simple-select-readonly"
                value={category}
                onChange={handleChange}
                inputProps={{ readOnly: true }}
            >
                <MenuItem value={10}>Ten</MenuItem>
            </Select>
        </FormControl>
    )
}