import * as React from 'react';
import ResourceModel from '../models/resource.model';

interface ResourceProps {
  resource: ResourceModel;
}

export default function Resource(props: ResourceProps) {
  return (
    <li>
      <a href={ props.resource.url } target="_blank"/>
    </li>
  );
}
