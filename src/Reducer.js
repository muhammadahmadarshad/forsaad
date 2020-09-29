
export function reducer(state,action){
    
    if(action.type='LOGIN'){

        return {...state,token:action.payload}
    }



}