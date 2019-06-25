import * as React from 'react';
import ResourceModel from '../../models/resource.model';
import Resource from './Resource';
import styles from './ResourceList.module.css';

interface ResourceListProps {
  resources: ResourceModel[];
}

export default function ResourceList(props: ResourceListProps) {
  return (
    <ul className={ styles.list }>
      { props.resources.map(x => <Resource key={ x.url } resource={ x }/>) }
    </ul>
  );
}
