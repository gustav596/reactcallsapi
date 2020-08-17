import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/Customer"
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, withStyles } from "@material-ui/core"
import CustomerForm from "./CustomerForm"

const styles = theme =>({
    root: {
        "& .MuiTableCell-head":{
            fontSize: "1.25rem"
        }
    },
    paper :{
        margin: theme.spacing(4),
        padding: theme.spacing(2)
    }
})

const Customers = ({classes, ...props}) => {

    useEffect(()=>{
        props.fetchAllCustomers()
    },[])

    return (
        <Paper className={classes.paper} elevation={3}>
            <Grid container>
                <Grid Grid item xs={2}>
                    <CustomerForm />
                </Grid>
                <Grid Grid item xs={10}>
                    <TableContainer>
                        <Table>
                            <TableHead className={classes.root}>
                                <TableRow>
                                    <TableCell>
                                        Namn
                                    </TableCell>
                                    <TableCell>
                                        Land
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.customerList.map((record, index)=>{
                                    return (
                                    <TableRow key={index}>
                                        <TableCell>{record.name}</TableCell>
                                        <TableCell>{record.country.countryName}</TableCell>
                                    </TableRow>)
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>
    )
}

const mapStateToProps = state=>({
        customerList:state.customer.list
})
const mapActionToProps ={
    fetchAllCustomers: actions.fetchAll
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Customers));