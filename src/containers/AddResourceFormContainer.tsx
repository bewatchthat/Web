import { History } from 'history';
import * as React from 'react';
import { connect } from 'react-redux';
import AddResourceForm from '../components/add-resource/AddResourceForm';
import ErrorAlert from '../components/ErrorAlert';
import AddResourceModel from '../models/add-resource.model';
import { addResource } from '../redux/actions/resource.actions';
import AppState from '../redux/state/app-state';

interface AddResourceFormContainerDispatchProps {
  addResource: (addResourceModel: AddResourceModel) => Promise<void>;
}

interface AddResourceFormContainerOwnProps {
  history: History;
}

type AddResourceFormContainerProps = AddResourceFormContainerDispatchProps & AddResourceFormContainerOwnProps;

function AddResourceFormContainer({ addResource, history }: AddResourceFormContainerProps) {
  const [addResourceModel, setAddResourceModel] = React.useState<AddResourceModel>({ title: '', url: '' });
  const [saving, setSaving] = React.useState(false);
  const [error, setError] = React.useState<string>();

  function onSubmit() {
    setSaving(true);

    addResource(addResourceModel)
      .then(() => history.push('/'))
      .catch(err => {
        setSaving(false);
        setError(err);
      });
  }

  return (
    <>
      <AddResourceForm model={ addResourceModel } saving={ saving } onChange={ setAddResourceModel } onSubmit={ onSubmit }/>

      {
        error ?
          <>
            <div className="mt-3"/>
            <ErrorAlert text={ error }/>
          </>
          : ''
      }
    </>
  );
}

export default connect<{}, AddResourceFormContainerDispatchProps, AddResourceFormContainerOwnProps, AppState>(
  null,
  // @ts-ignore
  { addResource }
)(React.memo(AddResourceFormContainer));
