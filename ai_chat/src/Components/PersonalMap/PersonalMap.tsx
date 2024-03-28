import React, { useEffect, useState } from "react"
import { FC } from "react"

import { PersonMapType, DeveloperLevel } from "./typesPersonMap"
import fetchData from "../../AxiosRequest/AxiosRequest"


import "./PersonalMap.scss"
import "../../App.css"


const PersonalMap: FC <PersonMapType> = ({className}) => {
const [mapData,setMapData] = useState<DeveloperLevel[]>()
const [width, setWidth] = useState<number>(window.innerWidth)

const [burger, setBurger] = useState<boolean>(false)
 
 
useEffect(() => {
    fetchData("./sources/map.json")
    .then(data => setMapData(data) )
    .catch(error => console.error("Error fetching data:", error));
 }, [])


//  useEffect(() => {
//   console.log(burger)
// }, [burger])
// console.log(width, burger)


 useEffect(() => {

  const handleResize = () => {
    setWidth(window.innerWidth);
    console.log(width, burger)
    if (width < 950) {
      setBurger(true)
    } else {
      setBurger(false)
    }
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, [width]);




const mapDataHandler = (data: DeveloperLevel[])  => {
  return data.map(dat => <div className="_gideCard_" key={dat.level}>
    <h3> {dat.level} </h3>
    {dat.knowledge.map(know => <p key={know}> {know} </p>)}
    </div>)
}


  return (
    <section className={className}>
      <div className="_mapContainer_">
        <div className="_mapGide_">
          <h2>Personal education map</h2>

          {mapData && (mapDataHandler(mapData))}

   
        </div>
      </div>
      {/* <div className="resizer_"></div> */}
    </section>
  )
}

export default PersonalMap
