import React, { useState } from 'react';
import { Container, Row, Col, Table, Form, Button } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const DataUsageCosts = () => {
  // Dummy data for the charts and table
  const [monthFilter, setMonthFilter] = useState('');
  const [usageFilter, setUsageFilter] = useState('');
  const [costFilter, setCostFilter] = useState('');

  const dataUsage = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Data Usage (GB)',
        data: [10, 20, 30, 25, 40, 50],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const costDistribution = {
    labels: ['Hosting', 'Bandwidth', 'Storage', 'Miscellaneous'],
    datasets: [
      {
        data: [35, 25, 30, 10],
        backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#F7FF33'],
      },
    ],
  };

  // Dummy table data
  const tableData = [
    { name: 'John Doe', usage: '40 GB', cost: '$120', month: 'June' },
    { name: 'Jane Smith', usage: '30 GB', cost: '$90', month: 'May' },
    { name: 'Mike Johnson', usage: '20 GB', cost: '$60', month: 'April' },
    { name: 'Sara Lee', usage: '50 GB', cost: '$150', month: 'June' },
    { name: 'Emily Adams', usage: '10 GB', cost: '$30', month: 'January' },
  ];

  // Filter table data based on selected filters
  const filteredData = tableData.filter(row => {
    const matchesMonth = monthFilter ? row.month.toLowerCase() === monthFilter.toLowerCase() : true;
    const matchesUsage = usageFilter ? parseInt(row.usage.split(' ')[0]) >= parseInt(usageFilter) : true;
    const matchesCost = costFilter ? parseInt(row.cost.split('$')[1]) >= parseInt(costFilter) : true;

    return matchesMonth && matchesUsage && matchesCost;
  });

  return (
    <Container>
      <Row className="mt-4">
        <Col md={6}>
          {/* Bar Chart for Data Usage */}
          <h5>Data Usage (GB)</h5>
          <Bar data={dataUsage} options={{ responsive: true }} />
        </Col>

        <Col md={6}>
          {/* Pie Chart for Cost Distribution */}
          <h5>Cost Distribution</h5>
          <Pie data={costDistribution} options={{ responsive: true }} />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={12}>
          {/* Table with Filters */}
          <h5>Data Usage & Costs Table</h5>
          <Form>
            <Row>
              {/* Month Filter */}
              <Col md={3}>
                <Form.Group controlId="monthFilter">
                  <Form.Label>Filter by Month</Form.Label>
                  <Form.Control
                    as="select"
                    value={monthFilter}
                    onChange={(e) => setMonthFilter(e.target.value)}
                  >
                    <option value="">All Months</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                  </Form.Control>
                </Form.Group>
              </Col>

              {/* Usage Filter */}
              <Col md={3}>
                <Form.Group controlId="usageFilter">
                  <Form.Label>Filter by Minimum Usage (GB)</Form.Label>
                  <Form.Control
                    type="number"
                    value={usageFilter}
                    onChange={(e) => setUsageFilter(e.target.value)}
                    placeholder="Enter GB"
                  />
                </Form.Group>
              </Col>

              {/* Cost Filter */}
              <Col md={3}>
                <Form.Group controlId="costFilter">
                  <Form.Label>Filter by Minimum Cost ($)</Form.Label>
                  <Form.Control
                    type="number"
                    value={costFilter}
                    onChange={(e) => setCostFilter(e.target.value)}
                    placeholder="Enter Cost"
                  />
                </Form.Group>
              </Col>

              <Col md={3} className="d-flex align-items-end">
                <Button variant="primary" onClick={() => {
                  setMonthFilter('');
                  setUsageFilter('');
                  setCostFilter('');
                }}>
                  Clear Filters
                </Button>
              </Col>
            </Row>
          </Form>

          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>Name</th>
                <th>Usage</th>
                <th>Cost</th>
                <th>Month</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, index) => (
                <tr key={index}>
                  <td>{row.name}</td>
                  <td>{row.usage}</td>
                  <td>{row.cost}</td>
                  <td>{row.month}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default DataUsageCosts;
