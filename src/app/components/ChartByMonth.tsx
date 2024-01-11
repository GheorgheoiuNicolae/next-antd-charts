"use client";
import { Column, Line, Scatter } from "@antv/g2plot";
import { RefObject, useEffect, useRef, useState } from "react";

const months = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sept',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec',
}
function BarWidget() {
  const [data, setData] = useState();
  const [initialRender, setInitialRender] = useState(true);
  const containerRef: RefObject<any> = useRef(null);
  let stackedBarPlot: any;

  useEffect(() => {
    const getApiData = async () => {
      const endpoint = (
        'https://api.coronavirus.data.gov.uk/v1/data'
    );
    
      const res = await fetch(endpoint);
      const result = await res.json();
      
      const data: any = {};
      const dataArr: any = []
      result.data.forEach((item: any) => {
        const month = months[data[item.date.split('-')[1]]];
        data[months[item.date.split('-')[1]]] = {
          death: data[months[item.date.split('-')[1]]]?.death ? data[months[item.date.split('-')[1]]].death + item.death : item.deathNew,
          month: months[item.date.split('-')[1]],
          monthIndex: parseInt(item.date.split('-')[1])
        }
      })
      Object.keys(data).forEach(function(key) {
        dataArr.push(data[key])
      });
      setData(dataArr.sort((a: any,b: any) => a.monthIndex - b.monthIndex));
    };
    getApiData();
  }, []);

  useEffect(() => {
    if (data) {
      stackedBarPlot = new Column(containerRef.current, {
        data: data,
        xField: "month",
        yField: "death",
        autoFit: false,
        label: {
          layout: [
            { type: "interval-adjust-position" },
            { type: "interval-hide-overlap" },
            { type: "adjust-color" },
          ],
        },
      });
    }
  }, [data]);

  useEffect(() => {
    if (data && initialRender) {
      setInitialRender(false);
      stackedBarPlot.render();
    }
  }, [data]);

  return (
    <section style={{ display: "flex", flex: 1, flexDirection: "column" }}>
      <div style={{ flex: "1" }} ref={containerRef}></div>
    </section>
  );
}

export default BarWidget;
