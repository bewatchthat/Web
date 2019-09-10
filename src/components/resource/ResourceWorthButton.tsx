import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import * as React from 'react';
import WithClassName from '../../utils/with-class-name';
import styles from './ResourceWorthButton.module.scss';

interface ResourceWorthButtonProps {
  icon: IconDefinition;
  count: number;
  active: boolean;
  onClick: () => void;
}

function ResourceWorthButton({ icon, count, active, className, onClick }: WithClassName<ResourceWorthButtonProps>) {
  const classNames = classnames(styles.root, { [styles.active]: active }, className);

  return (
    <span className={ classNames } onClick={ onClick }>
      <FontAwesomeIcon icon={ icon }/>
      <span className={ styles.label }>{ count }</span>
    </span>
  );
}

export default React.memo(ResourceWorthButton);
