import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import Button from 'react-bootstrap/Button';

interface AddResourceButtonProps {
  onClick: () => void;
}

export default function AddResourceButton({ onClick }: AddResourceButtonProps) {
  return <Button onClick={ onClick }><FontAwesomeIcon icon={ faPlus }/> Add Resource</Button>;
}
