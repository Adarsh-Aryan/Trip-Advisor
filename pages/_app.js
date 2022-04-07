
import TripState from '../context/TripState'
import '../styles/globals.css'
import Layout from '../components/layout/layout'


function MyApp({ Component, pageProps }) {
  return (

    <Layout>
      <TripState>
        <Component {...pageProps} />
      </TripState>
    </Layout>
  )

}



export default MyApp
