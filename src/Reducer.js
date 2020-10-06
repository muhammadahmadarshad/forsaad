
export function reducer(state,action){
    
    if(action.type=='LOGIN'){
      
        return {...state,token:action.payload,msgs:[]}
    }

    else if (action.type=='ProcessSalary')
    {
        console.log('Process Salary',action)
        return {...state,salaryData:action.payload}
    }

    else if (action.type=='LOGOUT'){
        return {...state,token:{token:null}}
    }
    else if (action.type=='ONSOCKET'){

        return {...state,socket:action.payload}
    }

    else if (action.type=='ONSOCKETOUTPUTS'){

        return {...state,msgs:action.payload}

    }
    else if (action.type=='AddMessage'){

        return {...state,msgs:[...state.msgs,action.payload]}

    }



}