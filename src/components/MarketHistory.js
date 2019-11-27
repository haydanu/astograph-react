import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { gql } from 'apollo-boost';

import { client } from '../config/graphQlClient';

export default function MarketHistory() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    client
      .query({
        query: gql`
          {
            trades(
              last: 20
              baseAsset: "native"
              counterAsset: "ETH-GBVOL67TMUQBGL4TZYNMY3ZQ5WGQYFPFD5VJRWXR72VA33VFNL225PL5"
            ) {
              pageInfo {
                startCursor
                endCursor
              }
              nodes {
                id
                price
                baseAmount
                baseAsset {
                  id
                  code
                }
                counterAsset {
                  id
                  code
                }
                ledgerCloseTime
              }
            }
          }
        `
      })
      .then(result => {
        console.log(result);
        setData(result.data.trades.nodes);
      })
      .then(() => setIsLoading(false))
      .catch(error => console.log(error));
  }, [data]);

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className='market-history basePadding'>
      <div className='market-header'>
        <nav> market history</nav>
      </div>
      <table className='table-responsive'>
        <thead>
          <tr>
            <th>PRICE (ETH)</th>
            <th>SIZE</th>
            <th>WHEN</th>
          </tr>
        </thead>
        <tbody>
          {data.map((node, i) => {
            const when = moment(
              node.ledgerCloseTime.replace('T', ' ').replace('Z', ''),
              'YYYY-MM-DD HH:mm:ss'
            ).toNow();
            return (
              <tr key={i}>
                <td className='col-5 text-right'>
                  {new Intl.NumberFormat(undefined, {
                    maximumFractionDigits: 3
                  }).format(node.price)}
                </td>
                <td className='col-3 text-right'>
                  {new Intl.NumberFormat(undefined, {
                    maximumFractionDigits: 3
                  }).format(node.baseAmount)}
                </td>
                <td className='col-4 text-right'>{when}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
