import classnames from 'classnames';
import * as React from 'react';
import WithClassName from '../../utils/with-class-name';
import styles from './ResourceWorthButton.module.css';

interface ResourceWorthButtonProps {
  icon: string;
  count: number;
  active: boolean;
  onClick: () => void;
}

function ResourceWorthButton({ icon, count, active, className, onClick }: WithClassName<ResourceWorthButtonProps>) {
  const classNames = classnames(styles.root, { [styles.active]: active }, className);

  return (
    <span className={ classNames } onClick={ onClick }>
      <i className="material-icons">{ icon }</i>
      <span className={ styles.label }>{ count }</span>
    </span>
  );
}

export default React.memo(ResourceWorthButton);
