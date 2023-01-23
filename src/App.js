import React, { useEffect, useState } from "react";
import "chart.js/auto";
import {getAlarm, getData} from "./api";
import LineChart from "./Component/LineChart.js";
import List from "./Component/List";
import DatePicker from "./Component/DatePicker";
import {Button, Text} from "evergreen-ui";
import {useDispatch, useSelector} from "react-redux";
import {dataActions, dataSelectors} from "./state/data";
import {store} from "./state";



export default function App() {
    const dateStart = useSelector(dataSelectors.dateStart);
    const dateEnd = useSelector(dataSelectors.dateEnd);

    useEffect(()=>{
        console.log({dateStart: dateStart, dateEnd: dateEnd})
    },[dateEnd, dateStart])

    const filter = async () => {
        getData("Davide Mazzeo", dateStart, dateEnd)
    }

    const updateEvery10Seconds = () => {
        setInterval(async ()=>{
            await getData("Davide Mazzeo", dateStart, dateEnd);
        }, 10000)
    }

  useEffect(() => {
    const initialize = async () => {
        await getData("Davide Mazzeo", dateStart, dateEnd);
        updateEvery10Seconds();
    };
    initialize();
  }, []);


  return (
    <div className="App">
        <div style={{flexDirection: "column"}}>
            <Text>Seleziona la data di inizio e fine per filtrare</Text>
            <div>
                <DatePicker label={"Inizio"} selector={"start"}/>
                <DatePicker label={"Fine"} selector={"end"}/>
            </div>
            <div onClick={filter}>
                <Button marginTop={20} >Filtra</Button>
            </div>
        </div>

      <LineChart/>
      <List/>
    </div>
  );
}
