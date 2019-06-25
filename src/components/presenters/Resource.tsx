import * as React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ResourceModel from '../../models/resource.model';
import styles from './Resource.module.css';
import ResourceWorthButton from './ResourceWorthButton';

interface ResourceProps {
  resource: ResourceModel;
}

export default function Resource(props: ResourceProps) {
  const { url, title, worthCount, notWorthCount } = props.resource;

  return (
    <li>
      <Row>
        <Col>
          <h4>
            <a className={ styles.title } href={ url } target="_blank" rel="noopener noreferrer">{ title }</a>
          </h4>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col className="d-flex" xs="auto">
          <ResourceWorthButton active={ false } count={ worthCount } icon="thumb_up"/>
          <ResourceWorthButton className={ styles.notWorth } active={ false } count={ notWorthCount } icon="thumb_down"/>
        </Col>
      </Row>
    </li>
  );
}
