import { History } from 'history';
import * as React from 'react';
import AddResourceForm from '../components/add-resource/AddResourceForm';
import ErrorAlert from '../components/ErrorAlert';
import AddResourceModel from '../models/add-resource.model';
import { addResource } from '../redux/actions/resource.actions';
import useAsyncDispatch from '../redux/use-async-dispatch';

interface AddResourceFormContainerProps {
  history: History;
}

function AddResourceFormContainer({ history }: AddResourceFormContainerProps) {
  const [addResourceModel, setAddResourceModel] = React.useState<AddResourceModel>({ title: '', url: '' });
  const [saving, setSaving] = React.useState(false);
  const [error, setError] = React.useState<string>();
  const dispatch = useAsyncDispatch();

  const onSubmit = React.useCallback(() => {
    setSaving(true);

    dispatch(addResource(addResourceModel))
      .then(() => history.push('/'))
      .catch(err => {
        setSaving(false);
        setError(err);
      });
  }, [dispatch, history, addResourceModel]);

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

export default React.memo(AddResourceFormContainer);
