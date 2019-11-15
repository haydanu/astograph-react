import React, { useState, useEffect } from 'react';
import { gql } from 'apollo-boost';

import { client } from '../config/graphQlClient';

export default function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    client
      .query({
        query: gql`
          {
            account(
              id: "GB6NVEN5HSUBKMYCE5ZOWSK5K23TBWRUQLZY3KNMXUZ3AQ2ESC4MY4AQ"
            ) {
              id
              sequenceNumber
              balances {
                asset {
                  issuer {
                    id
                  }
                  code
                }
                balance
                limit
                authorized
              }
              signers {
                signer
                weight
              }
            }
          }
        `
      })
      .then(result => {
        console.log(result);
        setData(result.data.account.balances);
      })
      .catch(error => setError(error.message));
  }, []);

  if (error) return <div>{error}</div>;
  return (
    <div>
      {data && data.map((data, index) => <p key={index}>{data.balance}</p>)}
    </div>
  );
}
