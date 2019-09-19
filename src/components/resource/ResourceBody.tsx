import { faThumbsDown } from '@fortawesome/free-solid-svg-icons/faThumbsDown';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons/faThumbsUp';
import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from './Resource.module.scss';
import ResourceWorthButton from './ResourceWorthButton';

interface ResourceBodyProps {
  worthCount: number;
  notWorthCount: number;
  onWorthClick: () => void;
  onNotWorthClick: () => void;
}

function ResourceBody({ notWorthCount, onNotWorthClick, onWorthClick, worthCount }: ResourceBodyProps) {
  return (
    <Card.Body>
      <Row className="justify-content-between">
        <Col>
          Description goes here
        </Col>
        <Col className="d-flex" xs="auto">
          <ResourceWorthButton active={ false } count={ worthCount } icon={ faThumbsUp } onClick={ onWorthClick }/>
          <ResourceWorthButton className={ styles.notWorth } active={ false } count={ notWorthCount } icon={ faThumbsDown } onClick={ onNotWorthClick }/>
        </Col>
      </Row>
    </Card.Body>
  );
}

export default React.memo(ResourceBody);
