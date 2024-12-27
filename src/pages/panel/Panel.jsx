import React from "react";
import { Container, Row, Col, Nav, Tab, Card, Button } from "react-bootstrap"; // Importing required Bootstrap components
import MyNavbar from "../../components/navbar/Navbar"; // Assuming the Navbar component is already created
import Footer from "../../components/footer/Footer"; // Assuming Footer component exists
import { Link } from "react-router-dom"; // For navigation within the app

function Panel() {
  return (
    <div>
      <MyNavbar />

      {/* Main Container */}
      <Container fluid="lg" className="mt-5">
        <Row>
          {/* Sidebar */}
          <Col xs={12} md={3} lg={2} className="bg-light p-3 shadow-sm">
            <h4 className="text-center mb-4">Panel Menu</h4>
            <Nav defaultActiveKey="/" className="flex-column">
              <Nav.Link as={Link} to="/" className="text-dark mb-2">
                Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to="/articles" className="text-dark mb-2">
                Articles
              </Nav.Link>
              <Nav.Link as={Link} to="/notFound" className="text-dark mb-2">
                Profile
              </Nav.Link>
              <Nav.Link as={Link} to="/notFound" className="text-dark mb-2">
                Settings
              </Nav.Link>
            </Nav>
          </Col>

          {/* Main Content Area */}
          <Col xs={12} md={9} lg={10}>
            <Tab.Container id="panel-tabs" defaultActiveKey="overview">
              <Row>
                {/* Tab Links */}
                <Col sm={3} className="d-none d-sm-block">
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="overview">Overview</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="reports">Reports</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="settings">Settings</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>

                {/* Tab Content */}
                <Col sm={9}>
                  <Tab.Content>
                    {/* Overview Tab */}
                    <Tab.Pane eventKey="overview">
                      <h3>Overview</h3>
                      <Row>
                        {/* Card 1 */}
                        <Col sm={6} md={4} lg={3}>
                          <Card className="mb-4 box-shadow2">
                            <Card.Body>
                              <Card.Title>Articles</Card.Title>
                              <Card.Text>
                                Quick access to all your published articles and
                                insights.
                              </Card.Text>
                              <Button variant="primary">View Articles</Button>
                            </Card.Body>
                          </Card>
                        </Col>

                        {/* Card 2 */}
                        <Col sm={6} md={4} lg={3}>
                          <Card className="mb-4 box-shadow1">
                            <Card.Body>
                              <Card.Title>Profile</Card.Title>
                              <Card.Text>
                                Update and manage your personal profile.
                              </Card.Text>
                              <Button variant="success">Edit Profile</Button>
                            </Card.Body>
                          </Card>
                        </Col>

                        {/* Card 3 */}
                        <Col sm={6} md={4} lg={3}>
                          <Card className="mb-4 box-shadow1">
                            <Card.Body>
                              <Card.Title>Settings</Card.Title>
                              <Card.Text>
                                Adjust system preferences and configurations.
                              </Card.Text>
                              <Button variant="warning">Go to Settings</Button>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Tab.Pane>

                    {/* Reports Tab */}
                    <Tab.Pane eventKey="reports">
                      <h3>Reports</h3>
                      <p>Here you can view detailed reports and statistics.</p>
                    </Tab.Pane>

                    {/* Settings Tab */}
                    <Tab.Pane eventKey="settings">
                      <h3>Settings</h3>
                      <p>Manage account and privacy settings here.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Panel;
