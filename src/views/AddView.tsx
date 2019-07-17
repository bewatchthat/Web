import * as React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { RouteComponentProps } from 'react-router';
import AddResourceFormContainer from '../containers/AddResourceFormContainer';

function AddView({ history }: RouteComponentProps) {
  return (
    <Container>
      <Row>
        <Col md={ { span: 6, offset: 3 } }>
          <h1 className="display-4">Add Resource</h1>

          <AddResourceFormContainer history={ history }/>
        </Col>
      </Row>
    </Container>
  );
}

export default React.memo(AddView);
