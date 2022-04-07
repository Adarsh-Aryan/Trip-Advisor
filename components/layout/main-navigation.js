
import Link from 'next/link'
import { useEffect, useState } from 'react';
import styles from './main-navigation.module.css'

function MainNavigation(){

    const [user,setUser]=useState('')

    const [authorized,setAuthorized]=useState(false)    

    const getUser= async()=>{
        
        if(!sessionStorage.getItem('token')){
            setAuthorized(false)
            return;
        }

        const response =await fetch('https://trip-connect-api.herokuapp.com/api/auth/getUser',{
          
            method:'GET',
            headers:{
                'auth-token':sessionStorage.getItem('token')
            }
        })

        const data= await response.json()

        setAuthorized(true)

        setUser(data)

    }
    
    

    useEffect(() => {
        getUser()
    }, []);

    const handleLogout=()=>{
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('userInfo')
        window.location='/login'
    }

    return(
        <header className={styles.header}>
            <Link href="/"><a><h1>TripConnect</h1></a></Link>
            <nav>
                <ul>

                    {!(authorized)?
                        <li><Link href="/login">Login</Link></li>
                        : <>
                            <li>Hi {user.name}</li>
                            <li onClick={handleLogout}>LogOut</li>
                        
                        </>
                     

                    }
                    
                    
                   
                    
                    
                </ul>
            </nav>
        </header>
    )
}



export default MainNavigation