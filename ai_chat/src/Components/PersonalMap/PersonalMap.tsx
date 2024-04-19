import React, { useEffect, useRef, useState } from "react";
import { FC } from "react";

import { PersonMapType, DeveloperLevel } from "./typesPersonMap";
import fetchData from "../../AxiosRequest/AxiosRequest";

// import { Sling as Hamburger } from "hamburger-react";

import classNames from "classnames";
import "./PersonalMap.scss";
import "../../App.css";

const PersonalMap: FC<PersonMapType> = ({ className, burgerState }) => {
    const [mapData, setMapData] = useState<DeveloperLevel[]>();


    const sectionRef = useRef<HTMLDivElement>(null);
    const [shouldHandleBlur, setShouldHandleBlur] = useState(true);

    console.log(burgerState)

    useEffect(() => {
        fetchData("./sources/gptMap.json")
            .then((data) => setMapData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const mapDataHandler = (data: DeveloperLevel[]) => {
        // console.log(data);
        return data.map((dat) => (
            <div className="_gideCard_" key={dat.id}>
                <h3> {dat.level} </h3>
                {dat.knowledge.map((know) => {
                    // console.log(know);
                    return (
                        <a
                            href={know.source}
                            rel="noreferrer"
                            target="_blank"
                            title={know.description}
                            key={know.name}
                        >
                            {know.name}
                        </a>
                    );
                })}
            </div>
        ));
    };
    return (
        <section
            // data-width = {bar && "big"}
            ref={sectionRef}
            className={classNames(className, {
                ["hideBar"]: !burgerState,
                ["showBar"]: burgerState,
            })}
        >
      

            <div className="_mapContainer_">
                <div className="_mapGide_">
                    <h2>Personal education map</h2>

                    {mapData && mapDataHandler(mapData)}

                    {mapData && mapDataHandler(mapData)}
                </div>
            </div>
        </section>
    );
};

export default PersonalMap;
