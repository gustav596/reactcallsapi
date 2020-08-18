import React, { useState, useEffect } from "react";
import * as actions from "../actions/Customer"
import * as actionsCountry from "../actions/Country"
import { Grid, TextField, withStyles, InputLabel, Select, MenuItem, Button } from "@material-ui/core";
import { connect } from 'react-redux'

const styles = theme =>({
    root: {
        minWidth: 220,
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

const CreateCustomer = ({classes, ...props}) => {
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    useEffect(()=>{
        setLabelWidth(inputLabel.current.offsetWidth);
        props.fetchAllCountries()
    },[])
    const handleSubmit = e => {
        e.preventDefault()
        var Customer = {
            Name: document.getElementsByName("Name")[0].value,
            Country : { 
                CountryId : parseInt(document.getElementsByName("CountryName")[0].value), 
                CountryName : document.getElementById("mui-component-select-CountryName").outerText
            }
        };  
        props.createCustomer(Customer);
    }
    return(
        <form autoComplete="off" className={classes.root} onSubmit={handleSubmit}> 
            <Grid container>
                <Grid>
                    <TextField
                        name="Name"
                        variant="outlined"
                        label="För och efternamn"
                    />
                    <InputLabel className={classes.smMargin} ref={inputLabel}>Vänligen välj ett land</InputLabel>
                    <Select className={classes.dd}
                            name="CountryName"
                            label="Välj ett land"
                            labelWidth={labelWidth}
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
    countryList:state.country.list
})
const mapActionToProps ={
    fetchAllCountries: actionsCountry.fetchAllCountries,
    createCustomer: actions.create
}
export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(CreateCustomer));