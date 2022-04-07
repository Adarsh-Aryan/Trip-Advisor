import FilterSection from './filter-section.js'
import ListingHotels from './listing-hotels.js'
import styles from './listing-section.module.css'

function ListingSection(props){


    return(

        <section className={styles.grid}>
            <FilterSection facilities={props.facilities}/>
            <ListingHotels listingHotels={props.items}/>
        </section>
           
       
    )
}


export default ListingSection