import api from "./api"
import { ACTION_TYPES } from "../actions/Customer";

export const fetchAllCountries = () => dispatch =>{
    //get api req
    api.Country().fetchAll()
    .then(
        response =>{
            console.log(response);
            dispatch({
                type:'FETCH_ALL_COUNTRIES',
                payload: response.data
            })
        }
    )
    .catch(err => console.log(err))
    
}