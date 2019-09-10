import { faThumbsDown } from '@fortawesome/free-solid-svg-icons/faThumbsDown';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons/faThumbsUp';
import * as React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ResourceModel from '../../models/resource.model';
import styles from './Resource.module.scss';
import ResourceWorthButton from './ResourceWorthButton';

interface ResourceProps {
  resource: ResourceModel;
  onWorthClick: () => void;
  onNotWorthClick: () => void;
}

export default function Resource({ resource, onWorthClick, onNotWorthClick }: ResourceProps) {
  const { url, title } = resource;

  // placeholder
  const worthCount = 2;
  const notWorthCount = 1;

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
          <ResourceWorthButton active={ false } count={ worthCount } icon={ faThumbsUp } onClick={ onWorthClick }/>
          <ResourceWorthButton className={ styles.notWorth } active={ false } count={ notWorthCount } icon={ faThumbsDown } onClick={ onNotWorthClick }/>
        </Col>
      </Row>
    </li>
  );
}
