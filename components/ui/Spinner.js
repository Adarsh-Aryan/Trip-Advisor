import React from 'react'
import Loader from '../../public/Spinner.svg'


const Spinner = () => {
  return (
    <div style={{
        
        display:'flex',
        justifyContent:'center',
        height:'80vh',
        alignItems:'center'

        }}>

        <img src={Loader} alt="loader" />
    </div>
    
  )
}

export default Spinner