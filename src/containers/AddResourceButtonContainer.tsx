import * as React from 'react';
import { Link } from 'react-router-dom';
import AddResourceButton from '../components/add-resource/AddResourceButton';

function AddResourceButtonContainer() {
  return (
    <Link to="/add">
      <AddResourceButton/>
    </Link>
  );
}

export default React.memo(AddResourceButtonContainer);
