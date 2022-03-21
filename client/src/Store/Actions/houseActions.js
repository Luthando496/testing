import {houseAction} from '../Store'
import axios from 'axios'


export const searchHouse =(keyword) => {
    return async dispatch => {

        try{

            console.log(keyword)

            const {data} = await axios.get(`/v1/luthando/properties?keyword=${keyword}`)
            dispatch(houseAction.fetch())
            dispatch(houseAction.searchHouses(data))
    }catch(err){
        dispatch(houseAction.fetchFail(err))
        
        }


}
}


// export const searchhouse =(keyword) => {
//     return async dispatch => {

//         try{

//             const {data} = await axios.get(`/v1/luthando/properties?keyword=${keyword}`)
    
//             dispatch(houseAction.fetchHouses(data))
//     }catch(err){
//         dispatch(houseAction.fetchFail(err))
        
//         }


// }
// }


export const fetchId =(id) => {
    return async dispatch => {

        try{

            const {data} = await axios.get(`/v1/luthando/properties/${id}`)

    
            dispatch(houseAction.fetch())
            dispatch(houseAction.fetchId(data))
            console.log(data)
        }catch(err){
            dispatch(houseAction.fetchFail(err))
            
        }
        

}
}


export const exclusive =() => {
    return async dispatch => {

        try{
            dispatch(houseAction.fetch())

            const {data} = await axios.get(`/v1/luthando/properties/prop/exclusive`)
    
            dispatch(houseAction.exclusiveHouses(data))
            console.log(data)
    }catch(err){
        dispatch(houseAction.fetchFail(err))
        
        }


}
}