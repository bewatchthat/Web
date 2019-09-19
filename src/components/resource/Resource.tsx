import * as React from 'react';
import Card from 'react-bootstrap/Card';
import ResourceModel from '../../models/resource.model';
import WithClassName from '../../utils/with-class-name';
import ResourceBody from './ResourceBody';
import ResourceHeader from './ResourceHeader';

interface ResourceProps {
  resource: ResourceModel;
  onWorthClick: () => void;
  onNotWorthClick: () => void;
}

export default function Resource({ resource, onWorthClick, onNotWorthClick, className }: WithClassName<ResourceProps>) {
  const { url, title } = resource;

  // placeholder
  const worthCount = 2;
  const notWorthCount = 1;

  return (
    <li className={ className }>
      <Card>
        <ResourceHeader url={ url } title={ title }/>
        <ResourceBody worthCount={ worthCount } notWorthCount={ notWorthCount } onWorthClick={ onWorthClick } onNotWorthClick={ onNotWorthClick }/>
      </Card>
    </li>
  );
}
