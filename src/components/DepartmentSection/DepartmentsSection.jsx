import React, { useState } from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import './DepartmentsSection.css'
function DepartmentsSection() {
  const [activeKey, setActiveKey] = useState('ophthalmologists');

  return (
    <div className="container my-5">
      <h2 className="text-center fs-2 fw-bold text-muted">Departments</h2>
      <p className="text-center text-muted">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
        <Row>
          <Col sm={3} className="border-end">
            <Nav variant="pills" className="flex-column ">
              <Nav.Item>
                <Nav.Link eventKey="cardiology">Cardiology</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="neurology">Neurology</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="hepatology">Hepatology</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="pediatrics">Pediatrics</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="ophthalmologists">Ophthalmologists</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              {/* Ophthalmologists Tab Content */}
              <Tab.Pane eventKey="ophthalmologists">
                <Row>
                  <Col md={7}>
                    <h3>Ophthalmologists</h3>
                    <p className="text-muted">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
                    <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod quis qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel.</p>
                  </Col>
                  <Col md={5}>
                    <img src="/assets/img/departments-5.jpg" alt="Ophthalmologists" className="img-fluid" />
                  </Col>
                </Row>
              </Tab.Pane>
              
              {/* Add other tab contents below following the same pattern */}
              <Tab.Pane eventKey="cardiology">
                <Row>
                  <Col md={7}>
                    <h3>Cardiology</h3>
                    <p className="text-muted">Specialized in heart and blood vessel health.</p>
                    <p>Providing advanced care for conditions such as coronary artery disease, arrhythmias, and heart failure. Our cardiologists use the latest technology to ensure the best possible outcomes for our patients.</p>
                  </Col>
                  <Col md={5}>
                    <img src="https://via.placeholder.com/300x200" alt="Cardiology" className="img-fluid" />
                  </Col>
                </Row>
              </Tab.Pane>
              
              {/* Add similar content for Neurology, Hepatology, and Pediatrics */}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default DepartmentsSection;
