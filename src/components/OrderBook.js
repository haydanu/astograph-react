import React, { useState, useEffect } from 'react';
import { gql } from 'apollo-boost';

import { client } from '../config/graphQlClient';

export default function OrderBook() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    client
      .query({
        query: gql`
          {
            orderBook(
              limit: 20
              selling: "native"
              buying: "ETH-GBVOL67TMUQBGL4TZYNMY3ZQ5WGQYFPFD5VJRWXR72VA33VFNL225PL5"
            ) {
              bids {
                price
                amount
              }
              asks {
                price
                amount
              }
            }
          }
        `
      })
      .then(result => {
        setData(result.data.orderBook);
      })
      .then(() => setIsLoading(false))
      .catch(error => console.log(error));
  }, [data]);

  if (isLoading) {
    return <div>Loading</div>;
  }

  let bidSum = 0;
  let askSum = 0;

  return (
    <div>
      <div className='order-header'>
        <nav>order book</nav>
      </div>
      <div className='order-book'>
        <table>
          <thead>
            <tr>
              <th>SIZE (XLM)</th>
              <th>SUM</th>
              <th>PRICE (ETH)</th>
            </tr>
          </thead>
          <tbody>
            {data.asks &&
              data.bids.map((data, index) => {
                bidSum += parseInt(data.amount);
                return (
                  <tr key={index}>
                    <td>
                      {new Intl.NumberFormat('en-US').format(data.amount)}
                    </td>
                    <td>{new Intl.NumberFormat('en-US').format(bidSum)}</td>
                    <td style={{ color: 'rgb(255, 139, 97)' }}>
                      {Number.parseFloat(data.price).toFixed(7)}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td colSpan={2}>Sperad (XML)</td>
              <td>0.000 1.3%</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            {data.bids &&
              data.asks.map((data, index) => {
                askSum += parseInt(data.amount);
                return (
                  <tr key={index}>
                    <td>
                      {new Intl.NumberFormat('en-US').format(data.amount)}
                    </td>
                    <td>{new Intl.NumberFormat('en-US').format(askSum)}</td>
                    <td style={{ color: 'rgb(63, 203, 224)' }}>
                      {Number.parseFloat(data.price).toFixed(7)}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
