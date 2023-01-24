import _ from "lodash";
import React, {  useMemo } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { useSelector } from "react-redux";
import { dataSelectors } from "../state/data.js";
export default function LineChart() {
  const dataFromSensor = useSelector(dataSelectors.msg);

  const groupByTimestamp = _.groupBy(dataFromSensor, "timestamp");

  const convertedData = _.map(groupByTimestamp, (elem) => {
    const date = new Date(elem[0].timestamp);
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  });

  const memoDataTemp = useMemo(
    () => _.map(dataFromSensor, (elem) => elem.value),
    [dataFromSensor]
  );

  const memoDataHum = useMemo(
    () => _.map(dataFromSensor, (elem) => elem.hum),
    [dataFromSensor]
  );


  const data = {
    labels: convertedData,
    datasets: [
      {
        label: "Temp",
        data: memoDataTemp,
        borderColor: "#444b6e",
        backgroundColor: ["#3d315b"],
        hoverBackgroundColor: ["#708b75"],
        yAxisID: "y",
        tension: 0.2,
      },
      {
        label: "Hum",
        data: memoDataHum,
        borderColor: "#9ab87a",
        backgroundColor: ["#f8f991"],
        hoverBackgroundColor: ["#708b75"],
        yAxisID: "y1",
        tension: 0.2,
      },
    ],
  };

  const options = {
    bezierCurve: true,
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: "Temperature and Humidity",
      },
      zoom: {
        limits: {
          y: { min: 0, max: 100 },
          y2: { min: -5, max: 5 },
        },
      },
    },

    barValueSpacing: 20,

    scales: {
      y: {
        type: "linear",
        display: false,
        position: "right",
      },

      y1: {
        type: "linear",
        display: false,
        position: "left",
        grid: {
          drawOnChartArea: false,
        },
      },
      grid: {
        drawOnChartArea: false, // only want the grid lines for one axis to show up
      },
    },
  };

  return (
    <div className="App">
      <Line data={data} options={options} />
    </div>
  );
}
