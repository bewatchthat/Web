import * as React from 'react';
import Card from 'react-bootstrap/Card';

interface ResourceHeaderProps {
  url: string;
  title: string;
}

function ResourceHeader({ url, title }: ResourceHeaderProps) {
  return (
    <Card.Header as="h4">
      <a href={ url } target="_blank" rel="noopener noreferrer">{ title }</a>
    </Card.Header>
  );
}

export default React.memo(ResourceHeader);
