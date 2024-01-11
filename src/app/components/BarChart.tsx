"use client";
import { Scatter } from "@antv/g2plot";
import { RefObject, useEffect, useRef, useState } from "react";

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
      setData(result.data);
      console.log('data', result)
    };
    getApiData();
  }, []);

  useEffect(() => {
    if (data) {
      stackedBarPlot = new Scatter(containerRef.current, {
        data: data,
        // height: 500,
        // isStack: false,
        xField: "date",
        yField: "death",
        // seriesField: "type",
        autoFit: false,
        label: {
          position: "left", // 'left', 'middle', 'right'
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
      <h3 style={{ marginBottom: "30px" }}>Total deaths by Date</h3>
      <div style={{ flex: "1" }} ref={containerRef}></div>
    </section>
  );
}

export default BarWidget;
