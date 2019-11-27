import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import { gql } from 'apollo-boost';

import { client } from '../config/graphQlClient';
import { percentageDifference } from '../helpers/calculateDifference';

export default function MarketInfo() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    client
      .query({
        query: gql`
          {
            tradeAggregations(
              last: 1 # 1 day
              resolution: 86400000 # 24 hours
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
        setData(result.data.tradeAggregations);
      })
      .then(() => setIsLoading(false))
      .catch(error => console.log(error));
  }, [data]);

  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <div className='basePadding'>
      {data &&
        data.map((data, index) => (
          <div key={index}>
            <Row>
              <Col>
                <p>
                  {data.counterVolume}
                  <strong>ETH</strong>
                </p>
                <small>24h Volume</small>
              </Col>
              <Col>
                <p>{data.close}</p>
                <small>Last price per XLM</small>
              </Col>
              <Col>
                <p>{percentageDifference(data.close, data.open)}%</p>
                <small>24h Change</small>
              </Col>
            </Row>
          </div>
        ))}
    </div>
  );
}
