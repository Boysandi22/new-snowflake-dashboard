import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Card,
} from 'reactstrap';
import {
  IoMdHelpCircleOutline,
} from 'react-icons/io';
import {
  useWeb3Context,
} from 'web3-react';

import Transactions from './transactions';

import {
  getHydroTestTokens,
  getHydroBalance,
  getSnowflakeBalance,
  depositTokens,
  withdrawSnowflakeBalance,
} from '../../services/utilities';

const Wallet = () => {
  const [snowflakeBalance, setSnowflakeBalance] = useState('0');

  const web3 = useWeb3Context();

  if (web3.active) {
    getSnowflakeBalance(web3.library, web3.account)
      .then((res) => {
        setSnowflakeBalance(web3.library.utils.fromWei(res));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Container>
      <Row>
        <Col>
          <Card className="blue-card">
            <Row className="p-3">
              <Col>
                <p>Your dApp Store Wallet</p>
              </Col>
              <Col className="text-right">
                <IoMdHelpCircleOutline />
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <p className="small mb-0 text-muted">
                  <span className="h1 text-white">
                    {snowflakeBalance}
                  </span>
                  {' '}
                  Hydro
                </p>
                <p className="small text-muted">
                  USD $340.00
                </p>
              </Col>
            </Row>
            <Row className="justify-content-center py-5">
              <Col className="text-right">
                <Button className="btn-white" onClick={() => depositTokens(web3.library, web3.account, '10')}>
                  Deposit
                </Button>
              </Col>
              <Col className="text-left">
                <Button color="success" onClick={() => withdrawSnowflakeBalance(web3.library, web3.account, '10')}>
                  Withdraw
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col>
          <Card className="grey-card">
            <Row className="p-3">
              <Col>
                <p>Buy deposit to dApp wallet</p>
              </Col>
              <Col className="text-right">
                <IoMdHelpCircleOutline />
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <p className="small mb-0 text-muted">
                  <span className="h1 text-white">
                    0
                  </span>
                  {' '}
                  Hydro
                </p>
                <p className="small text-muted">
                  USD $340.00
                </p>
              </Col>
            </Row>
            <Row className="justify-content-center py-5">
              <Col className="text-center">
                <Button color="primary" onClick={() => getHydroTestTokens(web3.library, web3.account)}>
                  Buy Hydro
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Transactions />
        </Col>
      </Row>
    </Container>
  );
};

export default Wallet;
