import ListingSection from "../../../components/listing/listing-section"
import { getAllCatgory, getAllFacilities, getListingHotels } from "../../../helper/trip-util"
import {useEffect,useState} from 'react'
import { useRouter } from "next/router"
import Spinner from "../../../components/ui/Spinner"

function HotelsByCategory(){

    const router=useRouter()

    const {category}=router.query

    const [facility,setFacility]=useState()

    const [listingHotels,setlistingHotels]=useState()

   

    useEffect(async() => {
        
        const allHotels= await getListingHotels(category)

        const allFacilites= await getAllFacilities()

        setFacility(allFacilites)

        setlistingHotels(allHotels)

    }, [category]);

    if(!listingHotels || !facility || listingHotels.length===0){

        return(
            <Spinner/>
        )
    }

    

    return(
        <ListingSection facilities={facility} items={listingHotels}/>
        

    )
}



export default HotelsByCategory