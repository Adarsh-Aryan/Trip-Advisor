import styles from './filter-section.module.css'
import { sortingList } from '../../helper/trip-util'
import { costFilter } from '../../helper/trip-util'
import { useContext} from 'react'
import { TripContext } from '../../context/TripContext'

function FilterSection(props) {

    const { listingDispatch } = useContext(TripContext)

    

    return (

        <div className={styles.filters}>
            <div className={styles.filter_main_heading}>
                <h4>Filters: By</h4>
            </div>
            <hr className={styles.line}/>
            <div className={styles.filter_heading}>
            <h2>Facilities</h2>
                {props.facilities.map((facility, index) => {
                    return (

                        <label key={index} style={{ cursor: 'pointer' }}>
                            <input  type="checkbox" value={facility.fac_name} name='facility' onChange={(e) => {


                                if (!e.target.checked) {
                                    listingDispatch({
                                        type: 'REMOVE_FACILITY',
                                        payload: e.target.value
                                    })
                                }

                                else {

                                    listingDispatch({
                                        type: 'ADDING_FACILITY',
                                        payload: e.target.value
                                    })
                                }

                            }}
                            />{facility.fac_name}
                        </label>
                    )
                })}


            </div>
            <hr className={styles.line}/>
            <div className={styles.filter_heading} >
            <h2>Cost Filter</h2>
                <label>
                    <input type="radio" value="All" name="cost"
                    />All
                </label>
                {costFilter.map((cost_item, index) => {
                    return (
                        <label key={index} style={{ cursor: 'pointer' }}>
                            <input type="radio" value={`${cost_item.lcost}-${cost_item.hcost}`} name='cost'
                                onChange={(e) => {
                                    e.target.checked=true
                                    listingDispatch({
                                        type: 'FILTER_BY_COST',
                                        payload: e.target.value
                                    })
                                }} />{`${cost_item.lcost}-${cost_item.hcost}`}
                        </label>
                    )
                })}


            </div>
            <hr className={styles.line}/>
            <div className={styles.filter_heading} >
            <h2>Sort By Cost:</h2>
                {sortingList.map((sort_item, index) => {
                    return (

                        <label key={index} style={{ cursor: 'pointer' }}>
                            <input type="radio" value={sort_item.msg} name='sorting'
                                onChange={(e) => {
                                    e.target.checked=true
                                    listingDispatch({
                                        
                                        type: 'FILTER_BY_SORT',
                                        payload: e.target.value
                                    })
                                }}
                            />{sort_item.msg}
                        </label>
                    )
                })}

            </div>
        </div>
    )
}

export default FilterSection