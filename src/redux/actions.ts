export const GETALLITEMS="GETALLITEMS"
export const LOGIN="LOGIN"

export const getallitemsAction=(data:any)=>{
    return{
        type:GETALLITEMS,
        payload:data
    }
}

export const loginAction=(data:any)=>{
    return{
        type:LOGIN,
        payload:data
    }
}