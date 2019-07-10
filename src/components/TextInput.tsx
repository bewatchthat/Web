import * as React from 'react';

interface TextInputProps {
  text: string;
  onChange: (text: string) => void;
}

function TextInput(props: TextInputProps) {
  return <input value={ props.text } onChange={ e => props.onChange(e.target.value) }/>;
}

export default React.memo(TextInput);
