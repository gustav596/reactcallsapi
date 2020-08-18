import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/Customer"
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, ButtonGroup, Button, withStyles } from "@material-ui/core"
import CreateCustomer from "./CreateCustomer"
import DeleteIcon from "@material-ui/icons/Delete";

const styles = theme =>({
    root: {
        flexGrow: 1,
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

    const onDelete = id => {
        if (window.confirm('Är du säker att du vill ta bort denna kund?'))
            props.deleteCustomer(id)
    }

    return (
        <Paper className={classes.paper} elevation={3}>
            <Grid container direction="row"
  justify="space-around"
  alignItems="center">
                <Grid Grid item xs={2}>
                    <CreateCustomer />
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
                                        <TableCell>
                                            <ButtonGroup variant="text">
                                                <Button><DeleteIcon color="secondary"
                                                    onClick={() => onDelete(record.id)} /></Button>
                                            </ButtonGroup>
                                        </TableCell>
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
    fetchAllCustomers: actions.fetchAll,
    deleteCustomer: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Customers));