import { configureStore } from '@reduxjs/toolkit'
import reducers from "./reducers";


const store = configureStore({
    reducer:{
        name:reducers,
    }
})





export default store;