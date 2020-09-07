import api from "./api"

export const ACTION_TYPES = {
    DELETE: 'DELETE',
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    FETCH_ALL: 'FETCH_ALL'
}
export const create = (data) => dispatch => {
    api.Customer().create(data)
        .then(res => {
            window.location.reload(false);
        })
        .catch(err => console.log(err))
}
export const update = (id, data) => dispatch => {
    api.Customer().update(id, data)
        .then(res => {
            window.location.reload(false);
        })
        .catch(err => console.log(err))
}

export const fetchAll = () => dispatch =>{
    api.Customer().fetchAll()
    .then(
        response =>{
            dispatch({
                type:ACTION_TYPES.FETCH_ALL,
                payload: response.data
            })
        }
    )
    .catch(err => console.log(err))
    
}
export const Delete = (id) => dispatch => {
    api.Customer().delete(id)
        .then(res => {
            window.location.reload(false);
        })
        .catch(err => console.log(err))
}