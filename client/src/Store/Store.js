import {createSlice,configureStore} from '@reduxjs/toolkit'



const houseSlice = createSlice({
    name:'house',
    initialState:{houses:null,err:null,single:null,loading:true,exclusive:null},
    reducers:{
        searchHouses(state,action){
            state.houses = action.payload
            state.err = null
            state.loading= false
        },
        exclusiveHouses(state,action){
            state.exclusive = action.payload
            state.err = null
            state.loading= false
        },
        fetch(state,action){
            state.loading =true
        },
        fetchFail(state,action){
            state.err = action.payload
            state.houses = null
            state.loading= false
        },
        fetchId(state,action){
            state.single = action.payload
            state.err = null
            state.loading= false
        }
    }
})



export const houseAction = houseSlice.actions


const store = configureStore({
    reducer:{house:houseSlice.reducer}
})


export default store