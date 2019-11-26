import React from 'react';
import { Row, Col } from 'reactstrap';

function BuySellForm({ data, isLoading }) {
  return (
    <div>
      <Row>
        <Col>Unit Price</Col>
        <Col>{data && Number.parseFloat(data).toFixed(7)}</Col>
        <Col>ETH</Col>
      </Row>
      <Row>
        <Col>
          Qty <small>Max</small>
        </Col>
        <Col>0.00</Col>
        <Col>XLM</Col>
      </Row>

      <Row>
        <Col>Total</Col>
        <Col>0.00</Col>
        <Col>ETH</Col>
      </Row>
    </div>
  );
}

export default BuySellForm;
