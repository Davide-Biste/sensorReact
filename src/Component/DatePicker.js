import React from 'react';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import {dataActions, dataSelectors} from "../state/data";
import {store} from "../state";
import {useDispatch, useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200
    },
}));

const DatePicker = ({label, dateValue, selector}) => {
    const dispatch = useDispatch();

    const classes = useStyles();
    return (
            <TextField
                id="datetime-local"
                label={label}
                type="datetime-local"
                defaultValue={dateValue}
                className={classes.textField}
                onChange={async (event)=> {
                    if(selector === "start"){
                       await dispatch(dataActions.setDateStart(event.target.value))
                    } else if(selector === "end"){
                        await dispatch(dataActions.setDateEnd(event.target.value))
                    }

                }}
                InputLabelProps={{
                    shrink: true,
                }}
            />

    );
};

export default DatePicker;
