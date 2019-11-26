import React, { useState, useEffect } from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Spinner
} from 'reactstrap';
import classnames from 'classnames';
import { gql } from 'apollo-boost';
import { useSubscription } from '@apollo/react-hooks';

import { client } from '../config/graphQlClient';
import BuySellForm from './BuySellForm';

const test = gql`
  {
    subscription {
      tick(
        selling: "native"
        buying: "ETH-GBVOL67TMUQBGL4TZYNMY3ZQ5WGQYFPFD5VJRWXR72VA33VFNL225PL5"
      ) {
        bestBuy: bestAsk
        bestSell: bestBid
      }
    }
  }
`;

const BuySell = props => {
  const [activeTab, setActiveTab] = useState('1');
  const { data, loading } = useSubscription(test, {});

  const [sellPrice, setSellPrice] = useState(0);
  const [buyPrice, setBuyPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  useEffect(() => {
    if (!loading && data) {
      const message = 'Received notification through GraphQL subscription.';
      console.info(message, data);
    }
  }, [loading, data]);

  useEffect(() => {
    client
      .query({
        query: gql`
          {
            tick(
              selling: "native"
              buying: "ETH-GBVOL67TMUQBGL4TZYNMY3ZQ5WGQYFPFD5VJRWXR72VA33VFNL225PL5"
            ) {
              bestBuy: bestAsk
              bestSell: bestBid
            }
          }
        `
      })
      .then(result => {
        setIsLoading(result.loading);
        setBuyPrice(result.data.tick.bestBuy);
        setSellPrice(result.data.tick.bestSell);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => {
              toggle('1');
            }}>
            Buy
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => {
              toggle('2');
            }}>
            Sell
          </NavLink>
        </NavItem>
      </Nav>
      {isLoading ? (
        <Spinner color='secondary' />
      ) : (
        <TabContent activeTab={activeTab}>
          <TabPane tabId='1'>
            <BuySellForm data={buyPrice} />
          </TabPane>
          <TabPane tabId='2'>
            <BuySellForm data={sellPrice} />
          </TabPane>
        </TabContent>
      )}
      <div>
        <a
          href='https://www.stellarx.com/login'
          target='_blank'
          rel='noopener noreferrer'
          className='login-button yellow'>
          log in to trade
        </a>
      </div>
    </div>
  );
};

export default BuySell;
