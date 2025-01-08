import React, { useState } from 'react';
import { Container, Navbar, Dropdown, Button, Row, Col, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import LoginHistory from './LoginHistory'; // Assuming this is in the same directory
import DataUsageCosts from './DataUsageCosts'; // Assuming this is in the same directory

const Dashboard = ({ onLogout }) => {
    const navigate = useNavigate(); // Use navigate function
  const [activePage, setActivePage] = useState('login-history'); // Default to User Login History

  const handleLogout = () => {
    onLogout(); // Call logout from App.js
    navigate('/login'); // Redirect to the login page after logout
  };

  return (
    <div className="dashboard-container">
      {/* Header with Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="fixed-top">
        <Container>
          <Navbar.Brand href="#">My Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Button
                  variant={activePage === 'login-history' ? 'primary' : 'outline-secondary'}
                  onClick={() => setActivePage('login-history')}
                  className="nav-button"
                >
                  User Login History
                </Button>
              </Nav.Item>
              <Nav.Item>
                <Button
                  variant={activePage === 'data-usage' ? 'primary' : 'outline-secondary'}
                  onClick={() => setActivePage('data-usage')}
                  className="nav-button ml-2"
                >
                  Data Usage & Costs
                </Button>
              </Nav.Item>
              <Nav.Item>
                <Dropdown align="end" className="ml-2">
                  <Dropdown.Toggle variant="secondary" id="dropdown-user" className="d-flex align-items-center">
                    <span>John Doe</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Profile</Dropdown.Item>
                    <Dropdown.Item href="#">Settings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <div className="content-wrapper mt-1 pt-1">
        <Container>
          <Row>
            <Col md={12}>
              {/* Dynamic Content Based on Active Page */}
              {activePage === 'login-history' ? <LoginHistory /> : <DataUsageCosts />}
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer */}
      <footer className="footer bg-dark text-white mt-5">
        <Container className="text-center py-3">
          <p>© 2024 My Dashboard. All Rights Reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

export default Dashboard;
