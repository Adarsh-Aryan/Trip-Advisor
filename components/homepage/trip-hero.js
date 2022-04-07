import TripCategory from "./trip-category"
import TripSearch from "./trip-search"
import styles from './trip-hero.module.css'

function TripHero(props){

    

    return(
        <section className={styles.hero}>
            <TripSearch allcity={props.cityItems}/>
            <TripCategory allCategory={props.cat_items}/>
        </section>
    )

}

export default TripHero