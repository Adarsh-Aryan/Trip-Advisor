import styles from './listing-hotels.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import { TripContext } from '../../context/TripContext'


function ListingHotels(props) {

    const { listingHotels } = props

    const {listingState:{bySort,byFacilities,byCost}}=useContext(TripContext)

    let filterHotels= listingHotels;


    const filterListingData=()=>{
        if(byFacilities.length>0){
            filterHotels=filterHotels.filter(item=>{
                return byFacilities.every(facility=>item.facilities.some(data=>data.fac_name===facility))
            })
        }

        if(bySort){
            if(bySort==='lowToHigh'){
                filterHotels=filterHotels.sort((a,b)=>{
                    return a.cost-b.cost
                })
            }
            else if(bySort==='highToLow'){
                filterHotels=filterHotels.sort((a,b)=>{
                    return b.cost-a.cost
                })
            }
        }

        if(byCost){
            if(byCost==='All'){
                return filterHotels
            }
            else{
                const lcost=Number(byCost.split('-')[0])
                const hcost=Number(byCost.split('-')[1])

                filterHotels=filterHotels.filter(item=>{
                    return(Number(item.cost)>=lcost && Number(item.cost)<=hcost)
                })
            }
        }

        return filterHotels
    }

    if(filterListingData().length===0){
        return(
            <h1 className={styles.not_found}>Oops! No Hotels Found </h1>
        )
    }


    return (
        <div className={styles.listing_hotels}>

            {filterListingData().map(item => {

                const hotel_src = item.hotel_img

                

                if (hotel_src) {
                    return (    


                        <div className={styles.hotel_content} key={item.hotel_id}>
                            <div className={styles.hotel_img}>
                                <img src={hotel_src} alt={item.hotel_name} />
                            </div>
                            <div className={styles.hotel_details}>
                                <h3>{item.hotel_name}, {item.city_name}</h3>
                                <p style={{ color: "gray" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit asperiores sequi architecto.</p>
                                <div className={styles.hotel_performance}>
                                    <div>
                                        <span>{item.rating} &#9733;</span>
                                        <span style={{ color: "blue" }}>{item.ratingText}</span>

                                    </div>
                                    <Link href={`/hotels/${item.hotel_id}`}>
                                        <a className={styles.btn}>More Details</a>
                                    </Link>
                                </div>
                                
                            </div>
                        </div>

                    )
                }



            })}


        </div>
    )
}

export default ListingHotels