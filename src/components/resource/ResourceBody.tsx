import { faThumbsDown } from '@fortawesome/free-solid-svg-icons/faThumbsDown';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons/faThumbsUp';
import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
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
  const totalVotes = worthCount + notWorthCount;

  return (
    <Card.Body>
      <Row className="justify-content-end">
        <Col xs="auto">
          <Row>
            <Col className="d-flex">
              <ResourceWorthButton active={ false } count={ worthCount } icon={ faThumbsUp } onClick={ onWorthClick }/>
              <ResourceWorthButton className={ styles.notWorth } active={ false } count={ notWorthCount } icon={ faThumbsDown } onClick={ onNotWorthClick }/>
            </Col>
          </Row>
          <Row>
            <Col>
              <ProgressBar>
                <ProgressBar variant="success" now={ worthCount / totalVotes * 100 }/>
                <ProgressBar variant="danger" now={ notWorthCount / totalVotes * 100 }/>
              </ProgressBar>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card.Body>
  );
}

export default React.memo(ResourceBody);
