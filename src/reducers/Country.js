const initialState ={
    list:[]
}

export const country = (state=initialState, action) =>{
    switch(action.type){
        case 'FETCH_ALL_COUNTRIES':
            return {
                ...state,
                list: [...action.payload]
            }
        default:
            return state
    }
}