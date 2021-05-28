import React from 'react';
import PropTypes from 'prop-types';

import TabHeader from '@components/TabHeader';

const TAB_ITEMS = [
  {
    text: '일',
    value: 'sun',
  },
  {
    text: '월',
    value: 'mon',
  },
  {
    text: '화',
    value: 'tue',
  },
  {
    text: '수',
    value: 'wed',
  },
  {
    text: '목',
    value: 'thu',
  },
  {
    text: '금',
    value: 'fri',
  },
  {
    text: '토',
    value: 'sat',
  },
];

function DayTabHeader({ selectedValue, onItemClick }) {
  return (
    <TabHeader
      items={TAB_ITEMS}
      selectedValue={selectedValue}
      onItemClick={onItemClick}
    />
  );
}

DayTabHeader.propTypes = {
  selectedValue: PropTypes.string,
  onItemClick: PropTypes.func,
};
DayTabHeader.defaultProps = {
  selectedValue: 'mon',
  onItemClick: (v) => v,
};

export default DayTabHeader;
