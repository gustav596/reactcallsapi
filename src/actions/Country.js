import api from "./api"

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
function fetchTodosRequest() {
    return {
        type:'FETCH_ALL_COUNTRIES',
    }
  }
  function fetchTodosSuccess(body) {
    return {
      type: 'FETCH_ALL_COUNTRIES_SUCCESS',
      body
    }
  }
  
  function fetchTodosFailure(ex) {
    return {
      type: 'FETCH_ALL_COUNTRIES_FAILURE',
      ex
    }
  }
export function fetchAllCountriesTest() {
    return dispatch => {
      dispatch(fetchTodosRequest())
      return fetch('http://localhost:60000/api/countries', {
        headers: new Headers({
            'access-control-allow-origin': '*',
            'access-control-allow-credentials': 'true'
        })}
      ).then(res => res.json())
    }
  }