import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AddResourceModel from '../../models/add-resource.model';
import AddResourceFormTextInput from './AddResourceFormTextInput';

interface AddResourceFormProps {
  model: AddResourceModel;
  saving: boolean;
  onChange: (model: AddResourceModel) => void;
  onSubmit: () => void;
}

function AddResourceForm({ model, saving, onChange, onSubmit }: AddResourceFormProps) {
  function submit(event: React.FormEvent) {
    if (saving)
      return;

    event.preventDefault();
    onSubmit();
  }

  return (
    <Form onSubmit={ submit }>
      <AddResourceFormTextInput label="Url" value={ model.url } onChange={ url => onChange({ ...model, url }) }/>
      <AddResourceFormTextInput label="Title" value={ model.title } onChange={ title => onChange({ ...model, title }) }/>

      <Button type="submit" disabled={ saving }>{ saving ? 'Saving...' : 'Submit' }</Button>
    </Form>
  );
}

export default React.memo(AddResourceForm);
