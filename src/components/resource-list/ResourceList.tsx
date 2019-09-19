import * as React from 'react';
import ResourceModel from '../../models/resource.model';
import Resource from '../resource/Resource';
import styles from './ResourceList.module.scss';

interface ResourceListProps {
  resources: ResourceModel[];
  onResourceWorthClick: (resource: ResourceModel) => void;
  onResourceNotWorthClick: (resource: ResourceModel) => void;
}

export default function ResourceList({ resources, onResourceWorthClick, onResourceNotWorthClick }: ResourceListProps) {
  return (
    <ul className={ styles.list }>
      { resources.map(x => <Resource key={ x.url } className={ styles.listItem } resource={ x } onWorthClick={ () => onResourceWorthClick(x) } onNotWorthClick={ () => onResourceNotWorthClick(x) }/>) }
    </ul>
  );
}
