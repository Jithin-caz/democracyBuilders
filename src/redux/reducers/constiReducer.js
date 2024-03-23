const initialState={
    constituency:""
}



export const constiReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case 'setConstituency':
            return {
                ...state,
                constituency:action.payload.constituency
            }
        default:return state
    }
} 
