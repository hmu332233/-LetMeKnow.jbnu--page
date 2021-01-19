import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

function TabItem({ children, active }) {
  const defultClassName =
    'py-3 w-1/2 justify-center border-b-2 title-font font-medium inline-flex items-center leading-none';
  const activeClassName =
    'bg-gray-100 border-yellow-500 text-yellow-500 tracking-wider rounded-t';
  const inactiveClassName =
    'border-gray-200 hover:text-gray-900 tracking-wider';

  return (
    <a
      className={classnames(
        defultClassName,
        active ? activeClassName : inactiveClassName
      )}
    >
      {children}
    </a>
  );
}

function TabHeader(props) {
  return (
    <section className="text-gray-600 body-font">
      <div className="flex justify-center mb-20">
        <TabItem active>월</TabItem>
        <TabItem>화</TabItem>
        <TabItem>수</TabItem>
        <TabItem>목</TabItem>
        <TabItem>금</TabItem>
        <TabItem>토</TabItem>
        <TabItem>일</TabItem>
      </div>
    </section>
  );
}

TabHeader.propTypes = {};
TabHeader.defaultProps = {};

export default TabHeader;
