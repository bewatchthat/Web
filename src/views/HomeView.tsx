import * as React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import AddResourceButton from '../components/add-resource/AddResourceButton';
import ResourceListContainer from '../components/resource-list/ResourceListContainer';

function HomeView() {
  const onAddClick = () => {

  };

  return (
    <Container>
      <Row className="justify-content-end">
        <Col xs="auto">
          <AddResourceButton onClick={ onAddClick }/>
        </Col>
      </Row>

      <Row>
        <Col md={ { span: 6, offset: 3 } }>
          <ResourceListContainer/>
        </Col>
      </Row>
    </Container>
  );
}

export default React.memo(HomeView);
