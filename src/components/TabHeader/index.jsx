import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

function TabItem({ children, active, value, onClick }) {
  const defultClassName =
    'py-3 w-1/2 justify-center border-b-2 title-font font-medium inline-flex items-center leading-none';
  const activeClassName =
    'bg-gray-100 border-yellow-500 text-yellow-500 tracking-wider rounded-t';
  const inactiveClassName =
    'border-gray-200 hover:text-gray-900 tracking-wider';

  const handleClickItem = () => onClick(value);
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      onClick(value);
    }
  };

  return (
    <div
      className={classnames(
        defultClassName,
        active ? activeClassName : inactiveClassName
      )}
      onClick={handleClickItem}
      onKeyDown={handleEnter}
      role="button"
      tabIndex="0"
    >
      {children}
    </div>
  );
}

function TabHeader({ items, selectedValue, onItemClick }) {
  return (
    <section className="text-gray-600 body-font mb-20">
      <div className="flex justify-center">
        {items.map((item) => (
          <TabItem
            active={item.value === selectedValue}
            value={item.value}
            onClick={onItemClick}
          >
            {item.text}
          </TabItem>
        ))}
      </div>
    </section>
  );
}

TabHeader.propTypes = {
  selectedValue: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
};
TabHeader.defaultProps = {};

export default TabHeader;
