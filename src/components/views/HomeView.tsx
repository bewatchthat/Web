import * as React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ResourceListContainer from '../containers/ResourceListContainer';

function HomeView() {
  return (
    <Container>
      <Row>
        <Col md={ { span: 6, offset: 3 } }>
          <ResourceListContainer/>
        </Col>
      </Row>
    </Container>
  );
}

export default React.memo(HomeView);
