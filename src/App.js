import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import NavbarComponent from './components/Navbar';
import BuySell from './components/BuySell';
import MarketInfo from './components/MarketInfo';
import OrderBook from './components/OrderBook';
import MarketHistory from './components/MarketHistory';
import './App.css';

function App() {
  return (
    <div>
      <NavbarComponent />
      <div className='asset-info'>
        <Row>
          <Col> {`<`} </Col>
          <Col>XLM | Native</Col>
          <Col>XLM | Native</Col>
        </Row>
      </div>
      <div className='template-content'>
        <Row>
          <Col>
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
              </div>
            </div>
          </Col>
          <Col>
            <MarketInfo />
          </Col>
          <Col>
            <OrderBook />
            <MarketHistory />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
