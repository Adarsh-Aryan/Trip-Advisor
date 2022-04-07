import HotelContent from "../../components/hotels/hotel-details/hotel-content"
import {getHotelDetails } from "../../helper/trip-util"
import {useEffect,useState} from 'react'
import { useRouter } from "next/router"
import Spinner from "../../components/ui/Spinner"

function HotelDetailsPage(){

    const [hotelDetails,setHotelDetails]=useState()

    const router= useRouter()

    const {hotelId}=router.query

    useEffect(async()=>{

        const hotelData= await getHotelDetails(hotelId)

        

        setHotelDetails(hotelData)

    },[hotelId])

   

    if(!hotelDetails){
        return(
            <Spinner/>
        )
    }

    

    return(
        <HotelContent hotelItem={hotelDetails}/>
    )
} 


export default HotelDetailsPage