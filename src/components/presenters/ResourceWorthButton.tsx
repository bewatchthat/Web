import classnames from 'classnames';
import * as React from 'react';
import WithClassName from '../../utils/with-class-name';
import styles from './ResourceWorthButton.module.css';

interface ResourceWorthButtonProps {
  icon: string;
  count: number;
  active: boolean;
}

function ResourceWorthButton({ icon, count, active, className }: WithClassName<ResourceWorthButtonProps>) {
  const classNames = classnames(styles.root, { [styles.active]: active }, className);

  return (
    <span className={ classNames }>
      <i className="material-icons">{ icon }</i>
      <span className={ styles.label }>{ count }</span>
    </span>
  );
}

export default React.memo(ResourceWorthButton);
