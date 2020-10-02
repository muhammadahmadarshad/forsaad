import { act } from "react-dom/test-utils"

export function reducer(state,action){
    
    if(action.type=='LOGIN'){

        return {...state,token:action.payload}
    }

    else if (action.type=='ProcessSalary')
    {
        console.log('Process Salary',action)
        return {...state,salaryData:action.payload}
    }



}