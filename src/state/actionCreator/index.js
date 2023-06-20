


const getDataMethod = (data) => {
    return (dispatch) => {
        dispatch ({
            type:"GET_DATA",
            payload:data
        })
    }
}


export default getDataMethod;