import TripHero from "../components/homepage/trip-hero";
import { useEffect,useState } from "react";
import { getAllCatgory, getAllCity } from "../helper/trip-util";
import Spinner from "../components/ui/Spinner";

function HomePage() {

  const [city,setCity]=useState()

  const [category,setCategory]=useState()

  useEffect(async() => {
    
    const allCity= await getAllCity()

    const allCategory=await getAllCatgory()

    setCategory(allCategory)

    setCity(allCity)
  }, []);

  if(!city || !category){
    return(
      <Spinner/>
    )
  }

  return (
    <div>
      <TripHero cityItems={city} cat_items={category}/>
      
    </div>
  );
}



export default HomePage;
