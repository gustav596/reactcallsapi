import api from "./api"

export const ACTION_TYPES = {
    CREATE: 'CREATE',
    FETCH_ALL: 'FETCH_ALL'
}
export const create = (data) => dispatch => {
    api.Customer().create(data)
        .then(res => {
            window.location.reload(true);

        })
        .catch(err => console.log(err))
}

export const fetchAll = () => dispatch =>{
    //get api req
    api.Customer().fetchAll()
    .then(
        response =>{
            console.log(response);
            dispatch({
                type:ACTION_TYPES.FETCH_ALL,
                payload: response.data
            })
        }
    )
    .catch(err => console.log(err))
    
}