import React from 'react';
import { Container, Card, Table } from 'react-bootstrap';

function LoginHistory() {
  return (
    <div className="dashboard-container">
      <Container className="mt-4">
        <Card className="shadow-sm">
          <Card.Body>
            <h4>User Login History</h4>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>User</th>
                  <th>Login Time</th>
                  <th>IP Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>2024-06-17 10:00 AM</td>
                  <td>192.168.0.1</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jane Smith</td>
                  <td>2024-06-17 11:30 AM</td>
                  <td>192.168.0.2</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Mike Johnson</td>
                  <td>2024-06-17 1:00 PM</td>
                  <td>192.168.0.3</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default LoginHistory;
