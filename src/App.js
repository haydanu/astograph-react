import React from 'react';
import { Row, Col } from 'reactstrap';

import NavbarComponent from './components/Navbar';
import BuySell from './components/BuySell';
import MarketInfo from './components/MarketInfo';
import OrderBook from './components/OrderBook';
import MarketHistory from './components/MarketHistory';
import TradeHeader from './components/TradeHeader';
import Chart from './components/Chart';
import './App.css';

function App() {
  return (
    <div>
      <NavbarComponent />
      <div className='template-content'>
        <TradeHeader />

        <div>
          <Row>
            <Col md='3'>
              <div className='first-column-wrapper'>
                <BuySell />

                <div className='advertise'>
                  <h2>Try StellarX</h2>
                  <p>Join now for totally free</p>
                  <p>peer-to-peer trading</p>
                  <a
                    href='https://www.stellarx.com/signup'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='signup-button black'>
                    SIGNUP
                  </a>

                  <div>
                    <small>* Yep, we even refund your network costs.</small>
                  </div>
                </div>
              </div>
            </Col>
            <Col md='6'>
              <MarketInfo />
              <Chart />
            </Col>
            <Col md='3'>
              <OrderBook />
              <MarketHistory />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default App;
