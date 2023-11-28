import { commonApi } from "./commonApi"
import { serverURL } from "./serverURL"


export const uploadPlot = async(reqBody)=>{
    return await commonApi('POST',`${serverURL}/sell`,reqBody)
}
//get plot for (sell)projectcard component
export const getPlot = async ()=>{
    return await commonApi("GET",`${serverURL}/sell`,"")
}
//api to delete plot
export const deletePlot = async(id)=>{
    return await commonApi("DELETE",`${serverURL}/sell/${id}`,{})

}
//api to get datas in buy 

export const buyPlot = async()=>{
    return await commonApi("GET",`${serverURL}/sell`,"")
}


export const uploadRentalProps = async(reqBody)=>{
    return await commonApi('POST',`${serverURL}/Rent`,reqBody)
}

//to get that rental datas 

export const getAllRentals = async()=>{
   return await commonApi('GET',`${serverURL}/Rent`,"")
}

//API to delete a Property

export const deleteRentals = async(id)=>{
    return await commonApi('DELETE',`${serverURL}/Rent/${id}`,{})
 }


 //add to interest list
 export const addToInterest = async(rentalDetails)=>{
    return await commonApi('POST',`${serverURL}/Interested`,rentalDetails)
}

//to get data from the history
export const getInterested = async()=>{
    return await commonApi('GET',`${serverURL}/Interested`,"")
 }

//API to delete interests
export const deleteInterest = async(id)=>{
    return await commonApi('DELETE',`${serverURL}/Interested/${id}`,{})
 }

 //API to add TO Cart
 export const addToCart= async(cartDetails)=>{
    return await commonApi('POST',`${serverURL}/Cart`,cartDetails)
}


//API to get data to cart
export const getCart = async()=>{
    return await commonApi('GET',`${serverURL}/Cart`,"")
 }

 //API to delete 
 export const deleteCart = async(id)=>{
    return await commonApi('DELETE',`${serverURL}/Cart/${id}`,{})
 }

