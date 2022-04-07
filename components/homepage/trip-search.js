
import styles from './trip-search.module.css'
import {useState} from 'react'
import {useRouter} from 'next/router'

function TripSearch(props){

    const allcity=props.allcity

    const [hotelData,showHotelData]=useState([])

    const router= useRouter()

    async function cityChangeHandler(){

        const cityId= document.getElementById('city').value

        const response = await fetch(`https://trip-connect-api.herokuapp.com/hotels/${cityId}`)

        const data= await response.json()

        showHotelData(data)

    }

    function hotelChangeHandler(){
        const hotelId= document.getElementById('hotel').value
        router.replace(`/hotels/${hotelId}`)
        
    }

    return (
        <div className={styles.search}>
            <h1>Let's make your best trip ever!</h1>
            <div className={styles.select_box}>
                <select name="city" id='city' className={styles.city} onChange={cityChangeHandler}>
                    <option>Select City</option>
                    {allcity.map(item=>{
                        return(
                            <option key={item.city_id} value={item.city_id}>{item.city_name}</option>
                        )
                    })}
                </select>
                <select name="hotels" id='hotel' className={styles.hotels} onChange={hotelChangeHandler}>
                    <option>Select Hotels</option> 
                    {hotelData.map(item=>{
                        return(
                            <option key={item.hotel_id} value={item.hotel_id}>{item.hotel_name}</option>
                        )
                    })}   
                </select>
            </div>
        </div>
    )
}




export default TripSearch