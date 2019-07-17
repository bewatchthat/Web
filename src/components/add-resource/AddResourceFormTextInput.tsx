import * as React from 'react';
import { FormControlProps } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

interface AddResourceFormTextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

function AddResourceFormTextInput({ label, value, onChange }: AddResourceFormTextInputProps) {
  return (
    <Form.Group>
      <Form.Label>{ label }</Form.Label>
      <Form.Control type="text" value={ value } onChange={ (e: React.FormEvent<FormControlProps>) => onChange(e.currentTarget.value!) } required/>
    </Form.Group>
  );
}

export default React.memo(AddResourceFormTextInput);
