import * as React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import TextInput from '../components/TextInput';

function AddView() {
  const [text, setText] = useState('');

  return (
    <Container>
      <TextInput text={ text } onChange={ setText }/>
    </Container>
  );
}

export default React.memo(AddView);
