import React from 'react';
import styles from './Navigator.scss';
import classNames from 'classnames/bind';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const cx = classNames.bind(styles);

const Navigator = () => {
  return (
    <div className={cx('navigator')}>
      <div>
        <MdChevronLeft className={cx('arrow')}/>
      </div>
      <div>
        <MdChevronRight className={cx('arrow')}/>
      </div>
    </div>
  )
}

export default Navigator;