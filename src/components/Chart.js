import React, { useState, useEffect } from 'react';
import Apexchart from 'react-apexcharts';
import { gql } from 'apollo-boost';

import { client } from '../config/graphQlClient';
import { chunkData, sumChunkData } from '../helpers/chunkData';

function Chart() {
  const [isLoading, setIsLoading] = useState(true);
  const [oneHourData, setOneHourData] = useState([]);
  const [options] = useState({
    options: {
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        tooltip: {
          enabled: true,
          y: {
            format: 'dd',
            formatter: undefined
          }
        }
      }
    }
  });

  useEffect(() => {
    client
      .query({
        query: gql`
          {
            tradeAggregations(
              last: 168 # 7 days
              resolution: 3600000 # 1 hour
              baseAsset: "native"
              counterAsset: "ETH-GBVOL67TMUQBGL4TZYNMY3ZQ5WGQYFPFD5VJRWXR72VA33VFNL225PL5"
            ) {
              tradeCount
              baseVolume
              counterVolume
              avg
              high
              low
              open
              close
            }
          }
        `
      })
      .then(result => {
        setOneHourData(result.data.tradeAggregations);
      })
      .then(() => setIsLoading(false))
      .catch(error => console.log(error));
  }, [oneHourData]);

  if (isLoading) {
    return <div>Loading</div>;
  }

  const getSixHoursIntervalData = chunkData(0, 6, oneHourData);
  const getSixHoursIntervalData_Base = sumChunkData(getSixHoursIntervalData);
  const seriesData = [];
  const tempSeriesData = getSixHoursIntervalData_Base.map((data, i) => {
    return {
      x: new Date(1538778600000),
      y: [data.open, data.high, data.low, data.close]
    };
  });

  seriesData.push({ data: tempSeriesData });

  console.log(seriesData);

  return (
    <div id='chart'>
      <Apexchart
        options={options.options}
        series={seriesData}
        type='candlestick'
        height='350'
      />
    </div>
  );
}

export default Chart;
