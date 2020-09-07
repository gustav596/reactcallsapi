import React, { useState, useEffect } from "react";
import useForm from "./useForm";
import * as actions from "../actions/Customer"
import * as actionsCountry from "../actions/Country"
import { Grid, TextField, withStyles, InputLabel, Select, MenuItem, Button } from "@material-ui/core";
import { connect } from 'react-redux'

const styles = theme =>({
    root: {
        textAlign: 'center',
        "& .MuiTableCell-head":{
            fontSize: "1.25rem"
        }
    },
    smMargin: {
        margin: theme.spacing(3)
    },
    dd:{
        minWidth: 220
    }
})
const initialFieldValues = {
    Name: '',
    CountryId: ''
}
const FormCustomer = ({classes, ...props}) => {
    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialFieldValues, props.setCurrentId)
    if (props.currentId != 0){ 
        if(typeof values.CountryId === 'undefined')
            values.CountryId = values.country.countryId;
        if (typeof values.Name === 'undefined') 
            values.Name = values.name;
    }
    const inputLabel = React.useRef(null);
    const inputRef = React.useRef();
    const [labelWidth] = React.useState(0);
    const handleSubmit = e => {
        e.preventDefault()
        let Customer = {
            Name: values.Name,
            Country : { 
                CountryId : values.CountryId, 
                CountryName : document.getElementById("mui-component-select-CountryId").outerText
            }
        };
        if (props.currentId == 0)
            props.createCustomer(Customer);
        else
            props.updateCustomer(props.currentId, Customer)
    }
    useEffect(() => {
        props.fetchAllCountries()
        if (props.currentId != 0) {
            setTimeout(() => {
                inputRef.current.focus();
            }, 100);
            setValues({
                ...props.customerList.find(x => x.id == props.currentId)
            })
        }
    }, [props.currentId])
    return(
        <form autoComplete="off" className={classes.root} onSubmit={handleSubmit}> 
            <Grid container>
                <Grid>
                    <TextField
                        name="Name"
                        value={values.Name}
                        variant="outlined"
                        label="För och efternamn"
                        onChange={handleInputChange}
                        inputRef={inputRef} 
                    />
                    <InputLabel className={classes.smMargin} ref={inputLabel}>Vänligen välj ett land</InputLabel>
                    <Select className={classes.dd}
                            name="CountryId"
                            value={values.CountryId}
                            label="Välj ett land"
                            labelWidth={labelWidth}
                            onChange={handleInputChange}
                    >
                    {                   
                        props.countryList.map((record, index)=>{
                            return (
                                <MenuItem 
                                    value={record.countryId}>{record.countryName}
                                </MenuItem>
                            )
                        })
                    }
                    </Select>
                     <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.smMargin}
                        >
                            Skapa kund
                    </Button>
                </Grid>
                       
            </Grid>
        </form>
        )
}
const mapStateToProps = state=>({
    customerList:state.customer.list,
    countryList:state.country.list
})
const mapActionToProps ={
    fetchAllCountries: actionsCountry.fetchAllCountries,
    createCustomer: actions.create,
    updateCustomer: actions.update
}
export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(FormCustomer));