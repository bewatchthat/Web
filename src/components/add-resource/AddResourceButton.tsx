import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import Button from 'react-bootstrap/Button';

function AddResourceButton() {
  return <Button><FontAwesomeIcon icon={ faPlus }/> Add Resource</Button>;
}

export default React.memo(AddResourceButton);
