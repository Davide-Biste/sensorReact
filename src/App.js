import React, { useEffect } from "react";
import "chart.js/auto";
import {getAlarm, getData} from "./api";
import LineChart from "./Component/LineChart.js";
import List from "./Component/List";
import DatePicker from "./Component/DatePicker";
import {Button, Text} from "evergreen-ui";
import {useSelector} from "react-redux";
import {dataSelectors} from "./state/data";


export default function App() {
    const dateStart = useSelector(dataSelectors.dateStart);
    const dateEnd = useSelector(dataSelectors.dateEnd);

  useEffect(() => {
    const initialize = async () => {
        await getData("Davide Mazzeo", dateStart, dateEnd);
        await getAlarm("Davide Mazzeo");
    };
    initialize();
  }, [dateEnd, dateStart]);


  return (
    <div className="App">
        <div style={{flexDirection: "column"}}>
            <Text>Seleziona la data di inizio e fine per filtrare</Text>
            <div>
                <DatePicker label={"Inizio"} dateValue={dateStart} selector={"start"}/>
                <DatePicker label={"Fine"} dateValue={dateEnd} selector={"end"}/>
            </div>
        </div>

      <LineChart/>
      <List/>
    </div>
  );
}
