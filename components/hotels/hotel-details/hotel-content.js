import { Button } from '@material-ui/core'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import BookingModal from '../../Booking/BookingModal'
import styles from './hotel-content.module.css'




function HotelContent(props) {

    

    const { hotel_name, cost, address, contact, hotel_img } =(props.hotelItem)

    const [open,setOpen]=useState(false)

    const router=useRouter()

    const handleClose= ()=>{
        setOpen(false)
    }
    
    const handleOpen=()=>{
        if(!sessionStorage.getItem('token')){
            router.push('/login')
            return;
        }

        setOpen(true)
    }

    const imageSrc = hotel_img

    return (
        <div className={styles.details}>
            <div className={styles.image}>
                <img src={imageSrc} alt={hotel_name}/>
            </div>
            <div className={styles.content}>
                <h1>{hotel_name}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vitae similique commodi, ullam nihil repellendus aliquam debitis ab fugit reiciendis in reprehenderit nostrum eos consequatur minus perferendis ex dicta rerum ipsum dolorum quasi quas quo libero. Quos repudiandae obcaecati ipsam? Reprehenderit inventore, voluptatem architecto tempora et nihil excepturi asperiores maiores ab.</p>
                <h3>Cost: &#8377; {cost}/day</h3>
                {<h4>{address} &nbsp; {contact && `, ${contact}`}</h4>}
                <Button variant='contained' color='primary' style={{ marginTop: '1rem' }} onClick={handleOpen
                   
                }>Book Rooms</Button>

                <BookingModal open={open} hotel={props.hotelItem} handleClose={handleClose}/>
                
            </div>
        </div>
    )
}

export default HotelContent