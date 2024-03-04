

import React, { useEffect, useState } from 'react'
import "./PersonalMap.scss"
import { FC } from 'react'
import { PersonType, DeveloperLevel } from './typesPersonMap'
import fetchData from '../../AxiosRequest/AxiosReques'



const PersonalMap: FC <PersonType> = ({className}) => {
const [mapData,setMapData] = useState<DeveloperLevel[]>()

 
useEffect(() => {
    fetchData("./sourses/map.json")
    .then(data => setMapData(data) )
    .catch(error => console.error('Error fetching data:', error));
 }, [])




const mapDataHendler = (datas: DeveloperLevel[])  => {
  console.log(datas[0].level)
  return datas.map(data => <div className='_gideCard_' key={data.level}>
    <h3> {data.level} </h3>
    {data.knowledge.map(know => <p key={know}> {know} </p>)}
    </div>)
}


  return (
    <section className={className}>
      <div className="_mapContainer_">
        <div className='_mapGide_'>
          <h2>Personal education map</h2>

          {mapData && (mapDataHendler(mapData))}
          {/* {mapData && (mapDataHendler(mapData))} */}

   
        </div>
      </div>
      <div className="resizer_"></div>
    </section>
  )
}

export default PersonalMap
