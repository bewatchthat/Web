import * as React from 'react';
import Alert from 'react-bootstrap/Alert';

interface ErrorAlertProps {
  text: string;
}

function ErrorAlert(props: ErrorAlertProps) {
  return <Alert variant="danger">{ props.text }</Alert>;
}

export default React.memo(ErrorAlert);
