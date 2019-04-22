import React from 'react';
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import {
  NavLink as RouterNavLink,
} from 'react-router-dom';

const Footer = () => (
  <Container fluid className="py-3">
    <Row>
      <Col xs="12" sm="3" className="text-left">
        Powered by Hydro
      </Col>
      <Col xs="12" sm="6" className="text-center">
        <Nav fill>
          <NavItem>
            <NavLink tag={RouterNavLink} exact to="/privacy" activeClassName="active">Privacy</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RouterNavLink} exact to="/terms" activeClassName="active">Terms</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RouterNavLink} exact to="/about" activeClassName="active">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RouterNavLink} exact to="/contact" activeClassName="active">Contact</NavLink>
          </NavItem>
        </Nav>
      </Col>
      <Col xs="12" sm="3" className="text-right">
        Github
      </Col>
    </Row>
  </Container>
);

export default Footer;
