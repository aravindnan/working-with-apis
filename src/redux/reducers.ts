import { GETALLITEMS, LOGIN } from "./actions"

const initialState={
    itemList:[],
    login:false
}

export const mainReducer=(state=initialState,action:any)=>{
    switch(action.type){
        case GETALLITEMS:
            // console.log("INREDUCER",action.payload)
            return{
                ...state,
                itemList:action.payload
            }
        case LOGIN:
            return{
                ...state,
                login:action.payload
            }

        default:return state
    }

    
}
