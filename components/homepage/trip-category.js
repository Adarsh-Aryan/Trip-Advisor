import styles from './trip-category.module.css'
import Image from 'next/image'
import Link from 'next/link'

function TripCategory(props) {

    const { allCategory } = props

    return (
        <div className={styles.category}>
            <h1>Featured Trips</h1>
            <div className={styles.controls}>
                {allCategory.map(item => {

                    const src = item.category_img

                    return (
                        <Link href={`/hotels/listing/${item.category_name}`} key={item.category_id}  >

                            <a >
                                <div className={styles.control} >

                                    <img src={src} alt={item.category_name} />

                                    <div>
                                        <h2>{item.category_name}</h2>
                                    </div>
                                </div>
                            </a>


                        </Link>

                    )
                })}


            </div>


        </div>
    )
}

export default TripCategory