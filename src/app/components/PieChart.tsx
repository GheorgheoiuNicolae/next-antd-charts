"use client";
import { Column, Line, Pie } from "@antv/g2plot";
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
function PieWidget() {
  const [data, setData] = useState();
  const [initialRender, setInitialRender] = useState(true);
  const containerRef: RefObject<any> = useRef(null);
  let piePlot: any;

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
    if (data && initialRender) {
      piePlot = new Pie(containerRef.current,  {
        appendPadding: 10,
        data,
        angleField: 'death',
        colorField: 'month',
        autoFit: false,
        radius: 1,
        innerRadius: 0.64,
        meta: {
            value: {
            formatter: (v) => `¥ ${v}`,
            },
        },
        label: {
            type: 'inner',
            offset: '-30%',
            content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
            style: {
              fontSize: 14,
              textAlign: 'center',
            },
          },
        interactions: [{ type: 'element-active' }, { type: 'element-selected' }],
        statistic: {
            title: {
            offsetY: -8,
            },
            content: {
            offsetY: -4,
            },
        }
      });
    }
  }, [data]);

  useEffect(() => {
    if (data && initialRender) {
      setInitialRender(false);
      piePlot.render();
    }
  }, [data]);

  return (
    <section style={{ display: "flex", flex: 1, flexDirection: "column", padding: '40px 0' }}>
      <div style={{ flex: "1" }} ref={containerRef}></div>
    </section>
  );
}

export default PieWidget;
