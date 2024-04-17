import React, { useEffect, useRef, useState } from "react";
import { FC } from "react";

import { PersonMapType, DeveloperLevel } from "./typesPersonMap";
import fetchData from "../../AxiosRequest/AxiosRequest";

import { Sling as Hamburger } from "hamburger-react";

import classNames from "classnames";
import "./PersonalMap.scss";
import "../../App.css";

const PersonalMap: FC<PersonMapType> = ({ className }) => {
    const [mapData, setMapData] = useState<DeveloperLevel[]>();

    const [width, setWidth] = useState<number>(window.innerWidth);
    let state = width < 1100 ? false : true;
    const [bar, setBar] = useState<boolean>(state);
    const [burger, setBurger] = useState<boolean>(state);

    const sectionRef = useRef<HTMLDivElement>(null);
    const [shouldHandleBlur, setShouldHandleBlur] = useState(true);

    useEffect(() => {
        fetchData("./sources/gptMap.json")
            .then((data) => setMapData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    // ===========  Burger and left bar animation  ==============

    //  useEffect(() => {

    //   const handleResize = () => setWidth(window.innerWidth);

    //   setBar(true)
    //   width < 1100 &&  setBar(false)
    //   window.addEventListener("resize", handleResize);

    //   return () => {
    //     window.removeEventListener("resize", handleResize);
    //   };
    // }, [width]);

    // useEffect(() => {
    //     console.log(burger);
    //     setBar(burger);
    // }, [burger]);

    // ===========  Burger and left bar animation  ==============

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
    // mapData && mapDataHandler(mapData)
    return (
        <section
            // data-width = {bar && "big"}
            ref={sectionRef}
            className={classNames(className, {
                ["hideBar"]: !burger,
                ["showBar"]: burger,
            })}
        >
            <Hamburger
                toggled={burger}
                toggle={setBurger}
                direction="left"
                duration={0.4}
                color="#1cea1c"
                easing="ease-in"
            />

            <div className="_mapContainer_">
                <div className="_mapGide_">
                    <h2>Personal education map</h2>

                    {mapData && mapDataHandler(mapData)}

                    {mapData && mapDataHandler(mapData)}
                </div>
            </div>
            {/* <div className="resizer_"></div> */}
        </section>
    );
};

export default PersonalMap;
