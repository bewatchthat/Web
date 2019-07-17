import * as React from 'react';
import { connect } from 'react-redux';
import AddResourceForm from '../components/add-resource/AddResourceForm';
import ErrorAlert from '../components/ErrorAlert';
import AddResourceModel from '../models/add-resource.model';
import { addResource } from '../redux/actions/resource.actions';
import AppState from '../redux/state/app-state';

interface AddResourceFormContainerStateProps {
  saving: boolean;
  error?: string;
}

interface AddResourceFormContainerDispatchProps {
  addResource: (addResourceModel: AddResourceModel) => Promise<void>;
}

type AddResourceFormContainerProps = AddResourceFormContainerStateProps & AddResourceFormContainerDispatchProps;

function AddResourceFormContainer({ saving, error, addResource }: AddResourceFormContainerProps) {
  const [addResourceModel, setAddResourceModel] = React.useState<AddResourceModel>({ title: '', url: '' });

  return (
    <>
      <AddResourceForm model={ addResourceModel } saving={ saving } onChange={ setAddResourceModel } onSubmit={ () => addResource(addResourceModel) }/>

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

function mapStateToProps(state: AppState): AddResourceFormContainerStateProps {
  return {
    saving: state.addingResource,
    error: state.addResourceError
  };
}

// @ts-ignore
const mapDispatchToProps: AddResourceFormContainerDispatchProps = { addResource };

export default connect<AddResourceFormContainerStateProps, AddResourceFormContainerDispatchProps, {}, AppState>(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(AddResourceFormContainer));
