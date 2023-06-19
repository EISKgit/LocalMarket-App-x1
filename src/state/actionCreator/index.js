const myName =()=> {
    return (dispatch)=>{
        dispatch({
            type:"name",
            payload:"EISK"
        })
    }
}

export default myName;